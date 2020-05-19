import {FC} from 'react';

export type AppOptions = {
  title: string;
  pages: {
    [key: string]: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component: () => FC<any>;
      icon: string;
      text: string;
    };
  };
  firstPage?: string;
  parts?: {
    beforeMenu?: () => FC;
    afterMenu?: () => FC;
    beforeHeaderTitle?: () => FC;
    afterHeaderTitle?: () => FC;
  };
  store?: {
    state?: (state: object) => object;
    reducer?: (store: object, action: object) => object;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controllerListener?: (dispatch: Function, result: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getWorkerContext?: () => any;
}
