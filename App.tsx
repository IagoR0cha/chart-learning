import React from 'react';
import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { LineChartCard } from './components/cards/LineChartCard';
import { PieChartCard } from './components/cards/PieChartCard';
import { PieChartData } from 'react-native-svg-charts';
import { DonutChartCard } from './components/cards/DonutChartCard';
import { LineChartData } from './components/charts/line_chart/DefaultLineChart';

export default function App() {
  const data: LineChartData[] = [
    {
      data: [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
      svg: { stroke: '#40146E'}
    },
    {
      data: [ 13, 43, -53, -34, -23, -90, -23, 125, 100, 95, 12, 78, 76, -88, 0],
      svg: { stroke: '#009688'}
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

  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <LineChartCard
            data={data}
            valueHorizontalLine={calcAvg()}
            enableGrid
            enableYAxis
          />
          <PieChartCard
            data={dataPie}
            complementLabel='%'
          />
          <DonutChartCard
            data={dataDonut}
            complementLabel='%'
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
    height: Dimensions.get('screen').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
  },
});
