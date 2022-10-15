/* eslint-disable no-undef */
import App from './pages';

window.addEventListener('load', () => {
  const rootElement = document.getElementById('root');

  rootElement.innerHTML = App();
});
