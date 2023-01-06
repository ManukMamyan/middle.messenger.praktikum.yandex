import { Block } from '../../core';
import './style.scss';

type TProps = {
  error?: string;
};
class InputError extends Block<TProps> {
  static componentName = 'InputError';

  constructor({ error }: TProps) {
    super({ error });
  }

  render() {
    return `
      <div class="input__error">{{#if error}}{{error}}{{/if}}</div>
    `;
  }
}

export default InputError;
