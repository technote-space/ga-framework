import type { FC } from 'react';
import type { AppOptions } from '$/types';
import React, { memo, useMemo } from 'react';
import Typography from '@mui/material/Typography';
import { getTitle } from '@/common';
import { useStoreContext } from '@/Store';

const HeaderEx: FC<{
  options: AppOptions;
}> = memo(({ options }) => {
  const { store } = useStoreContext();

  const title             = useMemo(() => getTitle(options, store), [store, options.title]);
  const titleView         = useMemo(() => <Typography noWrap color={'textSecondary'} sx={{
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18,
    display: {
      xs: 'none',
      md: 'inherit',
    },
  }}>{title}</Typography>, []);
  const beforeHeaderTitle = useMemo(() => options.parts?.beforeHeaderTitle ? options.parts.beforeHeaderTitle() : null, []);
  const afterHeaderTitle  = useMemo(() => options.parts?.afterHeaderTitle ? options.parts.afterHeaderTitle() : null, []);

  return <>
    {beforeHeaderTitle}
    {titleView}
    {afterHeaderTitle}
  </>;
});

HeaderEx.displayName = 'HeaderEx';
export default HeaderEx;
