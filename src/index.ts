import { renderDOM, registerComponent } from './core';
import App from './pages';
import './global.scss';

import Button from './ui/Button';
import Link from './ui/Link';
import Input from './ui/Input';
import Header from './ui/Header';
import Field from './ui/Field';

registerComponent(Button);
registerComponent(Link);
registerComponent(Input);
registerComponent(Header);
registerComponent(Field);

window.addEventListener('DOMContentLoaded', () => {
  renderDOM(App());
});
