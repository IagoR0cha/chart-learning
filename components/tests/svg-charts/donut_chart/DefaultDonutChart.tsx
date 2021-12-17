import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { Labels } from './Labels';

export function DefaultDonutChart() {
  const [labelWidth, setLabelWidth] = useState(0);

  // const data = [50, 10, 40, 95];
  const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7);


  const data = [
    {
      key: 1,
      amount: 50,
      svg: { fill: '#600080' },
    },
    {
      key: 2,
      amount: 50,
      svg: { fill: '#9900cc' }
    },
    {
      key: 3,
      amount: 40,
      svg: { fill: '#c61aff' }
    },
    {
      key: 4,
      amount: 95,
      svg: { fill: '#d966ff' }
    },
    {
      key: 5,
      amount: 35,
      svg: { fill: '#ecb3ff' }
    }
  ];

  return (
    <View style={styles.container}>
      <PieChart
        style={{ height: 220 }}
        data={data}
        valueAccessor={({ item }) => item.amount}
        innerRadius={'45%'}
      >
        <Labels />
      </PieChart>
      <View
        onLayout={({ nativeEvent }) => {
          setLabelWidth(nativeEvent.layout.width);
        }}
        style={[styles.containerInChart, {
          left: Dimensions.get('window').width / 2 - labelWidth / 2
        }]}
      >
        <Text style={styles.textInChart}>
          Total:
        </Text>
        <Text  style={styles.textInChart}>
          2
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerInChart: {
    position: 'absolute',
    textAlign: 'center',
    alignItems: 'center'
  },
  textInChart: {
    fontSize: 18
  }
});