const { ResizeObserver } = window;

export const mockResizeObserverBefore = async () => {
  //eslint-disable-next-line
  //@ts-ignore-next-line
  delete window.ResizeObserver;

  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
};

export const mockResizeObserverAfter = () => {
  window.ResizeObserver = ResizeObserver;
  jest.restoreAllMocks();
};
