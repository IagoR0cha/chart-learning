import React from 'react';
import { PieChartData } from 'react-native-svg-charts';
import { DefaultDonutChart } from '../charts/donut_chart/DefaultDonutChart';
import { PieData } from '../charts/pie_chart/DefaultPieChart';
import { DefaultCard } from './DefaultCard';

interface Props {
  data: PieChartData[];
  complementLabel?: string;
}

export function DonutChartCard({ data, complementLabel }: Props) {
  return (
    <DefaultCard>
      <DefaultDonutChart
        data={data}
        complementLabel={complementLabel}
      />
    </DefaultCard>
  );
}