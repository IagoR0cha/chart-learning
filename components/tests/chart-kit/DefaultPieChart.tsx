import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

export function DefaultPieChart() {
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ]

  return (
    <View>
      <PieChart
        data={data}
        width={Dimensions.get('window').width}
        height={220}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        hasLegend={false}
        // absolute
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          strokeWidth: 8,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});