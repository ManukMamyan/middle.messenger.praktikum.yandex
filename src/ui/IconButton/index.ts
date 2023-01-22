import { Block } from '../../core';
import './style.scss';

type TProps = {
  onClick: (event: MouseEvent) => void;
};

type TPropsIconButtonBlock = Omit<TProps, 'onClick'> & {
  events: { click: (event: MouseEvent) => void };
};

class IconButton extends Block<TPropsIconButtonBlock> {
  static componentName = 'IconButton';

  constructor({ onClick }: TProps) {
    super({ events: { click: onClick } });
  }

  render() {
    return `
    <div class="wrapper__action">
      <a class="back">&#x2190</a>
    </div>
    `;
  }
}

export default IconButton;
