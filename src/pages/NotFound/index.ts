import { Block } from '../../core';
import './style.scss';

class NotFound extends Block<{}> {
  static componentName = 'NotFound';

  render() {
    return `
<main>   
  <div class="container">
    <h1 class="not-found heading">404</h1>
    <h2 class="not-found subtitle">Не туда попали</h2>
    <div class="not-found__action">
      <a href="/" class="action back">Назад к чатам</a>
    </div>
  </div>
</main>  
    `;
  }
}

export default NotFound;
