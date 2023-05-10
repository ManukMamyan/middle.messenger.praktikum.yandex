import { Block, Store } from '../../core';
import { chatList, editAvatar, createChat, addUser, deleteUser, token } from '../../services/chat';
import Socket from '../../services/socket';
import { withStore } from '../../HOCs/withStore';
import validate, { ValidateRuleType } from '../../helpers/validate';
import './style.scss';

type TMessage = {
  id: number;
  user_id: number;
  content: string;
  type: string;
  time: string;
};

type TProps = {
  onClick: (event: SubmitEvent) => void;
  toggleAvatarForm: () => void;
  createChat: (event: SubmitEvent) => void;
  addParticipantToChat: (event: SubmitEvent) => void;
  deleteParticipantFromChat: (event: SubmitEvent) => void;
  selectedChat: () => TSelectedChat | null;
  selectedChatTitle: () => string | undefined;
  selectedChatAvatar: () => string | undefined;
  selectedChatId: () => string | null;
  toggleAddChatForm: () => void;
  toggleChatActions: () => void;
  renderMessages: () => string;
  chats: () => UserChat[] | null;
  errorMessage: string;
  isShowAddChatForm: boolean;
  isShowChatActions: boolean;
  store: Store<AppState>;
  token?: string;
  socket?: Socket;
  messages: TMessage[];
  isShowAvatarForm: boolean;
};

class Chat extends Block<TProps> {
  static componentName = 'Chat';
  static chatInitiated = false;

  constructor() {
    super();

    this.setProps({
      onClick: this.onClick,
      toggleAvatarForm: this.toggleAvatarForm,
      toggleAddChatForm: this.toggleAddChatForm,
      toggleChatActions: this.toggleChatActions,
      createChat: this.createChat,
      addParticipantToChat: this.addParticipantToChat,
      deleteParticipantFromChat: this.deleteParticipantFromChat,
      renderMessages: this.renderMessages,
      errorMessage: '',
      isShowAddChatForm: false,
      isShowChatActions: false,
      store: window.store,
      messages: [],
      selectedChatId: () => this.props.store.getState().selectedChatId,
      selectedChatTitle: () => this.props.store.getState().selectedChat?.title,
      selectedChatAvatar: () => this.props.store.getState().selectedChat?.avatar,
      selectedChat: () => this.props.store.getState().selectedChat,
      chats: () => this.props.store?.getState().chats,
      isShowAvatarForm: false,
    });
  }

  componentDidMount(): void {
    this.props.store.dispatch(chatList);
  }

  componentDidUpdate(_oldProps: TProps, _newProps: TProps): boolean {
    const chatId = this.props.store?.getState().selectedChatId;
    const userId = this.props.store?.getState().user?.id;

    if (!Chat.chatInitiated && chatId && userId) {
      Chat.chatInitiated = true;

      token(chatId)
        .then(({ token }: { token: string }) => {
          const socket = new Socket({ userId, chatId, token });
          socket.onMessage((data: TMessage) => {
            this.setProps({
              ...this.props,
              messages: [...this.props.messages, data],
            });
          });

          this.setProps({
            ...this.props,
            socket,
          });
        })
        .catch(console.log);
    }

    if (_oldProps.selectedChatId !== _newProps.selectedChatId) {
      Chat.chatInitiated = false;
    }

    return true;
  }

  componentWillUnmount(): void {
    if (this.props.socket) {
      this.props.socket.close();
    }
  }

  onClick = (event: SubmitEvent) => {
    event.preventDefault();

    const inputElMessage = this._element?.querySelector('input[name=message]') as HTMLInputElement;
    const message = inputElMessage.value;

    const errorMessage = validate({ type: ValidateRuleType.MESSAGE, value: message });

    this.setProps({
      ...this.props,
      errorMessage,
    });

    if (!errorMessage) {
      this.props.socket?.sendMessage(message);
    }
  };

  createChat = (event: SubmitEvent) => {
    event.preventDefault();

    const chatTitleInput = document.getElementById('titleNewChat') as HTMLInputElement;
    const title = chatTitleInput.value;

    if (title) {
      this.props.store.dispatch(createChat, { title });
    }

    this.toggleAddChatForm();
  };

  addParticipantToChat = (event: SubmitEvent) => {
    event.preventDefault();

    const chatTitleInput = document.getElementById('addParticipantToChat') as HTMLInputElement;
    const participantId = chatTitleInput.value;
    const chatId = this.props.store.getState().selectedChat;

    if (participantId && typeof +participantId === 'number' && chatId) {
      this.props.store.dispatch(addUser, { users: [+participantId], chatId: +chatId });
    }

    this.toggleChatActions();
  };

