import { authAPI } from '../api/auth';
import { UserDTO } from '../api/types';
import type { Dispatch } from '../core';
import transformUser from '../api/utils/transformUser';
import apiHasError from '../api/utils/apiHasError';

async function initApp(dispatch: Dispatch<AppState>) {
  const response = await authAPI.me();

  if (apiHasError(response)) {
    dispatch({ appIsInitiated: true });
    return;
  }

  if (window.location.pathname === '/') {
    dispatch({ appIsInitiated: true, user: transformUser(response as UserDTO), screen: 'profile' });
    return;
  }

  return dispatch({ appIsInitiated: true, user: transformUser(response as UserDTO) });
}

export default initApp;
