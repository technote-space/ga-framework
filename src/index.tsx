import React, {FC} from 'react';
import {StoreContextProvider} from './app/Store';
import App from './app/App';
import {AppOptions} from './types';
import useTheme from './app/hooks/useTheme';
import {SnackbarWrapper} from './app/components';

export const GaFramework: FC<{ options: AppOptions }> = ({options}) => <StoreContextProvider options={options}>
  <SnackbarWrapper/>
  <App options={options}/>
</StoreContextProvider>;

export {AppOptions};
export {IGeneticAlgorithm, GeneticAlgorithmBase} from './app/logic/Algorithm';
export {useStoreContext, useDispatchContext} from './app/Store';
export {Graph, List, Timeline} from './app/components';
export {getProcessContext, updateStatus, reloadWorker, setNotice, setError, closeNotice} from './app/common';
export {useTheme};
