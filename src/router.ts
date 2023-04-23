import { Router, Store, renderDOM } from './core';
import Screens, { getScreenComponent } from './helpers/router/screens';

const routes = [
  {
    path: '/',
    block: Screens.Login,
    shouldBeAuthorized: false,
  },
  {
    path: '/login',
    block: Screens.Login,
    shouldBeAuthorized: false,
  },
  {
    path: '/register',
    block: Screens.Register,
    shouldBeAuthorized: false,
  },
  {
    path: '/profile',
    block: Screens.Profile,
    shouldBeAuthorized: true,
  },
  {
    path: '/editProfile',
    block: Screens.EditProfile,
    shouldBeAuthorized: true,
  },
  {
    path: '/editPassword',
    block: Screens.EditPassword,
    shouldBeAuthorized: true,
  },
  {
    path: '/chats',
    block: Screens.Chat,
    shouldBeAuthorized: true,
  },
  {
    path: '*',
    block: Screens.NotFound,
    shouldBeAuthorized: false,
  },
];

function initRouter(router: Router, store: Store<AppState>) {
  routes.forEach((route) => {
    router.use(route.path, () => {
      const isAuthorized = Boolean(store.getState().user);
      const currentScreen = Boolean(store.getState().screen);

      if (isAuthorized || !route.shouldBeAuthorized) {
        store.dispatch({ screen: route.block });
        return;
      }

      if (!currentScreen) {
        store.dispatch({ screen: Screens.Login });
      }
    });
  });

  store.on('changed', (prevState, nextState) => {
    if (!prevState.appIsInitiated && nextState.appIsInitiated) {
      router.start();
    }

    if (prevState.screen !== nextState.screen) {
      const Page = getScreenComponent(nextState.screen);
      const Component = new Page({});
      renderDOM(Component);
      // @ts-ignore
      document.title = `App / ${Page.componentName}`;
    }
  });
}
export default initRouter;
