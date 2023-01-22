import transport from './httpTransport';

const API_ENDPOINT = 'https://ya-praktikum.tech/api/v2';

export function request<T extends any>({ method, path, data }: any): Promise<T> {
  return transport.request(`${API_ENDPOINT}/${path}`, {
    method,
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    data: data ? data : null,
  });
}

request.post = <T>(path: string, data?: any) => request<T>({ method: 'POST', path, data });
request.get = <T>(path: string) => request<T>({ method: 'GET', path });
