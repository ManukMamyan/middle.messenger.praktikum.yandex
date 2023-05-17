function mockXMLHttpRequest(status: number, data?: { [key: string]: string }[]) {
  const xhrMockObj = {
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn(),
    readyState: 4,
    status,
    response: JSON.stringify(data),
  };

  const xhrMockClass = () => xhrMockObj;

  // @ts-ignore
  global.window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);

  setTimeout(() => {
    // @ts-ignore
    xhrMockObj['onreadystatechange']();
  }, 0);

  return xhrMockObj;
}

export default mockXMLHttpRequest;
