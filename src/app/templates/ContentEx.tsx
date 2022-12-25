import type { FC } from 'react';
import type { AppOptions } from '$/types';
import React, { memo } from 'react';
import Box from '@mui/material/Box';
import { Switching } from '@/components';

const ContentEx: FC<{
  options: AppOptions;
}> = memo(({ options }) => {
  return <Box sx={{ margin: 'auto', height: 'calc(100% - 50px)' }}>
    <Switching options={options}/>
  </Box>;
});

ContentEx.displayName = 'ContentEx';
export default ContentEx;
