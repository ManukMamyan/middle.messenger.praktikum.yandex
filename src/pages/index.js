import first from '../utils/first';
import isEmpty from '../utils/isEmpty';
import Login from './Login';
import Register from './Register';
import Chat from './Chat';
import Settings from './Settings';
import EditProfile from './EditProfile';
import NotFound from './NotFound';

const pages = [
  { path: '/', loadFunc: Login },
  { path: '/register', loadFunc: Register },
  { path: '/chat', loadFunc: Chat },
  { path: '/settings', loadFunc: Settings },
  { path: '/editProfile', loadFunc: EditProfile },
];

const startApp = () => {
  // eslint-disable-next-line no-undef
  const locationPath = window.document.location.pathname;

  const currentPage = pages.filter((page) => {
    return page.path === locationPath;
  });

  const isUserOnExistingPage =
    !isEmpty(currentPage) && typeof first(currentPage).loadFunc === 'function';

  let loadApp = NotFound;

  if (isUserOnExistingPage) {
    loadApp = first(currentPage).loadFunc;
  }

  return loadApp();
};

export default startApp;
