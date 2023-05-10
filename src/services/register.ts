import { registerAPI } from '../api/register';
import type { Dispatch } from '../core';
import { apiHasError } from '../api/utils';

type SignupPayload = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export const register = async (
  dispatch: Dispatch<AppState>,
  _state: AppState,
  action: SignupPayload
) => {
  dispatch({ isLoading: true });

  const response = await registerAPI.signup(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, signupFormError: response.reason });
    return;
  }

  window.router.go('/login');
};
