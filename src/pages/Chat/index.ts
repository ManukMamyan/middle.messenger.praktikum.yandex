import { Block, Store } from '../../core';
import { chatList, createChat, addUser, deleteUser, token } from '../../services/chat';
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
  createChat: (event: SubmitEvent) => void;
  addParticipantToChat: (event: SubmitEvent) => void;
  deleteParticipantFromChat: (event: SubmitEvent) => void;
  selectedChat: () => string | null;
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
};

class Chat extends Block<TProps> {
  static componentName = 'Chat';
  static chatInitiated = false;

  constructor() {
    super();

    this.setProps({
      onClick: this.onClick,
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
      selectedChat: () => this.props.store.getState().selectedChat,
      chats: () => this.props.store?.getState().chats,
    });
  }

  componentDidMount(): void {
    this.props.store.dispatch(chatList);
  }

  componentDidUpdate(_oldProps: TProps, _newProps: TProps): boolean {
    const chatId = this.props.store?.getState().selectedChat;
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

    if (_oldProps.selectedChat !== _newProps.selectedChat) {
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
          <div class="user-avatar"></div>
          <div class="header__user-info__title">{{ title }}</div> 
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
