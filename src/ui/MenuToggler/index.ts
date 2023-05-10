import { Block } from '../../core';
import './style.scss';

type TProps = {
  onClick: (event: MouseEvent) => void;
};

type TPropsMenuTogglerBlock = Omit<TProps, 'onClick'> & {
  events: { click: (event: MouseEvent) => void };
};

class MenuToggler extends Block<TPropsMenuTogglerBlock> {
  static componentName = 'MenuToggler';

  constructor({ onClick }: TProps) {
    super({ events: { click: onClick } });
  }

  render() {
    return `
    <div class="menu-toggler">
      <div class="menu-toggler__dot"></div>
      <div class="menu-toggler__dot"></div>
      <div class="menu-toggler__dot"></div>
    </div>
    `;
  }
}

export default MenuToggler;
