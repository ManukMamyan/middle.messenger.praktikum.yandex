import PathRouter from '../PathRouter';

describe('tests for path router', () => {
  global.window.history.forward = jest.fn();
  global.window.history.back = jest.fn();
  global.window.history.pushState = jest.fn();

  let router: PathRouter;
  let homeCb: () => void;
  let loginCb: () => void;

  beforeEach(() => {
    homeCb = jest.fn();
    loginCb = jest.fn();

    router = new PathRouter();

    router.use('/', homeCb);
    router.use('/login', loginCb);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('router go', () => {
    router.go('/login');

    expect(loginCb).toHaveBeenCalledTimes(1);
    expect(global.window.history.pushState).toHaveBeenCalledTimes(1);
    expect(global.window.history.pushState).toHaveBeenCalledWith({}, '', '/login');

    router.go('/');

    expect(homeCb).toHaveBeenCalledTimes(1);
    expect(global.window.history.pushState).toHaveBeenCalledTimes(2);
    expect(global.window.history.pushState).toHaveBeenNthCalledWith(2, {}, '', '/');
  });

  it('router back', () => {
    router.back();

    expect(global.window.history.back).toHaveBeenCalledTimes(1);
  });

  it('router forward', () => {
    router.forward();

    expect(global.window.history.forward).toHaveBeenCalledTimes(1);
  });
});
