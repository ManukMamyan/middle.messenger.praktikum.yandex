import { Block } from '../../core';
import './style.scss';

type TProps = {
  text: string;
  onClick: () => void;
};

class Button extends Block {
  constructor({ text, onClick }: TProps) {
    super({ text, events: { click: onClick } });
  }

  render() {
    return `
    <button class="button">{{text}}</button>
    `;
  }
}

export default Button;
