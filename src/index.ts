import { renderDOM, registerComponent } from './core';
import App from './pages';
import './global.scss';

import Button from './ui/Button';
import Link from './ui/Link';
import Input from './ui/Input';
import Header from './ui/Header';
import Field from './ui/Field';
import Fab from './ui/Fab';

registerComponent(Button);
registerComponent(Link);
registerComponent(Input);
registerComponent(Header);
registerComponent(Field);
registerComponent(Fab);

window.addEventListener('DOMContentLoaded', () => {
  renderDOM(App());
});
