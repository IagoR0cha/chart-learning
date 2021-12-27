import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { LineChartCard } from './components/cards/LineChartCard';
import { PieChartCard } from './components/cards/PieChartCard';
import { PieChartData } from 'react-native-svg-charts';
import { DonutChartCard } from './components/cards/DonutChartCard';
import { LineChartData } from './components/charts/line_chart/DefaultLineChart';
import { BarChartCard } from './components/cards/BarChartCard';

export default function App() {
  const [currentHeight, setCurrentHeight] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(0);

  const data: LineChartData[] = [
    {
      key: 'React',
      data: [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      svg: { stroke: '#40146E'}
    },
    {
      key: 'Vue',
      data: [ 13, 43, -53, -34, -23, -90, -23, 125, 100, 95, 12, 78, 76, -88, 0],
      svg: { stroke: '#009688'}
    },
  ];

  const barData: LineChartData[] = [
    {
      key: 'React',
      data: [ 50, 10, 40, 95, -4, -24, 85, 91, 35],
      svg: { fill: '#40146E'}
    },
    {
      key: 'Vue',
      data: [ 13, 43, -53, -34, -23, -90, -23, 125, 100],
      svg: { fill: '#009688'}
    },
  ];

  const dataPie: PieChartData[] = [
    {
      key: 'React',
      value: 33,
      svg: { fill: 'blue' }
    },
    {
      key: 'Vue',
      value: 33,
      svg: { fill: 'green' }
    },
    {
      key: 'Angular',
      value: 33,
      svg: { fill: 'red' }
    },
  ]

  const dataDonut: PieChartData[] = [
    {
      key: 'Qt',
      value: 30,
      svg: { fill: '#00c95f' }
    },
    {
      key: 'React Native',
      value: 100,
      svg: { fill: '#00d6ef' }
    },
    {
      key: 'Flutter',
      value: 70,
      svg: { fill: '#004a9c' }
    },
  ]

  function calcAvg() {
    return data.map((line) => {
      return line.data.reduce((result, current) =>  result + current) / line.data.length;
    })
  }

  useEffect(() => {
    setCurrentHeight(Dimensions.get('screen').height);
    setCurrentWidth(Dimensions.get('screen').width);

    Dimensions.addEventListener('change', () => {
      setCurrentHeight(Dimensions.get('screen').height);
      setCurrentWidth(Dimensions.get('screen').width);
    })
  }, [])

  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={[styles.container, {
        height: currentHeight,
        width: currentWidth,
      }]}>
        <ScrollView style={styles.scrollContainer}>
          <LineChartCard
            data={data}
            valueHorizontalLine={calcAvg()}
            enableGrid
            enableYAxis
            enableLegend
          />
          <PieChartCard
            data={dataPie}
            enableLegend
            complementLabel='%'
          />
          <DonutChartCard
            data={dataDonut}
            enableLegend
            complementLabel='%'
          />
          <BarChartCard
            data={barData}
            enableYAxis
            enableLegend
            enableLabels
          />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    backgroundColor: '#fff',
  },
});
