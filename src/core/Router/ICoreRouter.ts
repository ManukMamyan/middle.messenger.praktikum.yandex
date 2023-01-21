interface ICoreRouter {
  start(): void;

  use(path: string, callback: () => void): ICoreRouter;

  go(path: string): void;

  back(): void;

  forward(): void;
}

export default ICoreRouter;
