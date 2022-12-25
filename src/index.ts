import { renderDOM, registerComponent } from './core';
import App from './pages';
import './global.scss';

import Button from './ui/Button';
import Link from './ui/Link';

registerComponent(Button);
registerComponent(Link);

window.addEventListener('DOMContentLoaded', () => {
  renderDOM(App());
});
