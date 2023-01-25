import { chatAPI } from '../api/chat';
import type { Dispatch } from '../core';
import { apiHasError } from '../api/utils';

type CreateChatPayload = {
  title: string;
};
type AddUserToChatPayload = { users: number[]; chatId: number };
type DeleteUserToChatPayload = AddUserToChatPayload;

export const chatList = async (dispatch: Dispatch<AppState>, state: AppState) => {
  dispatch({ isLoading: true });

  const response = await chatAPI.chatList();

  if (apiHasError(response)) {
    dispatch({ isLoading: false });
    return;
  }

  dispatch({ chats: response });
};

export const createChat = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: CreateChatPayload
) => {
  dispatch({ isLoading: true });

  const response = await chatAPI.create(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false, editPasswordFormError: response.reason });
    return;
  }

  await dispatch(chatList);
};

export const addUser = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: AddUserToChatPayload
) => {
  dispatch({ isLoading: true });

  const response = await chatAPI.addUser(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false });
    return;
  }

  await dispatch(chatList);
};

export const deleteUser = async (
  dispatch: Dispatch<AppState>,
  state: AppState,
  action: DeleteUserToChatPayload
) => {
  dispatch({ isLoading: true });

  const response = await chatAPI.deleteUser(action);

  if (apiHasError(response)) {
    dispatch({ isLoading: false });
    return;
  }

  await dispatch(chatList);
};

export const token = async (dispatch: Dispatch<AppState>, state: AppState, action: number) => {
  dispatch({ isLoading: true });

  const response = await chatAPI.token(action);

  return response;
};
