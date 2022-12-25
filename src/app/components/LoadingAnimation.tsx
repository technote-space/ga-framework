import type { FC } from 'react';
import React, { memo } from 'react';
import Box from '@mui/material/Box';

const LoadingAnimation: FC = memo(() => {
  return <Box sx={{ textAlign: 'center' }}>
    <img src={'images/loading.svg'} alt="Loading"/>
  </Box>;
});

LoadingAnimation.displayName = 'LoadingAnimation';
export default LoadingAnimation;
