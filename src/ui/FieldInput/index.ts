import { Block } from '../../core';
import './style.scss';

type TProps = {
  type: 'text' | 'password' | 'email' | 'phone' | 'number';
  name: string;
  id: string;
  value?: string;
  editable: boolean;
  onChange: () => void;
  onFocus: () => void;
  onBlur: () => void;
};
class FieldInput extends Block<
  Omit<TProps, 'onChange' | 'onFocus' | 'onBlur'> & {
    events: { input: () => void; focus: () => void; blur: () => void };
  }
> {
  static componentName = 'FieldInput';

  constructor({
    id,
    type,
    name,
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
      value,
      editable,
      events: { input: onChange, focus: onFocus, blur: onBlur },
    });
  }

  render() {
    return `
    <input class="input ${
      !this.props.editable ? 'disabled' : ''
    }" type="{{type}}" id="{{id}}" value="{{value}}" name="{{name}}"/>
    `;
  }
}

export default FieldInput;
