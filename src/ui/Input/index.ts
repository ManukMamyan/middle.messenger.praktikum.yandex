import { Block } from '../../core';
import './style.scss';

type TProps = {
  type: 'text' | 'password';
  name: string;
  label: string;
  id: string;
  error?: string;
  value?: string;
  onChange: () => void;
};
class Input extends Block<Omit<TProps, 'onChange'> & { events: { input: () => void } }> {
  static componentName = 'Input';

  constructor({ id, type, name, label, error, value, onChange }: TProps) {
    super({ id, type, name, label, error, value, events: { input: onChange } });
  }

  render() {
    return `
  <div class="input__wrapper">
    <label class="input__label" for="{{id}}">{{label}}</label>
    <input class="input__input" type="{{type}}" id="{{id}}" name="{{name}}" value="{{value}}" />
    <div class="input__error">{{#if error}}{{error}}{{/if}}</div>
  </div>
    `;
  }
}

export default Input;
