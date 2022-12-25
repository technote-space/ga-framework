import type { AppOptions } from '$/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
export const getProcessContext = async(options: AppOptions, store: any): Promise<({ [key: string]: any }) | undefined> => ({
  data: options?.getWorkerContext ? await options?.getWorkerContext(store) : undefined,
  sleep: options?.process?.sleep,
  minimumStep: options?.process?.minimumStep,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateStatus = (status: string, dispatch: (value: any) => void): void => dispatch({ type: 'UPDATE_STATUS', result: { status } });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reloadWorker = (dispatch: (value: any) => void): void => dispatch({ type: 'RELOAD_WORKER' });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTitle = (options: AppOptions, store: { [key: string]: any }): string => typeof options.title === 'string' ? options.title : options.title(store);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setNotice = (message: string, dispatch: (value: any) => void): void => dispatch({ type: 'SET_NOTICE', notice: { message } });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setError = (message: string, dispatch: (value: any) => void): void => dispatch({ type: 'SET_ERROR', notice: { message } });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const closeNotice = (dispatch: (value: any) => void): void => dispatch({ type: 'CLOSE_NOTICE' });
