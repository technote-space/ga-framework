import React, {FC} from 'react';
import {StoreContextProvider} from './app/Store';
import App from './app/App';
import {AppOptions} from './types';
import useTheme from './app/hooks/useTheme';

export const GaFramework: FC<{ options: AppOptions }> = ({options}) => <StoreContextProvider options={options}>
  <App options={options}/>
</StoreContextProvider>;

export {AppOptions};
export {IGeneticAlgorithm, GeneticAlgorithmBase} from './app/logic/Algorithm';
export {useStoreContext, useDispatchContext} from './app/Store';
export {Graph} from './app/components';
export {getProcessContext, updateStatus, reloadWorker} from './app/common';
export {useTheme};
