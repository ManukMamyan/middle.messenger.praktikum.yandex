import { Block } from '../../core';
import './style.scss';

type TProps = {
  type: 'text' | 'password';
  name: string;
  label: string;
  id: string;
  onChange: () => void;
};
class Input extends Block {
  constructor({ id, type, name, label, onChange }: TProps) {
    super({ id, type, name, label, events: { input: onChange } });
  }

  render() {
    return `
  <div class="input__wrapper">
    <label class="input__label" for="{{id}}">{{label}}</label>
    <input class="input__input" type="{{type}}" id="{{id}}" name="{{name}}" />
  </div>
    `;
  }
}

export default Input;
