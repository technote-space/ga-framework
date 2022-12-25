import type { ReactElement, FC } from 'react';
import type { AppOptions } from '$/types';
import React, { memo, useMemo, useState, useEffect } from 'react';
import { useStoreContext, useDispatchContext } from '@/Store';
import { LoadingAnimation } from '@/components';

const Switching: FC<{
  options: AppOptions;
}> = memo(({ options }) => {
  const { store: { page, status }, store } = useStoreContext();
  const { dispatch }                       = useDispatchContext();
  const [nextPage, setNextPage]            = useState<ReactElement | null>(null);
  const [components, setComponents]        = useState({});

  const hidePages       = useMemo(() => options.hidePages ? options.hidePages(store) : null, [store]);
  const searchValidPage = () => {
    const keys   = Object.keys(options.pages);
    const index  = keys.indexOf(page);
    let useIndex = -1;
    // eslint-disable-next-line no-magic-numbers
    for (let search = index; --search >= 0;) {
      if (!hidePages || !hidePages.includes(keys[search])) {
        useIndex = search;
        break;
      }
    }

    // eslint-disable-next-line no-magic-numbers
    if (useIndex < 0) {
      // eslint-disable-next-line no-magic-numbers
      for (let search = index + 1; search < keys.length; search++) {
        if (!hidePages || !hidePages.includes(keys[search])) {
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
      dispatch({ type: 'PAGE', page: Object.keys(options.pages)[0] });
      return;
    }

    if (page in options.pages) {
      if (hidePages && hidePages.includes(page)) {
        dispatch({ type: 'PAGE', page: searchValidPage() });
        return;
      }

      if (page in components) {
        setNextPage(components[page]);
      } else {
        const component = options.pages[page].component();
        setComponents({ ...components, ...{ [page]: component } });
        setNextPage(component);
      }
    }
  }, [page, hidePages]);

  const loadingView = useMemo(() => <LoadingAnimation/>, []);
  const pageView    = useMemo(() => nextPage, [nextPage]);

  return status === 'none' || status === 'canceling' ? loadingView : pageView;
});

Switching.displayName = 'Switching';
export default Switching;
