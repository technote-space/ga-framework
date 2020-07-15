import React, {useState, useMemo, useEffect, ReactElement, FC} from 'react';
import {useStoreContext, useDispatchContext} from '../Store';
import {LoadingAnimation} from '../components';
import {AppOptions} from '../../types';
import {getPages} from '../common';

const Switching: FC<{
  options: AppOptions;
}> = ({options}) => {
  const {store: {page, status}}     = useStoreContext();
  const {dispatch}                  = useDispatchContext();
  const [nextPage, setNextPage]     = useState<ReactElement | null>(null);
  const [components, setComponents] = useState({});

  const pages = useMemo(() => getPages(options), []);
  useEffect(() => {
    // eslint-disable-next-line no-magic-numbers
    window.scrollTo(0, 0);
    if (!page) {
      dispatch({type: 'PAGE', page: Object.keys(pages)[0]});
      return;
    }

    if (page in pages) {
      if (page in components) {
        setNextPage(components[page]);
      } else {
        const component = pages[page].component();
        setComponents({...components, ...{[page]: component}});
        setNextPage(component);
      }
    }
  }, [page, pages]);

  const loadingView = useMemo(() => <LoadingAnimation/>, []);
  const pageView    = useMemo(() => nextPage, [nextPage]);

  return status === 'none' || status === 'canceling' ? loadingView : pageView;
};

export default Switching;
