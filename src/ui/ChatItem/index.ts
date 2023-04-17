import { Block } from '../../core';
import './style.scss';

type TProps = {
  avatar: string;
  id: string;
  title: string;
  content: string;
  time: string;
  unreadCount: string;
};

type TPropsChatItemBlock = TProps & {
  events: { click: (event: MouseEvent) => void };
};

class ChatItem extends Block<TPropsChatItemBlock> {
  static componentName = 'ChatItem';

  constructor({ id, avatar, title, content, time, unreadCount }: TProps) {
    super({
      id,
      avatar,
      title,
      content,
      time,
      unreadCount,
      events: { click: () => window.store.dispatch({ selectedChat: id }) },
    });
  }

  render() {
    return `
    <li class="chat-list__item">
      <div class="user-info">
        <img class="avatar_image" src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" alt="avatar">
        <div class="info">
          <div class="title">{{ title }}</div>
          <div class="subtitle">{{ content }}</div>
        </div>
        </div>
        <div class="chat-message__data">
        <div class="last-message__time">{{ time }}</div>
        <div class="last-message__unread">{{ unreadCount }}</div>
      </div>
    </li>
    `;
  }
}

export default ChatItem;
