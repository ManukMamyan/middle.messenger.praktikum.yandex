import Block from '../../core/Block';
import './style.scss';

class Chat extends Block {
  render() {
    return `
  <div class="chat-container">
    <aside class="aside__chat">
      <header class="aside__header">Профиль<a class="aside__header-link">&#62;</a></header>
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
        <li class="aside__chat-list__item">
          <div class="user-info">
            <div class="user-avatar"></div>
            <div class="info">
              <div class="title">Киноклуб</div>
              <div class="subtitle">стикер</div>
            </div>
          </div>
          <div class="chat-message__data">
            <div class="last-message__time">12:00</div>
            <div class="last-message__unread">2</div>
          </div>
        </li>
        <li class="aside__chat-list__item">
          <div class="user-info">
            <div class="user-avatar"></div>
            <div class="info">
              <div class="title">Илья</div>
              <div class="subtitle">друзья, у меня для вас особенный...</div>
            </div>
          </div>
          <div class="chat-message__data">
            <div class="last-message__time">15:12</div>
            <div class="last-message__unread">4</div>
          </div>
        </li>
        <li class="aside__chat-list__item">
        <div class="user-info">
          <div class="user-avatar"></div>
          <div class="info">
            <div class="title">Илья</div>
            <div class="subtitle">друзья, у меня для вас особенный...</div>
          </div>
        </div>
        <div class="chat-message__data">
          <div class="last-message__time">15:12</div>
          <div class="last-message__unread">4</div>
        </div>
        </li>
        <li class="aside__chat-list__item">
        <div class="user-info">
        <div class="user-avatar"></div>
          <div class="info">
            <div class="title">Илья</div>
            <div class="subtitle">друзья, у меня для вас особенный...</div>
          </div>
        </div>
        <div class="chat-message__data">
          <div class="last-message__time">15:12</div>
          <div class="last-message__unread">4</div>
        </div>
        </li>
        <li class="aside__chat-list__item">
        <div class="user-info">
          <div class="user-avatar"></div>
          <div class="info">
            <div class="title">Илья</div>
            <div class="subtitle">друзья, у меня для вас особенный...</div>
          </div>
        </div>
        <div class="chat-message__data">
          <div class="last-message__time">15:12</div>
          <div class="last-message__unread">4</div>
        </div>
        </li>
        <li class="aside__chat-list__item">
        <div class="user-info">
          <div class="user-avatar"></div>
          <div class="info">
            <div class="title">Илья</div>
            <div class="subtitle">друзья, у меня для вас особенный...</div>
          </div>
        </div>
        <div class="chat-message__data">
          <div class="last-message__time">15:12</div>
          <div class="last-message__unread">4</div>
        </div>
        </li>
        <li class="aside__chat-list__item">
        <div class="user-info">
          <div class="user-avatar"></div>
          <div class="info">
            <div class="title">Илья</div>
            <div class="subtitle">друзья, у меня для вас особенный...</div>
          </div>
        </div>
        <div class="chat-message__data">
          <div class="last-message__time">15:12</div>
          <div class="last-message__unread">4</div>
        </div>
        </li>
        <li class="aside__chat-list__item">
        <div class="user-info">
          <div class="user-avatar"></div>
          <div class="info">
            <div class="title">Илья</div>
            <div class="subtitle">друзья, у меня для вас особенный...</div>
          </div>
        </div>
        <div class="chat-message__data">
          <div class="last-message__time">15:12</div>
          <div class="last-message__unread">4</div>
        </div>
        </li>
        <li class="aside__chat-list__item">
        <div class="user-info">
          <div class="user-avatar"></div>
          <div class="info">
            <div class="title">Илья</div>
            <div class="subtitle">друзья, у меня для вас особенный...</div>
          </div>
        </div>
        <div class="chat-message__data">
          <div class="last-message__time">15:12</div>
          <div class="last-message__unread">4</div>
        </div>
        </li>
        <li class="aside__chat-list__item">
        <div class="user-info">
          <div class="user-avatar"></div>
          <div class="info">
            <div class="title">Илья</div>
            <div class="subtitle">друзья, у меня для вас особенный...</div>
          </div>
        </div>
        <div class="chat-message__data">
          <div class="last-message__time">15:12</div>
          <div class="last-message__unread">4</div>
        </div>
        </li>
      </ul>
    </aside>
    <main class="chat_messages-list"></main>
  </div>
    `
  }
}

export default Chat
