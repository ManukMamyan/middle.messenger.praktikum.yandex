import { Block } from '../../core';
import './style.scss';

type TProps = {
  label: string;
  id: string;
};
class Label extends Block<TProps> {
  static componentName = 'Label';

  constructor({ id, label }: TProps) {
    super({ id, label });
  }

  render() {
    return `
      <label class="input__label" for="{{id}}">{{label}}</label>
    `;
  }
}

export default Label;
