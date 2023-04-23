import { Block } from '../../core';
import './style.scss';

type TProps = {
  onClick: () => void;
};

class Div extends Block<Omit<TProps, 'onClick'> & { events: { click: () => void } }> {
  static componentName = 'Div';

  constructor({ onClick }: TProps) {
    super({ events: { click: onClick } });
  }

  render() {
    return `
    <Div class="div"></Div>
    `;
  }
}

export default Div;
