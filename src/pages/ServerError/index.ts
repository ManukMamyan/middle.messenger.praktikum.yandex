import { Block } from '../../core';
import '../NotFound/style.scss';

class NotFound extends Block<{}> {
  render() {
    return `
    <div class="container">
      <h1 class="not-found heading">500</h1>
      <h2 class="not-found subtitle">Мы уже фиксим</h2>
      <div class="not-found__action">
        <a href="/" class="action back">Назад к чатам</a>
      </div>
    </div>  
      `;
  }
}

export default NotFound;
