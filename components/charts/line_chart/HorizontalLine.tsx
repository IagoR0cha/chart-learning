import React from 'react';
import { Line } from 'react-native-svg';
import { LineChartData } from './DefaultLineChart';

type Props = {
  x: Function;
  y: Function;
  data: LineChartData[];
  width: number;
  values: number[];
}

export function HorizontalLine(props: any) {
  const { y, values, data }: Props = props;

  return (
    <>
      {values.map((value, index) => (
        <Line
          key={index}
          x1={'0%'}
          x2={'100%'}
          y1={y(value)}
          y2={y(value)}
          stroke={data[index].svg?.stroke}
          strokeDasharray={[4,8]}
          strokeWidth={2}
        />
      ))}
    </>
  );
}