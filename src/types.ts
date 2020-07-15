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
    beforeMenu?: () => FC;
    afterMenu?: () => FC;
    beforeHeaderTitle?: () => FC;
    afterHeaderTitle?: () => FC;
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
