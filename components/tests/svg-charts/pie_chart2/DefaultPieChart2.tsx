import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { PathProps } from 'react-native-svg';
import { PieChart, PieChartData } from 'react-native-svg-charts';
import { Labels } from './Labels';

export function DefaultPieChart2() {
  // const data = [50, 10, 40, 95];
  const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7);

  const data: PieChartData[] = [
    {
        key: 1,
        value: 50,
        svg: { fill: '#600080', onPress: () => {
          Alert.alert(
            'Não há nada aq',
            'volte para oq estava fazendo',
            [{ text: 'blz', style: 'destructive' }]
          )
        }},
    },
    {
        key: 2,
        value: 50,
        svg: { fill: '#9900cc' },
    },
    {
        key: 3,
        value: 40,
        svg: { fill: '#c61aff' }
    },
    {
        key: 4,
        value: 95,
        svg: { fill: '#d966ff' }
    },
    {
        key: 5,
        value: 35,
        svg: { fill: '#ecb3ff' }
    }
]

  return (
    <PieChart
      style={{ height: 220 }}
      data={data}
      valueAccessor={({ item }) => item.value!}
      outerRadius={'100%'}
      innerRadius={4}
      startAngle={-0.9}
      svg={{
      }}
    >
      <Labels />
    </PieChart>
  )
}