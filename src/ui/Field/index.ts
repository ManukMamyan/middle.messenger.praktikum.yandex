import { Block } from '../../core';
import './style.scss';

type TProps = {
  type: 'text' | 'password';
  name: string;
  label: string;
  id: string;
  value: string;
  editable: boolean;
  onChange: () => void;
};

class Field extends Block<Omit<TProps, 'onChange'> & { events: { input: () => void } }> {
  constructor({ id, type, name, label, value, onChange, editable = true }: TProps) {
    super({ id, type, name, label, value, editable, events: { input: onChange } });
  }

  render() {
    return `
    <li class="field__list-item">
        <label class="label" for="{{id}}">{{label}}</label>
        <input class="input ${
          !this.props.editable ? 'disabled' : ''
        }" type="{{type}}" id="{{id}}" value="{{value}}" name="{{name}}"/>
    </li>
    `;
  }
}

export default Field;
