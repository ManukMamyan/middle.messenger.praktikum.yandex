declare global {
  export type Nullable<T> = T | null;
  export type Keys<T extends Record<string | unknown>> = keyof T;
  export type Values<T extends Record<string | unknown>> = T[Keys<T>];

  export type TSelectedChat = {
    id: string,
    avatar: string,
    title: string,
  }

  export type AppState = {
    appIsInitiated: boolean;
    screen: Screens | null;
    isLoading: boolean;
    loginFormError: string | null;
    signupFormError: string | null;
    editProfileFormError: string | null;
    editPasswordFormError: string | null;
    selectedChat: TSelectedChat | null;
    selectedChatId: string | null;
    user: User | null;
    chats: UserChat[] | null;
  };

  export type User = {
    id: number;
    login: string;
    firstName: string;
    secondName: string;
    displayName: string;
    avatar: string;
    phone: string;
    email: string;
  };

  export type UserChat = {
    id: number;
    title: string;
    avatar: string;
    unread_count: string;
    last_message: {
      user: {
        first_name:string;
        second_name: string;
        avatar: string;
        email: string;
        login: string;
        phone: string;
      }
    };
    time: string;
    content: string;
  };
}

export {};
