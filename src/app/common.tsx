import {AppOptions} from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
export const getProcessContext = async(options: AppOptions, store: any): Promise<({ [key: string]: any }) | undefined> => ({
  data: options?.getWorkerContext ? await options?.getWorkerContext(store) : undefined,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateStatus = (status: string, dispatch: (value: any) => void): void => dispatch({type: 'UPDATE_STATUS', result: {status}});
