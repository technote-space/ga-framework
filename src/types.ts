import type { ReactElement } from 'react';

type PageType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: () => ReactElement;
  icon: string;
  text: string;
}
export type PagesType = {
  [key: string]: PageType;
}
export type AppOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title: string | ((store: { [key: string]: any }) => string);
  pages: PagesType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hidePages?: ((store: { [key: string]: any }) => Array<string>);
  firstPage?: string;
  parts?: {
    beforeMenu?: () => ReactElement;
    afterMenu?: () => ReactElement;
    beforeHeaderTitle?: () => ReactElement;
    afterHeaderTitle?: () => ReactElement;
  };
  store?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    state?: (state: { [key: string]: any }) => { [key: string]: any };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reducer?: (store: { [key: string]: any }, action: { [key: string]: any }) => { [key: string]: any };
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getWorkerContext?: (store: any) => any;
  process?: {
    sleep?: number;
    minimumStep?: number;
  }
}
