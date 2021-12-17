import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';
import { Tooltip } from './Tooltip';
import { HorizontalLine } from './HorizontalLine';
import { PositionsChart } from './PositionsChart';
import { PathProps } from 'react-native-svg';
import { Legends } from '../../_shered/Legends';

interface Props {
  data: LineChartData[];
  enableGrid?: boolean;
  valueHorizontalLine?: number[];
  enableXAxis?: boolean;
  enableYAxis?: boolean;
  enableLegend?: boolean;
}

export type LineChartData = {
  key: string;
  data: number[];
  svg?: Partial<PathProps>;
}

export function DefaultLineChart(props: Props) {
  const [positionSelected, setPositionSelected] = useState<number[] | null>(null);

  const {
    data,
    enableGrid,
    valueHorizontalLine,
    enableXAxis,
    enableYAxis,
    enableLegend
  } = props

  function handleSelectPosition(indexes: number[]) {
    if (positionSelected?.length && positionSelected.every((item, index) => item === indexes[index])) {
      setPositionSelected(null);
    } else {
      setPositionSelected(indexes);
    }
  }

  function styleStroke(currentData: LineChartData[]) {
    return currentData.map((item) => {
      let currentItem = item;

      currentItem.svg = {
        ...currentItem.svg,
        strokeWidth: 8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }

      return currentItem;
    })
  }

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
        <View style={styles.lineChartContainer}>
          <LineChart
            style={styles.lineChart}
            data={styleStroke(data)}
            contentInset={{ top: 20, bottom: 20 }}
          >
            {enableGrid && <Grid />}
            {valueHorizontalLine?.length ?
              <HorizontalLine values={valueHorizontalLine} />
              :
              null
            }
            <PositionsChart
              onChangeSelectPosition={handleSelectPosition}
              value={positionSelected}
            />
            <Tooltip positionSelected={positionSelected} />
          </LineChart>
          {enableXAxis &&
            <XAxis
              style={styles.xAxis}
              data={data[0].data}
              formatLabel={(value, index) => index}
              contentInset={{ left: 10, right: 10 }}
              svg={{ fontSize: 10, fill: 'black' }}
            />
          }
        </View>
      </View>
      {enableLegend &&
        <Legends
          data={data}
          targetColor='stroke'
        />
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  lineChartContainer:  {
    flex: 1,
    marginLeft: 8
  },
  lineChart: {
    height: 220,
  },
  xAxis: {
    marginHorizontal: -10
  }
});

