import type { FC } from 'react';
import type { ScatterDataPoint } from 'chart.js';
import React, { memo, useRef, useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import useTheme from '@/hooks/useTheme';
import { useStoreContext } from '@/Store';

Chart.register(...registerables);

const Timeline: FC<{
  data: Array<ScatterDataPoint>;
}> = memo(({ data }) => {
  const [chart, setChart]         = useState<Chart | null>(null);
  const container                 = useRef<HTMLCanvasElement>(null);
  const { store: { themeColor } } = useStoreContext();
  const themeObject               = useTheme(themeColor);

  useEffect(() => {
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
              tension: 0.1,
              backgroundColor: 'rgba(75, 192, 192, 0.4)',
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: true,
              animation: false,
              label: 'Fitness',
              data,
            },
          ],
          // eslint-disable-next-line no-magic-numbers
          labels: [...Array(101).keys()],
        },
        options: {
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: {
              type: 'linear',
              min: 0,
              max: 100,
              ticks: {
                stepSize: 10,
                color: themeObject.palette.primary.contrastText,
                padding: 5,
              },
              grid: {
                color: themeObject.palette.secondary.contrastText,
              },
            },
            y: {
              min: 0,
              max: 1.1,
              ticks: {
                stepSize: 0.1,
                color: themeObject.palette.primary.contrastText,
                padding: 5,
              },
              grid: {
                color: themeObject.palette.secondary.contrastText,
              },
            },
          },
          animation: undefined,
        },
      },
    ));
  }, []);

  useEffect(() => {
    if (chart) {
      chart.data.datasets[0].data = data;
      chart.update();
    }
  }, [data]);

  return <canvas ref={container} style={{ padding: '0', paddingRight: 16, paddingLeft: 16 }}/>;
});

Timeline.displayName = 'Timeline';
export default Timeline;
