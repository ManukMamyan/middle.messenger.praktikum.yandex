import { registerComponent, Store, Router } from './core';
import defaultState from './store';
import initRouter from './router';
import initApp from './services/initApp';

import './global.scss';

import Button from './ui/Button';
import Link from './ui/Link';
import Label from './ui/Label';
import Input from './ui/Input';
import FieldInput from './ui/FieldInput';
import InputError from './ui/InputError';
import Header from './ui/Header';
import Field from './ui/Field';
import Fab from './ui/Fab';
import IconButton from './ui/IconButton';

registerComponent(Button);
registerComponent(Link);
registerComponent(Label);
registerComponent(Input);
registerComponent(FieldInput);
registerComponent(InputError);
registerComponent(Header);
registerComponent(Field);
registerComponent(Fab);
registerComponent(IconButton);

declare global {
  interface Window {
    store: Store<AppState>;
    router: Router;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const store = new Store<AppState>(defaultState);
  const router = new Router();

  window.router = router;
  window.store = store;

  store.on('changed', (prevState, nextState) => {
    if (process.env.DEBUG) {
      console.log('%cprev state', 'background: #222; color: #bada55', prevState);
      console.log('%cstore updated', 'background: #222; color: #bada55', nextState);
    }
  });

  initRouter(router, store);

  store.dispatch(initApp);
});
