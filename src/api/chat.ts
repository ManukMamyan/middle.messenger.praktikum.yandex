import { request } from './apiRequests';
import { APIError } from './types';

type CreateChatRequestData = {
  title: string;
};
type AddUserToChatRequestData = { users: number[]; chatId: number };
type DeleteUserToChatRequestData = AddUserToChatRequestData;

type ChatListResponseData = Chat[] | APIError;
type CreateChatResponseData = Chat[] | APIError;

export const chatAPI = {
  chatList: () => request.get<ChatListResponseData>('/chats'),

  create: (data: CreateChatRequestData) => request.post<CreateChatResponseData>('/chats', data),

  addUser: (data: AddUserToChatRequestData) => request.put('chats/users', data),

  deleteUser: (data: DeleteUserToChatRequestData) => request.delete('auth/logout', data),
};
