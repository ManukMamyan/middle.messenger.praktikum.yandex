import Block from '../../core/Block';
import validate, { ValidateRuleType } from '../../helpers/validate';
import './style.scss';

type TProps = {
  onClick: (event: SubmitEvent) => void;
  errorMessage: string;
};

class Chat extends Block<TProps> {
  static componentName = 'Chat';

  constructor() {
    super();

    this.setProps({
      onClick: this.onClick,
      errorMessage: '',
    });
  }

  onClick = (event: SubmitEvent) => {
    event.preventDefault();

    const inputElMessage = this._element?.querySelector('input[name=message]') as HTMLInputElement;
    const message = inputElMessage.value;

    const errorMessage = validate({ type: ValidateRuleType.MESSAGE, value: message });

    this.setProps({
      errorMessage,
      onClick: this.onClick,
    });

    if (!errorMessage) {
      console.log('[MESSAGE]', { message });
    }
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
        <li class="aside__chat-list__item">
          <div class="user-info">
            <div class="user-avatar"></div>
            <div class="info">
              <div class="title">Андрей</div>
              <div class="subtitle">Изображение</div>
            </div>
          </div>
          <div class="chat-message__data">
            <div class="last-message__time">10:49</div>
            <div class="last-message__unread">2</div>
          </div>
        </li>
      </ul>
    </aside>
    <main class="chat__messages-list">
      <header class="chat__messages-list__header">
        <div class="user-info">
          <div class="user-avatar"></div>
          <div class="header__user-info__title">Вадим</div> 
        </div>
        <div class="chat__messages-list__header-menu">
          <div class="header-menu__dot"></div>
          <div class="header-menu__dot"></div>
          <div class="header-menu__dot"></div>
        </div>
      </header>
      <div class="chat__messages-list__content"></div>
      <footer class="chat__messages-list__footer">
        <form class="message-form">
          <i class="fa fa-paperclip file-icon"></i>
          <input class="input_message" type="text" placeholder="Сообщение" name="message">
          {{{Fab icon="&#x2192;" onClick=onClick}}}
        </form>
      </footer>
    </main>
  </div>
    `;
  }
}

export default Chat;
