import { Block } from '../../core';
import './style.scss';

export type TProps = {
  text: string;
  size: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
};

export type TPropsButtonBlock = Omit<TProps, 'onClick'> & { events: { click: () => void } };

class Button extends Block<TPropsButtonBlock> {
  static componentName = 'Button';

  constructor({ text, size, onClick, type = 'button' }: TProps) {
    super({ type, text, size, events: { click: onClick } });
  }

  render() {
    return `
    <button class="button ${this.props.size}">{{text}}</button>
    `;
  }
}

export default Button;
