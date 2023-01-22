// import transport from './httpTransport';

const API_ENDPOINT = 'https://ya-praktikum.tech/api/v2';

export function request<T extends any>({ method, path, data }: any): Promise<T> {
  return fetch(`${API_ENDPOINT}/${path}`, {
    method,
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: data ? JSON.stringify(data) : null,
  }).then((resp) => {
    return resp.json().catch(() => {
      return Promise.resolve(resp)
    });
  })
}

request.post = <T>(path: string, data?: any) => request<T>({ method: 'POST', path, data });
request.get = <T>(path: string) => request<T>({ method: 'GET', path });
