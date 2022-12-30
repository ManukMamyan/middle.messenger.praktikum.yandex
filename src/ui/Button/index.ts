import { Block } from '../../core';
import './style.scss';

type TProps = {
  text: string;
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
};

class Button extends Block<Omit<TProps, 'onClick'> & { events: { click: () => void } }> {
  constructor({ text, size, onClick }: TProps) {
    super({ text, size, events: { click: onClick } });
  }

  render() {
    return `
    <button class="button ${this.props.size}">{{text}}</button>
    `;
  }
}

export default Button;
