/* eslint-disable no-undef */
import App from './pages';
import './global.scss';

window.addEventListener('load', () => {
  const rootElement = document.getElementById('root');

  rootElement.innerHTML = App();
});
