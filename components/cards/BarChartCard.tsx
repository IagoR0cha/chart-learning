import React from 'react';
import { DefaultBarChart } from '../charts/bat_chart/DefaultBarChart';
import { LineChartData } from '../charts/line_chart/DefaultLineChart';
import { DefaultCard } from './DefaultCard';

interface Props {
  data: LineChartData[];
  enableYAxis?: boolean;
  enableLegend?: boolean;
  enableLabels?: boolean;
}

export function BarChartCard(props: Props) {
  const { enableYAxis, data, enableLegend, enableLabels } = props;

  return (
    <DefaultCard>
      <DefaultBarChart
        data={data}
        enableYAxis={enableYAxis}
        enableLegend={enableLegend}
        enableLabels={enableLabels}
      />
    </DefaultCard>
  );
}