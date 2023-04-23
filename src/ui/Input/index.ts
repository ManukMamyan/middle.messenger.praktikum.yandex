import { Block } from '../../core';
import './style.scss';

type TProps = {
  type: 'text' | 'password' | 'email' | 'phone' | 'number';
  name: string;
  id: string;
  value?: string;
  placeholder?: string;
  onChange: () => void;
  onFocus: () => void;
  onBlur: () => void;
};
class Input extends Block<
  Omit<TProps, 'onChange' | 'onFocus' | 'onBlur'> & {
    events: { input: () => void; focus: () => void; blur: () => void };
  }
> {
  static componentName = 'Input';

  constructor({
    id,
    type,
    name,
    value,
    placeholder,
    onChange,
    onBlur,
    onFocus = () => {},
  }: TProps) {
    super({
      id,
      type,
      name,
      value,
      placeholder,
      events: { input: onChange, focus: onFocus, blur: onBlur },
    });
  }

  render() {
    return `
      <input class="input" type="{{type}}" id="{{id}}" name="{{name}}" value="{{value}}" placeholder="{{placeholder}}"/>
    `;
  }
}

export default Input;
