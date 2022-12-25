import type { FC, PropsWithChildren } from 'react';
import type { AppOptions } from '$/types';
import React, { memo, useReducer, createContext, useContext, useCallback, useEffect } from 'react';
import { getProcessContext } from './common';

const StoreContext           = createContext({});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useStoreContext = (): any => useContext(StoreContext);

const DispatchContext           = createContext({});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDispatchContext = (): any => useContext(DispatchContext);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getInitialState = (options: AppOptions): { [key: string]: any } => {
  const initialState = {
    page: options.firstPage,
    themeColor: 'dark',
    status: 'none',
    reloadWorker: false,
    worker: null,
    control: {
      reset: store => async(): Promise<void> => store.worker?.reset(await getProcessContext(options, store)),
      start: store => (): void => store.worker?.start(),
      stop: store => (): void => store.worker?.stop(),
    },
    notice: {
      open: false,
      message: '',
      variant: 'success',
    },
    histories: [],
    pagination: {
      initialized: false,
      page: 0,
      rowsPerPage: 10,
    },
  };
  return options.store?.state ? options.store.state(initialState) : initialState;
};

const resultReducer = (store, result) => {
  const histories = store.histories;
  if (!result.progress) {
    histories.length = 0;
  }

  if (!result.population.length) {
    return {
      ...store,
      histories: [...histories],
    };
  }

  // eslint-disable-next-line no-magic-numbers
  const dataX = Math.floor(result.progress * 100);
  // eslint-disable-next-line no-magic-numbers
  const dataY = Math.floor(result.population[0].fitness * 1000) / 1000;
  const index = histories.findIndex(value => value.x === dataX);
  // eslint-disable-next-line no-magic-numbers
  if (index < 0) {
    histories.push({ x: dataX, y: dataY });
  } else {
    histories[index].y = dataY;
  }

  return {
    ...store,
    histories: [...histories],
  };
};

const reducerActions             = {
  PAGE: (store, action) => ({ ...store, page: action.page }),
  THEME_COLOR: (store, action) => ({ ...store, themeColor: action.themeColor }),
  WORKER: (store, action) => ({ ...store, worker: action.worker }),
  UPDATE_STATUS: (store, action) => {
    if (store.status === 'disabled') {
      return store;
    }

    return { ...store, status: action.result.status };
  },
  RELOAD_WORKER: (store) => ({ ...store, reloadWorker: !store.reloadWorker }),
  SET_NOTICE: (store, action) => ({ ...store, notice: { ...store.notice, ...{ open: true, variant: 'success' }, ...action.notice } }),
  SET_ERROR: (store, action) => ({ ...store, notice: { ...store.notice, ...{ open: true, variant: 'error' }, ...action.notice } }),
  CLOSE_NOTICE: (store) => ({ ...store, notice: { ...store.notice, ...{ open: false } } }),
  PAGINATION_INITIALIZED: (store) => ({
    ...store,
    pagination: {
      ...store.pagination,
      initialized: true,
    },
  }),
  PAGINATION_PAGE: (store, action) => ({
    ...store,
    pagination: {
      ...store.pagination,
      page: action.page,
    },
  }),
  PAGINATION_PER_PAGE: (store, action) => (
    {
      ...store,
      pagination: {
        ...store.pagination,
        rowsPerPage: action.rowsPerPage,
      },
    }
  ),
  RESULT: (store, action, options) => {
    store = resultReducer(store, action.result);
    if (options.store?.reducer) {
      return options.store.reducer(store, action);
    }
    return store;
  },
};
const StoreContextProvider: FC<PropsWithChildren<{
  options: AppOptions;
}>>                              = memo(({ children, options }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getReducer        = useCallback((store, action): any => {
    if (action.type in reducerActions) {
      return reducerActions[action.type](store, action, options);
    }

    if (options.store?.reducer) {
      return options.store.reducer(store, action);
    }

    return store;
  }, [options]);
  const [store, dispatch] = useReducer(getReducer, getInitialState(options));

  const onReloadNeeded = useCallback(async() => {
    //
  }, []);

  useEffect(() => {
    onReloadNeeded().then();
  }, []);

  return <StoreContext.Provider value={{ store }}>
    <DispatchContext.Provider value={{ dispatch, onReloadNeeded }}>
      {children}
    </DispatchContext.Provider>
  </StoreContext.Provider>;
});
StoreContextProvider.displayName = 'StoreContextProvider';
export { StoreContextProvider };
