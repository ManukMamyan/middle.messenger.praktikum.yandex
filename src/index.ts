import {renderDOM, registerComponent} from './core'
import App from './pages';
import './global.scss';

window.addEventListener('DOMContentLoaded', () => {
  renderDOM(App())
});
