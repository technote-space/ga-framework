import type {FC} from 'react';
import React, {memo, useRef, useState, useEffect} from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Chart, {ChartPoint} from 'chart.js';
import useTheme from '../hooks/useTheme';
import {useStoreContext} from '../Store';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    // eslint-disable-next-line no-magic-numbers
    padding: theme.spacing(0, 2),
  },
}));

const Timeline: FC<{
  data: Array<ChartPoint>;
}> = memo(({data}) => {
  const classes               = useStyles();
  const [chart, setChart]     = useState<Chart | null>(null);
  const container             = useRef<HTMLCanvasElement>(null);
  const {store: {themeColor}} = useStoreContext();
  const themeObject           = useTheme(themeColor);

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }
    if (!container.current) {
      return;
    }

    setChart(new Chart(
      container.current,
      {
        type: 'line',
        data: {
          datasets: [
            {
              lineTension: 0.1,
              backgroundColor: 'rgba(75, 192, 192, 0.4)',
              borderColor: 'rgba(75, 192, 192, 1)',
              label: 'Fitness',
              data,
            },
          ],
          // eslint-disable-next-line no-magic-numbers
          labels: [...Array(101).keys()],
        },
        options: {
          legend: {display: false},
          scales: {
            xAxes: [
              {
                type: 'linear',
                ticks: {
                  min: 0, max: 100, stepSize: 10,
                  fontColor: themeObject.palette.primary.contrastText,
                  padding: 5,
                },
                gridLines: {
                  color: themeObject.palette.secondary.contrastText,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  min: 0, max: 1.1, stepSize: 0.1,
                  fontColor: themeObject.palette.primary.contrastText,
                  padding: 5,
                },
                gridLines: {
                  color: themeObject.palette.secondary.contrastText,
                },
              },
            ],
          },
          animation: undefined,
        },
      },
    ));
  }, [data]);

  return <canvas className={classes.root} ref={container}/>;
});

Timeline.displayName = 'Timeline';
export default Timeline;
