import React, { useState } from 'react';
import { PieChartData } from 'react-native-svg-charts';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

import { DefaultPieChart } from '../pie_chart/DefaultPieChart';

interface Props {
  data: PieChartData[];
  complementLabel?: string;
}

export function DefaultDonutChart(props: Props) {
  const [labelWidth, setLabelWidth] = useState(0);

  const { data, complementLabel } = props;

  function calcTotal() {
    return data.map(({ value }) => value)
      .reduce((sum, current) => sum! + current!);
  }

  return (
    <DefaultPieChart
      data={data}
      complementLabel={complementLabel}
      innerRadius={'35%'}
    >
      <View
        onLayout={({ nativeEvent }) => {
          setLabelWidth(nativeEvent.layout.width);
        }}
        style={[styles.containerInChart, {
          left: Dimensions.get('window').width / 2 - labelWidth
        }]}
      >
        <Text style={styles.textInChart}>
          Total
        </Text>
        <Text style={[styles.textInChart, styles.textTotalValue]}>
          { calcTotal() }
        </Text>
      </View>
    </DefaultPieChart>
  );
}

const styles = StyleSheet.create({
  containerInChart: {
    position: 'absolute',
    textAlign: 'center',
    alignItems: 'center',
    zIndex: -1
  },
  textInChart: {
    fontSize: 20
  },
  textTotalValue: {
    fontWeight: 'bold'
  }
});