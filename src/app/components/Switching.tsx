import React, {useState, useMemo, useEffect, ReactElement, FC} from 'react';
import {useStoreContext, useDispatchContext} from '../Store';
import {LoadingAnimation} from '../components';
import {AppOptions} from '../../types';

const Switching: FC<{
  options: AppOptions;
}> = ({options}) => {
  const {store: {page, status}, store} = useStoreContext();
  const {dispatch}                     = useDispatchContext();
  const [nextPage, setNextPage]        = useState<ReactElement | null>(null);
  const [components, setComponents]    = useState({});

  const hidePages       = useMemo(() => options.hidePages ? options.hidePages(store) : [], [store]);
  const searchValidPage = () => {
    const keys   = Object.keys(options.pages);
    const index  = keys.indexOf(page);
    let useIndex = -1;
    // eslint-disable-next-line no-magic-numbers
    for (let search = index; --search >= 0;) {
      if (!hidePages.includes(keys[search])) {
        useIndex = search;
        break;
      }
    }

    // eslint-disable-next-line no-magic-numbers
    if (useIndex < 0) {
      // eslint-disable-next-line no-magic-numbers
      for (let search = index + 1; search < keys.length; search++) {
        if (!hidePages.includes(keys[search])) {
          useIndex = search;
          break;
        }
      }
    }

    return keys[useIndex];
  };
  useEffect(() => {
    // eslint-disable-next-line no-magic-numbers
    window.scrollTo(0, 0);
    if (!page) {
      dispatch({type: 'PAGE', page: Object.keys(options.pages)[0]});
      return;
    }

    if (page in options.pages) {
      if (hidePages.includes(page)) {
        dispatch({type: 'PAGE', page: searchValidPage()});
        return;
      }

      if (page in components) {
        setNextPage(components[page]);
      } else {
        const component = options.pages[page].component();
        setComponents({...components, ...{[page]: component}});
        setNextPage(component);
      }
    }
  }, [page, hidePages]);

  const loadingView = useMemo(() => <LoadingAnimation/>, []);
  const pageView    = useMemo(() => nextPage, [nextPage]);

  return status === 'none' || status === 'canceling' ? loadingView : pageView;
};

export default Switching;