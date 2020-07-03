import React, {useReducer, createContext, useContext, useCallback, useMemo, useEffect, FC} from 'react';
import {AppOptions} from '../types';
import {getProcessContext} from './common';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getReducer = (options: AppOptions) => (store, action): any => {
  switch (action.type) {
    case 'PAGE':
      return {...store, page: action.page};
    case 'THEME_COLOR':
      return {...store, themeColor: action.themeColor};
    case 'WORKER':
      return {...store, worker: action.worker};
    case 'UPDATE_STATUS':
      return {...store, status: action.result.status};
    default:
      if (options.store?.reducer) {
        return options.store.reducer(store, action);
      }

      return store;
  }
};

const StoreContext           = createContext({});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useStoreContext = (): any => useContext(StoreContext);

const DispatchContext           = createContext({});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDispatchContext = (): any => useContext(DispatchContext);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getInitialState = (options: AppOptions): { [key: string]: any } => {
  const initialState = {
    page: options.firstPage ?? Object.keys(options.pages)[0],
    themeColor: 'dark',
    status: 'none',
    worker: null,
    control: {
      reset: store => async(): Promise<void> => store.worker?.reset(await getProcessContext(options, store)),
      start: store => (): void => store.worker?.start(),
      stop: store => (): void => store.worker?.stop(),
    },
  };
  return options.store?.state ? options.store.state(initialState) : initialState;
};

export const StoreContextProvider: FC<{
  options: AppOptions;
}> = ({children, options}) => {
  const [store, dispatch] = useReducer(getReducer(options), getInitialState(options));

  const onReloadNeeded = useCallback(async() => {
    //
  }, []);

  useEffect(() => {
    onReloadNeeded().then();
  }, []);

  return useMemo(
    () =>
      <StoreContext.Provider value={{store}}>
        <DispatchContext.Provider value={{dispatch, onReloadNeeded}}>
          {children}
        </DispatchContext.Provider>
      </StoreContext.Provider>
    , [store]);
};
