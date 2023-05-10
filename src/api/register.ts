import { request } from './apiRequests';
import { APIError } from './types';

type SignupRequestData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

type SignupRequestDataResponseData = {} | APIError;

export const registerAPI = {
  signup: (data: SignupRequestData) =>
    request.post<SignupRequestDataResponseData>('auth/signup', data),
};
