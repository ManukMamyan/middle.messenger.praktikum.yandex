import { UserDTO } from '../api/types';
import { editProfileAPI } from '../api/editProfile';
import type { Dispatch } from '../core';
import { transformUser, apiHasError } from '../api/utils';

type EditProfilePayload = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

type EditPasswordPayload = {
  oldPassword: string;
  newPassword: string;
};

export const editProfile = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: EditProfilePayload
) => {
  dispatch({ isLoading: true });

  const response = await editProfileAPI.editProfile(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, editProfileFormError: response.reason });
    return;
  }

  dispatch({ user: transformUser(response as UserDTO) });

  window.router.go('/profile');
};

export const editPassword = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: EditPasswordPayload
) => {
  dispatch({ isLoading: true });

  const response = await editProfileAPI.editPassword(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, editPasswordFormError: response.reason });
    return;
  }

  window.router.go('/profile');
};
