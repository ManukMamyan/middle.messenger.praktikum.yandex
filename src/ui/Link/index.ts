import { Block } from '../../core';
import './style.scss';

type TProps = {
  text: string;
  to: string;
  onClick: (event: MouseEvent) => void;
};

type TPropsLinkBlock = Omit<TProps, 'onClick'> & { events: { click: (event: MouseEvent) => void } };

class Link extends Block<TPropsLinkBlock> {
  static componentName = 'Link';

  constructor({ text, to, onClick }: TProps) {
    super({ text, to, events: { click: onClick } });
  }

  render() {
    return `
    <div>
      <a class="link" href="{{to}}" onclick="event.preventDefault()">{{text}}</a>
    <div>
    `;
  }
}

export default Link;
