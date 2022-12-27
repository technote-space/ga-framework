import type { FC } from 'react';
import type { Node, Edge } from 'vis-network';
import React, { memo, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Network } from 'vis-network';

const Graph: FC<{
  nodes: Array<Node>;
  edges: Array<Edge>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any;
}> = memo(({ nodes, edges, options }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) {
      return;
    }

    new Network(
      container.current,
      {
        nodes,
        edges,
      },
      options ?? {},
    );
  }, [nodes, edges, options]);

  return <Box sx={{ height: '100%', padding: '20px' }} ref={container}/>;
});

Graph.displayName = 'Graph';
export default Graph;
