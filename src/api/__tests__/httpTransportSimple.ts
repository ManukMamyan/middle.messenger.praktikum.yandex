import mockXMLHttpRequest from '../__mocks__/XMLHttpRequestMock';
import HttpTransport from '../httpTransportSimple';

const API_URL = 'https://ya-praktikum.tech/api/v2/';

describe('tests for path router', () => {
  let transport: HttpTransport;
  const dataSuccess = [{ data: 'success' }];
  const dataFail = [{ data: 'fail' }];
  const dataPost = { data: 'postRequest' };
  const dataPut = { data: 'putRequest' };
  const dataPatch = { data: 'patchRequest' };

  beforeEach(() => {
    transport = new HttpTransport('chat');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('transport get success', async () => {
    const mockObjectXMLHttpRequest = mockXMLHttpRequest(200, dataSuccess);

    await expect(await transport.get('/login')).toEqual(JSON.stringify(dataSuccess));
    expect(mockObjectXMLHttpRequest.open).toHaveBeenCalledWith('Get', `${API_URL}chat/login`);
    expect(mockObjectXMLHttpRequest.setRequestHeader).toHaveBeenCalledWith(
      'Content-Type',
      'application/json'
    );
    expect(mockObjectXMLHttpRequest.send).toHaveBeenCalledWith();
  });

  it('transport get fail', async () => {
    mockXMLHttpRequest(500, dataFail);

    await expect(transport.get('/login')).rejects.toEqual(JSON.stringify(dataFail));
  });

  it('transport post success', async () => {
    const mockObjectXMLHttpRequest = mockXMLHttpRequest(200, dataSuccess);

    await expect(await transport.post('/login', dataPost)).toEqual(JSON.stringify(dataSuccess));
    expect(mockObjectXMLHttpRequest.open).toHaveBeenCalledWith('Post', `${API_URL}chat/login`);
    expect(mockObjectXMLHttpRequest.setRequestHeader).toHaveBeenCalledWith(
      'Content-Type',
      'application/json'
    );
    expect(mockObjectXMLHttpRequest.send).toHaveBeenCalledWith(JSON.stringify(dataPost));
  });

  it('transport post fail', async () => {
    mockXMLHttpRequest(500, dataFail);

    await expect(transport.post('/login', dataPost)).rejects.toEqual(JSON.stringify(dataFail));
  });

  it('transport put success', async () => {
    const mockObjectXMLHttpRequest = mockXMLHttpRequest(200, dataSuccess);

    await expect(await transport.put('/login', dataPut)).toEqual(JSON.stringify(dataSuccess));
    expect(mockObjectXMLHttpRequest.open).toHaveBeenCalledWith('Put', `${API_URL}chat/login`);
    expect(mockObjectXMLHttpRequest.setRequestHeader).toHaveBeenCalledWith(
      'Content-Type',
      'application/json'
    );
    expect(mockObjectXMLHttpRequest.send).toHaveBeenCalledWith(JSON.stringify(dataPut));
  });

  it('transport put fail', async () => {
    mockXMLHttpRequest(500, dataFail);

    await expect(transport.put('/login', dataPut)).rejects.toEqual(JSON.stringify(dataFail));
  });

  it('transport patch success', async () => {
    const mockObjectXMLHttpRequest = mockXMLHttpRequest(200, dataSuccess);

    await expect(await transport.patch('/login', dataPatch)).toEqual(JSON.stringify(dataSuccess));
    expect(mockObjectXMLHttpRequest.open).toHaveBeenCalledWith('Patch', `${API_URL}chat/login`);
    expect(mockObjectXMLHttpRequest.setRequestHeader).toHaveBeenCalledWith(
      'Content-Type',
      'application/json'
    );
    expect(mockObjectXMLHttpRequest.send).toHaveBeenCalledWith(JSON.stringify(dataPatch));
  });

  it('transport patch fail', async () => {
    mockXMLHttpRequest(500, dataFail);

    await expect(transport.patch('/login', dataPatch)).rejects.toEqual(JSON.stringify(dataFail));
  });

  it('transport delete success', async () => {
    const mockObjectXMLHttpRequest = mockXMLHttpRequest(200, dataSuccess);

    await expect(await transport.delete('/login')).toEqual(JSON.stringify(dataSuccess));
    expect(mockObjectXMLHttpRequest.open).toHaveBeenCalledWith('Delete', `${API_URL}chat/login`);
    expect(mockObjectXMLHttpRequest.setRequestHeader).toHaveBeenCalledWith(
      'Content-Type',
      'application/json'
    );
    expect(mockObjectXMLHttpRequest.send).toHaveBeenCalledWith();
  });

  it('transport delete fail', async () => {
    mockXMLHttpRequest(500, dataFail);

    await expect(transport.delete('/login')).rejects.toEqual(JSON.stringify(dataFail));
  });

  it('transport isJson=false', async () => {
    const mockObjectXMLHttpRequest = mockXMLHttpRequest(200, dataSuccess);

    await expect(await transport.post('/login', dataPost, false)).toEqual(
      JSON.stringify(dataSuccess)
    );
    expect(mockObjectXMLHttpRequest.open).toHaveBeenCalledWith('Post', `${API_URL}chat/login`);
    expect(mockObjectXMLHttpRequest.setRequestHeader).toHaveBeenCalledTimes(0);
    expect(mockObjectXMLHttpRequest.send).toHaveBeenCalledWith(dataPost);
  });
});
