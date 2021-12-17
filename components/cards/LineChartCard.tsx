import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultLineChart, LineChartData } from '../charts/line_chart/DefaultLineChart';
import { DefaultCard } from './DefaultCard';

interface Props {
  data: LineChartData[];
  valueHorizontalLine?: number[];
  enableXAxis?: boolean;
  enableYAxis?: boolean;
  enableGrid?: boolean;
  enableLegend?: boolean;
}

export function LineChartCard(props: Props) {
  const {
    data,
    valueHorizontalLine,
    enableXAxis,
    enableYAxis,
    enableGrid,
    enableLegend
  } = props

  return (
    <DefaultCard>
      <DefaultLineChart
        data={data}
        valueHorizontalLine={valueHorizontalLine}
        enableXAxis={enableXAxis}
        enableYAxis={enableYAxis}
        enableGrid={enableGrid}
        enableLegend={enableLegend}
      />
    </DefaultCard>
  );
}

const styles = StyleSheet.create({});