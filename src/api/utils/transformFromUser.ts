import { UserDTO } from '../types';

type TUserRegisterForm = Omit<User, 'id' | 'avatar'> & { password: string };
type TUserDataServer = Omit<UserDTO, 'id' | 'avatar'> & { password: string };

const transformFromUser = (data: TUserRegisterForm): TUserDataServer => {
  return {
    login: data.login,
    password: data.password,
    first_name: data.firstName,
    second_name: data.secondName,
    display_name: data.displayName,
    phone: data.phone,
    email: data.email,
  };
};

export default transformFromUser;
