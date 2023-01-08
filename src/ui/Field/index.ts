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
  onFocus: () => void;
  onBlur: () => void;
};

class Field extends Block<TProps> {
  static componentName = 'Field';

  constructor({
    id,
    type,
    name,
    label,
    value,
    onChange,
    onBlur,
    onFocus = () => {},
    editable = true,
  }: TProps) {
    super({
      id,
      type,
      name,
      label,
      value,
      editable,
      onChange,
      onBlur,
      onFocus,
    });
  }

  render() {
    return `
    <div>
      <li class="field__list-item">
          <label class="label" for="{{id}}">{{label}}</label>
          {{{FieldInput
            id=id
            type=type
            value=value
            name=name
            onChange=onChange
            onBlur=onBlur
            onFocus=onFocus
          }}}
      </li>
    <div>
    `;
  }
}

export default Field;