  deleteParticipantFromChat = (event: SubmitEvent) => {
    event.preventDefault();

    const chatTitleInput = document.getElementById('deleteParticipantFromChat') as HTMLInputElement;
    const participantId = chatTitleInput.value;
    const chatId = this.props.store.getState().selectedChat;

    if (participantId && typeof +participantId === 'number' && chatId) {
      this.props.store.dispatch(deleteUser, { users: [+participantId], chatId: +chatId });
    }

    this.toggleChatActions();
  };

  toggleAddChatForm = () => {
    this.setProps({ ...this.props, isShowAddChatForm: !this.props.isShowAddChatForm });
  };

  toggleChatActions = () => {
    this.setProps({ ...this.props, isShowChatActions: !this.props.isShowChatActions });
  };

  toggleAvatarForm = () => {
    this.setProps({ ...this.props, isShowAvatarForm: !this.props.isShowAvatarForm });

    if (this.props.isShowAvatarForm) {
      const form = document.getElementById('avatarForm') as HTMLFormElement;

      form.addEventListener('submit', (event: SubmitEvent) => {
        event.preventDefault();
        const data = new FormData(form);

        this.props.store.dispatch(editAvatar, data);
        this.toggleAvatarForm();
      });
    }
  };

  renderAddChatForm = () => {
    return `
      <form id="addChatForm" class="add_chat_form__wrapper">
      {{{Input id="titleNewChat" type="text" name="text" label="Имя чата" placeholder="Введите имя чата"}}}
      {{{Button size="medium" type="submit" text="Создать" onClick=createChat}}}
      <form> 
    `;
  };

  renderMessages = () => {
    return this.props.messages
      ?.map((message) => {
        return `<div>${message.content}</div>`;
      })
      .join('');
  };

  renderAvatarForm = () => {
    return `
    <form id="avatarForm" class="avatar_form__wrapper">
      {{{Input id="avatar" type="file" name="avatar" label="Аватар"}}}
      {{{Input id="chatId" value=selectedChatId type="hidden" name="chatId" label="ID чата"}}}
      {{{Button size="medium" type="submit" text="Отправить"}}}
    <form> 
    `;
  };

  renderChatActions = () => {
    return `
      <form id="chatActionsForm" class="chat-participants__actions">
        {{{Input id="addParticipantToChat" type="text" name="text" label="Имя чата" placeholder="Введите id участника"}}}
        {{{Button size="medium" type="submit" text="Добавить участника" onClick=addParticipantToChat}}}
        </tr>
        {{{Input id="deleteParticipantFromChat" type="text" name="text" label="Имя чата" placeholder="Введите id участника"}}}
        {{{Button size="medium" type="submit" text="Удалить участника" onClick=deleteParticipantFromChat}}}
      <form>
    `;
  };

  render() {
    return `
  <div class="chat-container">
    <aside class="aside__chat">
      <header class="aside__header">Профиль<a class="aside__header-link" href="/profile">&#62;</a></header>
      <div class="aside__chat-filter">
        <input class="aside__chat-filter__input" type="text" placeholder="&#128269 Поиск">
      </div>
      <ul class="aside__chat-list">
        {{#each chats}}
        {{{ChatItem id=id avatar=avatar title=title content=content time=time unreadCount=unread_count}}}
        {{/each}}
      </ul>
    </aside>
    <main class="chat__messages-list">
     {{#if selectedChat}}
        <header class="chat__messages-list__header">
        <div class="user-info">
        <div class="user-avatar">
            <img class="avatar_image--edit-chat-avatar" src="https://ya-praktikum.tech/api/v2/resources{{selectedChatAvatar}}" alt="avatar">
            {{{Div onClick=toggleAvatarForm}}}
            ${this.props.isShowAvatarForm ? this.renderAvatarForm() : ''}
          </div>
          <div class="header__user-info__title">{{ selectedChatTitle }}</div> 
        </div>
        {{{MenuToggler onClick=toggleChatActions}}}
        ${this.props.isShowChatActions ? this.renderChatActions() : ''}
      </header>
      <div class="chat__messages-list__content">${
        this.props.renderMessages ? this.props.renderMessages() : ''
      }</div>
      <footer class="chat__messages-list__footer">
        <div class="message-form-footer">
          <i class="fa fa-paperclip file-icon"></i>
          <input class="input_message" type="text" placeholder="Сообщение" name="message">
          {{{Fab icon="&#x2192;" onClick=onClick}}}
        </div>
      </footer>
      {{else}}
        <header class="chat__messages-list__header">
          {{{MenuToggler onClick=toggleAddChatForm}}}
          ${this.props.isShowAddChatForm ? this.renderAddChatForm() : ''}
        </header>
        <div class="chat__messages-list__empty"> выберите чат </div>  
     {{/if}}
    </main>
  </div>
    `;
  }
}

export default withStore(Chat);
