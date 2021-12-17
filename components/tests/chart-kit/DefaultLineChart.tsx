import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export function DefaultLineChart() {
  const data = {
    labels: ['100', '0', '100', '100', '100', '100'],
    datasets: [{
      data: [
        50,
        20,
        2,
        86,
        71,
        100
      ]
    }]
  }

  return (
    <View>
      <LineChart
        style={styles.chart}
        data={data}
        width={Dimensions.get('window').width}
        height={220}
        withHorizontalLines={false}
        withVerticalLines={false}
        withDots={false}
        withShadow={false}
        withHorizontalLabels={false}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: (opacity = 1) => `rgba(255, 0, 0, ${1})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          strokeWidth: 8,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  }
})