import React from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';
import { PathProps } from 'react-native-svg';
import { PieChartData } from 'react-native-svg-charts';
import { LineChartData } from '../charts/line_chart/DefaultLineChart';

interface Props {
  data: PieChartData[] | LineChartData[];
  targetColor: keyof Partial<PathProps>;
  style?: StyleProp<ViewStyle>;
}

export function Legends(props: Props) {
  const { data, targetColor, style } = props;

  return (
    <View style={[styles.container, style]}>
      {data.map(({ key, svg }, index) => (
        <View key={index} style={styles.legendContainer}>
          <View style={[styles.colorContainer, { backgroundColor: svg ? (svg as any)[targetColor] : '#fff'}]} />
          <Text style={styles.textLegend}>
            { key }
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  legendContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'center',
    marginBottom: 5
  },
  colorContainer: {
    height: 15,
    width: 35,
    borderWidth: 1,
    borderColor: '#000'
  },
  textLegend: {
    fontWeight: 'bold',
    marginLeft: 8
  }
});