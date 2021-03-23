import type {FC} from 'react';
import type {AppOptions} from './types';
import React from 'react';
import {StoreContextProvider} from '@/Store';
import App from '@/App';
import useTheme from '@/hooks/useTheme';
import {SnackbarWrapper} from '@/components';

export const GaFramework: FC<{ options: AppOptions }> = ({options}) => <StoreContextProvider options={options}>
  <SnackbarWrapper/>
  <App options={options}/>
</StoreContextProvider>;

export {AppOptions};
export {IGeneticAlgorithm, GeneticAlgorithmBase} from '@/logic/Algorithm';
export {useStoreContext, useDispatchContext} from '@/Store';
export {Graph, List, Timeline} from '@/components';
export {getProcessContext, updateStatus, reloadWorker, setNotice, setError, closeNotice} from '@/common';
export {useTheme};
