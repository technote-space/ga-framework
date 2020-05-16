import React, {useRef, useEffect, FC} from 'react';
import {Network, Node, Edge} from 'vis-network';
import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  container: {
    height: '100%',
    padding: 20,
  },
}));

const Graph: FC<{
  nodes: Array<Node>;
  edges: Array<Edge>;
  options?: object;
}> = ({nodes, edges, options = {}}) => {
  const classes   = useStyles();
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
      options,
    );
  }, [nodes, edges, options]);

  return <div className={classes.container} ref={container}/>;
};

export default Graph;
