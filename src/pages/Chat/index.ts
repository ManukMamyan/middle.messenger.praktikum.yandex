import { Block, Store } from '../../core';
import { chatList, createChat } from '../../services/chat';
import { withStore } from '../../HOCs/withStore';
import validate, { ValidateRuleType } from '../../helpers/validate';
import './style.scss';

type TProps = {
  onClick: (event: SubmitEvent) => void;
  createChat: (event: SubmitEvent) => void;
  selectedChat: () => string | null;
  toggleAddChatForm: () => void;
  chats: () => UserChat[] | null;
  errorMessage: string;
  isShowAddChatForm: boolean;
  store: Store<AppState>;
};

class Chat extends Block<TProps> {
  static componentName = 'Chat';

  constructor() {
    super();

    this.setProps({
      onClick: this.onClick,
      toggleAddChatForm: this.toggleAddChatForm,
      createChat: this.createChat,
      errorMessage: '',
      isShowAddChatForm: false,
      store: window.store,
      selectedChat: () => this.props.store.getState().selectedChat,
      chats: () => this.props.store?.getState().chats,
    });
  }

  componentDidMount(props: TProps): void {
    this.props.store.dispatch(chatList);
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
      console.log('[MESSAGE]', { message });
    }
  };

  createChat = (event: SubmitEvent) => {
    event.preventDefault();

    const chatTitleInput = document.getElementById('titleNewChat') as HTMLInputElement;
    const title = chatTitleInput.value;

    if (title) {
      this.props.store.dispatch(createChat, { title });
    }

    this.toggleAddChatForm;
  };

  toggleAddChatForm = () => {
    this.setProps({ ...this.props, isShowAddChatForm: !this.props.isShowAddChatForm });
  };

  renderAddChatForm = () => {
    return `
    <form id="addChatForm" class="add_chat_form__wrapper">
      {{{Input id="titleNewChat" type="text" name="text" label="Имя чата" placeholder="Введите имя чата"}}}
      {{{Button size="medium" type="submit" text="Создать" onClick=createChat}}}
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
        {{{MenuToggler onClick=toggleAddChatForm}}}
      </header>
      <div class="chat__messages-list__content"></div>
      <footer class="chat__messages-list__footer">
        <form class="message-form">
          <i class="fa fa-paperclip file-icon"></i>
          <input class="input_message" type="text" placeholder="Сообщение" name="message">
          {{{Fab icon="&#x2192;" onClick=onClick}}}
        </form>
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
