import { authAPI } from '../api/auth';
import { UserDTO } from '../api/types';
import type { Dispatch } from '../core';
import transformUser from '../api/utils/transformUser';
import apiHasError from '../api/utils/apiHasError';

async function initApp(dispatch: Dispatch<AppState>) {
  try {
    const response = await authAPI.me();

    if (apiHasError(response)) {
      return;
    }

    dispatch({ appIsInitiated: true, user: transformUser(response as UserDTO), screen: 'profile' });
  } catch (err) {
    console.error(err);

    dispatch({ appIsInitiated: true });
  }
}

export default initApp;
