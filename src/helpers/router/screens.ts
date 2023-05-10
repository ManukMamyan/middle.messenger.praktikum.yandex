import { Block } from '../../core';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Chat from '../../pages/Chat';
import Profile from '../../pages/Profile';
import EditProfile from '../../pages/EditProfile';
import EditPassword from '../../pages/EditPassword';
import NotFound from '../../pages/NotFound';

enum Screens {
  Login = 'login',
  Profile = 'profile',
  Register = 'register',
  Chat = 'chat',
  EditProfile = 'editProfile',
  EditPassword = 'editPassword',
  NotFound = 'notFound',
}

type TComponent = new (...args: any[]) => Block<any>;

const map: Record<Screens, TComponent> = {
  [Screens.Login]: Login,
  [Screens.Profile]: Profile,
  [Screens.Register]: Register,
  [Screens.Chat]: Chat,
  [Screens.EditProfile]: EditProfile,
  [Screens.EditPassword]: EditPassword,
  [Screens.NotFound]: NotFound,
};

export const getScreenComponent = (screen: Screens): TComponent => {
  return map[screen];
};

export default Screens;
