import { Block } from '../core';
import Login from './Login';
import Register from './Register';
import Chat from './Chat';
import Settings from './Settings';
import Profile from './Profile';
import EditProfile from './EditProfile';
import EditPassword from './EditPassword';
import NotFound from './NotFound';

type TPages = {path: string; Component: new (...args: any[]) => Block}

const pages: TPages[] = [
  { path: '/', Component: Login },
  { path: '/register', Component: Register },
  { path: '/chat', Component: Chat },
  { path: '/settings', Component: Settings },
  { path: '/profile', Component: Profile },
  { path: '/editProfile', Component: EditProfile },
  { path: '/editPassword', Component: EditPassword },
];

const startApp = () => {
  // eslint-disable-next-line no-undef
  const locationPath = window.document.location.pathname;

  const currentPage = pages.find((page) => {
    return page.path === locationPath;
  });

  const isUserOnExistingPage =
    !!currentPage && typeof currentPage.Component === 'function';

  if (!isUserOnExistingPage) {
    return new NotFound;
  }

  return new currentPage.Component;
};

export default startApp;
