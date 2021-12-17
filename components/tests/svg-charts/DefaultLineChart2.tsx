import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LineChart, Grid, XAxis } from 'react-native-svg-charts';

export function DefaultLineChart2() {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  return (
    <>
      <LineChart
        style={styles.chart}
        data={data}
        svg={{
          strokeLinejoin: 'round',
          stroke: 'rgb(134, 65, 244)',
          strokeWidth: 8,
          strokeLinecap: 'round'
        }}
        contentInset={{ top: 20, bottom: 20 }}
        animate={true}
      >
        <Grid />
      </LineChart>
      <XAxis
        style={{ marginHorizontal: -10 }}
        data={data}
        formatLabel={(value, index) => index}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: 'black' }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  chart: {
    height: 200
  }
});