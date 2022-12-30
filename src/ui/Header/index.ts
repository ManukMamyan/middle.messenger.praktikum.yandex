import { Block } from '../../core';
import './style.scss';

type TProps = {
  header: string;
};

class Header extends Block<TProps> {
  static componentName = 'Header';

  constructor({ header }: TProps) {
    super({ header });
  }

  render() {
    return `
    <h1 class="header">{{header}}</h1>
    `;
  }
}

export default Header;
