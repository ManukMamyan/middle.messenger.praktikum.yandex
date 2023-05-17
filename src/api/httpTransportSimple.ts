export enum Method {
  Get = 'Get',
  Post = 'Post',
  Put = 'Put',
  Patch = 'Patch',
  Delete = 'Delete',
}

const DONE = 4;

type Options = {
  method: Method;
  data?: any;
};

export default class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2/';
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get<Response>(path = '/'): Promise<Response> {
    return this.request<Response>(this.endpoint + path);
  }

  public post<Response = void>(path: string, data?: unknown, isJson = true): Promise<Response> {
    return this.request<Response>(
      this.endpoint + path,
      {
        method: Method.Post,
        data,
      },
      isJson
    );
  }

  public put<Response = void>(path: string, data: unknown, isJson = true): Promise<Response> {
    return this.request<Response>(
      this.endpoint + path,
      {
        method: Method.Put,
        data,
      },
      isJson
    );
  }

  public patch<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.Patch,
      data,
    });
  }

  public delete<Response>(path: string): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Method.Delete,
    });
  }

  private request<Response>(
    url: string,
    options: Options = { method: Method.Get },
    isJson: boolean = true
  ): Promise<Response> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new window.XMLHttpRequest();
      xhr.open(method, url);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject({ reason: 'abort' });
      xhr.onerror = () => reject({ reason: 'network error' });
      xhr.ontimeout = () => reject({ reason: 'timeout' });

      if (isJson) {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'json';
      }

      xhr.withCredentials = true;

      if (method === Method.Get || !data) {
        xhr.send();
      } else {
        xhr.send(isJson ? JSON.stringify(data) : data);
      }
    });
  }
}
