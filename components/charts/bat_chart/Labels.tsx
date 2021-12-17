import React from 'react';
import { Text } from 'react-native-svg';
import { LineChartData } from '../line_chart/DefaultLineChart';

interface Props {
  x: Function;
  y: Function;
  data: LineChartData[];
  bandwidth: number;
}

export function Labels(props: any) {
  const { x, y, data, bandwidth }: Props = props;
  const totalBar = data.length;

  function makeLabels() {
    const totalItems = data[0].data;

    return totalItems.map((__, index) => {
      let currentItems: number[] = [];

      for(let i=0; i<totalBar; i++) {
        const currentBar = data[i];

        if (!!currentBar?.data) {
          currentItems = [...currentItems, currentBar.data[index]];
        }
      }

      return currentItems;
    })
  }

  return (
    <>
      {makeLabels().map((item, index) => (
        item.map((value, labelIndex) => {
          return (
            <Text
              key={labelIndex}
              x={x(index) + (bandwidth / (totalBar * 2)) + (labelIndex * (bandwidth / totalBar))}
              y={value > 0 ? y(value) - 10 : y(value) + 10}
              fontSize={bandwidth / 1.8 < 12 ? bandwidth / 1.6 : 12}
              fill={'#000'}
              alignmentBaseline='middle'
              textAnchor='middle'
            >
              { value }
            </Text>
          )
        })
      ))}
    </>
  )
}