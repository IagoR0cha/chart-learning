import React from 'react';
import { PieChartData } from 'react-native-svg-charts';
import { DefaultDonutChart } from '../charts/donut_chart/DefaultDonutChart';
import { DefaultCard } from './DefaultCard';

interface Props {
  data: PieChartData[];
  complementLabel?: string;
  enableLegend?: boolean;
}

export function DonutChartCard({ data, complementLabel, enableLegend }: Props) {
  return (
    <DefaultCard>
      <DefaultDonutChart
        data={data}
        complementLabel={complementLabel}
        enableLegend={enableLegend}
      />
    </DefaultCard>
  );
}