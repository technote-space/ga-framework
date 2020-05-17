import React from 'react';
import ReactDOM from 'react-dom';
import {StoreContextProvider} from './app/Store';
import App from './app/App';
import {AppOptions} from './types';

export const initialize = (options: AppOptions): void => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContextProvider options={options}>
        <App options={options}/>
      </StoreContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

export {IGeneticAlgorithm, GeneticAlgorithmBase} from './app/logic/Algorithm';
