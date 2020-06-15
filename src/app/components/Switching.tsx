import React, {useState, useMemo, useEffect, ReactElement, FC} from 'react';
import {useStoreContext} from '../Store';
import {LoadingAnimation} from '../components';
import {AppOptions} from '../../types';

const Switching: FC<{
  options: AppOptions;
}> = ({options}) => {
  const {store: {page, status}}     = useStoreContext();
  const [nextPage, setNextPage]     = useState<ReactElement | null>(null);
  const [components, setComponents] = useState({});

  useEffect(() => {
    // eslint-disable-next-line no-magic-numbers
    window.scrollTo(0, 0);
    if (page in options.pages) {
      if (page in components) {
        setNextPage(components[page]);
      } else {
        const component = options.pages[page].component();
        setComponents({...components, ...{[page]: component}});
        setNextPage(component);
      }
    }
  }, [page]);

  const loadingView = useMemo(() => <LoadingAnimation/>, []);
  const pageView    = useMemo(() => nextPage, [nextPage]);

  return status === 'none' || status === 'canceling' ? loadingView : pageView;
};

export default Switching;
