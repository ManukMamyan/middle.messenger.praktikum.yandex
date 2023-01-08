import { Block } from '../../core';
import './style.scss';

type TProps = {
  icon: string;
  onClick: () => void;
};

class Fab extends Block<Omit<TProps, 'onClick'> & { events: { click: () => void } }> {
  static componentName = 'Fab';

  constructor({ icon, onClick }: TProps) {
    super({ icon, events: { click: onClick } });
  }

  render() {
    return `
    <button class="fab">{{{icon}}}</button>
    `;
  }
}

export default Fab;
