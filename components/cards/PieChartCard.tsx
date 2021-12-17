import React from 'react';
import { PieChartData } from 'react-native-svg-charts';
import { DefaultPieChart } from '../charts/pie_chart/DefaultPieChart';
import { DefaultCard } from './DefaultCard';

interface Props {
  data: PieChartData[];
  complementLabel: string;
  enableLegend?: boolean;
}

export function PieChartCard({ data, complementLabel, enableLegend }: Props) {
  return (
    <DefaultCard>
      <DefaultPieChart
        data={data}
        complementLabel={complementLabel}
        enableLegend={enableLegend}
      />
    </DefaultCard>
  );
}