import type {FC} from 'react';
import type {AppOptions} from '../types';
import React, {memo, useReducer, createContext, useContext, useCallback, useEffect} from 'react';
import {getProcessContext} from './common';

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
    histories.push({x: dataX, y: dataY});
  } else {
    histories[index].y = dataY;
  }

  return {
    ...store,
    histories: [...histories],
  };
};

const StoreContextProvider: FC<{
  options: AppOptions;
}>                               = memo(({children, options}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getReducer        = useCallback((store, action): any => {
    switch (action.type) {
      case 'PAGE':
        return {...store, page: action.page};
      case 'THEME_COLOR':
        return {...store, themeColor: action.themeColor};
      case 'WORKER':
        return {...store, worker: action.worker};
      case 'UPDATE_STATUS':
        if (store.status === 'disabled') {
          return store;
        }

        return {...store, status: action.result.status};
      case 'RELOAD_WORKER':
        return {...store, reloadWorker: !store.reloadWorker};
      case 'SET_NOTICE':
        return {...store, notice: {...store.notice, ...{open: true, variant: 'success'}, ...action.notice}};
      case 'SET_ERROR':
        return {...store, notice: {...store.notice, ...{open: true, variant: 'error'}, ...action.notice}};
      case 'CLOSE_NOTICE':
        return {...store, notice: {...store.notice, ...{open: false}}};
      case 'PAGINATION_INITIALIZED':
        return {
          ...store,
          pagination: {
            ...store.pagination,
            initialized: true,
          },
        };
      case 'PAGINATION_PAGE':
        return {
          ...store,
          pagination: {
            ...store.pagination,
            page: action.page,
          },
        };
      case 'PAGINATION_PER_PAGE':
        return {
          ...store,
          pagination: {
            ...store.pagination,
            rowsPerPage: action.rowsPerPage,
          },
        };
      case 'RESULT':
      default:
        if (action.type === 'RESULT') {
          store = resultReducer(store, action.result);
        }

        if (options.store?.reducer) {
          return options.store.reducer(store, action);
        }

        return store;
    }
  }, [options]);
  const [store, dispatch] = useReducer(getReducer, getInitialState(options));

  const onReloadNeeded = useCallback(async() => {
    //
  }, []);

  useEffect(() => {
    onReloadNeeded().then();
  }, []);

  return <StoreContext.Provider value={{store}}>
    <DispatchContext.Provider value={{dispatch, onReloadNeeded}}>
      {children}
    </DispatchContext.Provider>
  </StoreContext.Provider>;
});
StoreContextProvider.displayName = 'StoreContextProvider';
export {StoreContextProvider};
