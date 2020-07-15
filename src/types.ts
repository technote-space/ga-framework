import {FC} from 'react';

type PageType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: () => FC<any>;
  icon: string;
  text: string;
}
export type PagesType = {
  [key: string]: PageType;
}
export type AppOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title: string | ((store: { [key: string]: any }) => string);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pages: PagesType | ((store: { [key: string]: any }) => PagesType);
  firstPage?: string;
  parts?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    beforeMenu?: (store: { [key: string]: any }) => FC;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    afterMenu?: (store: { [key: string]: any }) => FC;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    beforeHeaderTitle?: (store: { [key: string]: any }) => FC;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    afterHeaderTitle?: (store: { [key: string]: any }) => FC;
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
