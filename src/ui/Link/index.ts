import { Block } from '../../core';
import './style.scss';

type TProps = {
  text: string;
  to: string;
  action?: boolean;
  exit?: boolean;
  onClick: (event: MouseEvent) => void;
};

type TPropsLinkBlock = Omit<TProps, 'onClick'> & { events: { click: (event: MouseEvent) => void } };

class Link extends Block<TPropsLinkBlock> {
  static componentName = 'Link';

  constructor({ text, to, action, exit, onClick }: TProps) {
    super({ text, to, action, exit, events: { click: onClick } });
  }

  render() {
    return `
    <div>
      <a class="link ${this.props.action ? 'action' : ''} ${
      this.props.exit ? 'exit' : ''
    }" href="{{to}}" onclick="event.preventDefault()">{{text}}</a>
    <div>
    `;
  }
}

export default Link;
