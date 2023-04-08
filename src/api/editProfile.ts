import { request } from './apiRequests';
import { APIError } from './types';

type EditProfileRequestData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
};

type EditPasswordRequestData = {
  oldPassword: string;
  newPassword: string;
};

type EditProfileDataResponseData =
  | {
      id: number;
      first_name: string;
      second_name: string;
      display_name: string;
      login: string;
      email: string;
      phone: string;
      avatar: string;
    }
  | APIError;

type EditPasswordDataResponseData = {} | APIError;

type EditAvatarDataResponseData =
  | {
      avatar: string;
      display_name: string;
      first_name: string;
      email: string;
      id: number;
      login: string;
      phone: string;
      second_name: string;
    }
  | APIError;

export const editProfileAPI = {
  editProfile: (data: EditProfileRequestData) =>
    request.put<EditProfileDataResponseData>('user/profile', data),

  editPassword: (data: EditPasswordRequestData) =>
    request.put<EditPasswordDataResponseData>('user/password', data),

  editAvatar: (data: FormData) =>
    request.put<EditAvatarDataResponseData>('user/profile/avatar', data),
};
