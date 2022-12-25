import { renderDOM, registerComponent } from './core';
import App from './pages';
import './global.scss';

import Button from './ui/Button';

registerComponent(Button);

window.addEventListener('DOMContentLoaded', () => {
  renderDOM(App());
});
