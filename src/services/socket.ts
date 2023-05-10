class Socket {
  private _userId: number;
  private _chatId: string;
  private _token: string;
  private _socket: WebSocket;

  constructor({ userId, chatId, token }: { userId: number; chatId: string; token: string }) {
    this._userId = userId;
    this._chatId = chatId;
    this._token = token;

    this._socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${this._userId}/${this._chatId}/${this._token}`
    );
  }

  sendMessage = (message: string) => {
    this._socket.send(
      JSON.stringify({
        content: message,
        type: 'message',
      })
    );
  };

  getOldMessages = (offset: number) => {
    this._socket.send(
      JSON.stringify({
        content: String(offset),
        type: 'get old',
      })
    );
  };

  onMessage = (callback: Function) => {
    this._socket.addEventListener('message', ({ data }) => {
      const parsedData = JSON.parse(data);

      callback(parsedData);
    });
  };

  close = () => {
    this._socket.close();
  };
}

export default Socket;
