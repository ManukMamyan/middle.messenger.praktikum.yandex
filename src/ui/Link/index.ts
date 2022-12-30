import { Block } from '../../core';
import './style.scss';

type TProps = {
  text: string;
  to: string;
};
class Link extends Block<TProps> {
  static componentName = 'Link'

  constructor({ text, to }: TProps) {
    super({ text, to });
  }

  render() {
    return `
    <a class="link" href="{{to}}">{{text}}</a>
    `;
  }
}

export default Link;
