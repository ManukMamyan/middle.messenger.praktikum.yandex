import { Block } from '../../core';
import './style.scss';

type TProps = {
  type: 'text' | 'password';
  name: string;
  label: string;
  id: string;
  value: string;
  error?: string;
  editable: boolean;
  onChange: () => void;
};

class Field extends Block<Omit<TProps, 'onChange'> & { events: { input: () => void } }> {
  static componentName = 'Field';

  constructor({ id, type, name, label, value, error, onChange, editable = true }: TProps) {
    super({ id, type, name, label, value, editable, error, events: { input: onChange } });
  }

  render() {
    return `
    <div>
      <li class="field__list-item">
          <label class="label" for="{{id}}">{{label}}</label>
          <input class="input ${
            !this.props.editable ? 'disabled' : ''
          }" type="{{type}}" id="{{id}}" value="{{value}}" name="{{name}}"/>
      </li>
      <div class="input__error">{{#if error}}{{error}}{{/if}}</div>
    <div>
    `;
  }
}

export default Field;
