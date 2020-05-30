import {AppOptions} from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
export const getProcessContext = (options: AppOptions, store: any): ({ [key: string]: any }) | undefined => ({
  data: options?.getWorkerContext ? options?.getWorkerContext(store) : undefined,
});
