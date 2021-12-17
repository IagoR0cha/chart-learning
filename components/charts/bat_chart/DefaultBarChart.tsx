import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BarChart, Grid, YAxis } from 'react-native-svg-charts';
import { Legends } from '../../_shered/Legends';
import { LineChartData } from '../line_chart/DefaultLineChart';
import { Labels } from './Labels';

interface Props {
  data: LineChartData[];
  enableYAxis?: boolean;
  enableLegend?: boolean;
  enableLabels?: boolean;
}

export function DefaultBarChart(props: Props) {
  const { data, enableYAxis, enableLegend, enableLabels } = props;

  function makeDataForAxis() {
    let totalData: number[] = [];

    data.forEach((line) => {
      totalData = [...totalData, ...line.data];
    })

    return totalData;
  }

  return (
    <>
      <View style={styles.container}>
        {enableYAxis &&
          <YAxis
            data={makeDataForAxis()}
            contentInset={{ top: 20, bottom: 20 }}
            svg={{ fill: 'grey', fontSize: 10 }}
            numberOfTicks={10}
            formatLabel={(value) => `${value}`}
          />
        }
        <View style={styles.barChartContainer}>
          <BarChart
            style={styles.chartContainer}
            data={data}
            contentInset={{ top: 30, bottom: 30 }}
            spacingInner={0.2}
          >
            <Grid direction={Grid.Direction.HORIZONTAL} />
           {enableLabels && <Labels />}
          </BarChart>
        </View>
      </View>
      {enableLegend &&
        <Legends
          data={data}
          targetColor='fill'
        />
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 220,
    paddingHorizontal: 16
  },
  chartContainer: {
    flex: 1
  },
  barChartContainer:  {
    flex: 1,
    marginLeft: 8
  },
});