import {useState, useMemo, useEffect, ReactElement, FC} from 'react';
import {useStoreContext} from '../Store';
import {AppOptions} from '../../types';

const Switching: FC<{
  options: AppOptions;
}> = ({options}) => {
  const {store: {page}}         = useStoreContext();
  const [nextPage, setNextPage] = useState<ReactElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line no-magic-numbers
    window.scrollTo(0, 0);
    if (page in options.pages) {
      setNextPage(options.pages[page].component());
    }
  }, [page]);

  return useMemo(() => nextPage, [nextPage]);
};

export default Switching;
