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

    dispatch({ user: transformUser(response as UserDTO) });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ appIsInitiated: true });
  }
}

export default initApp;
