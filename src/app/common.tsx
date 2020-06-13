import {AppOptions} from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
export const getProcessContext = async(options: AppOptions, store: any): Promise<({ [key: string]: any }) | undefined> => ({
  data: options?.getWorkerContext ? await options?.getWorkerContext(store) : undefined,
});
