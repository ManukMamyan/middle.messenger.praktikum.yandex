import HTTPTransport from './httpTransportSimple';

type TMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export function request<T extends any>({
  method,
  path,
  data,
}: {
  method: TMethod;
  path: string;
  data?: any;
}): Promise<T | unknown> {
  const transport = new HTTPTransport('');

  return transport[method](path, data).catch((errorResponse) => {
    return errorResponse;
  });
}

request.post = <T>(path: string, data?: any) => request<T>({ method: 'post', path, data });
request.delete = <T>(path: string, data?: any) => request<T>({ method: 'delete', path, data });
request.put = <T>(path: string, data?: any) => request<T>({ method: 'put', path, data });
request.get = <T>(path: string) => request<T>({ method: 'get', path });
