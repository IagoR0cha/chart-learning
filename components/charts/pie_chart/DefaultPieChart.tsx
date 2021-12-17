import React, { Children, ComponentProps, ReactNode, useState } from 'react';
import { PieChart, PieChartData } from 'react-native-svg-charts';
import { StyleSheet, View } from 'react-native';

import { Labels } from './Labels';
import { PieTooltip } from './PieTooltip';

interface Props extends ComponentProps<typeof PieChart> {
  data: PieChartData[];
  complementLabel?: string;
  children?: ReactNode;
}

export interface PieData extends PieChartData {
  percentageValue: number
}

export function DefaultPieChart(props: Props) {
  const [itemSelected, setItemSelected] = useState<PieData>({} as PieData);

  const { data, complementLabel, children, ...all } = props;

  function calcPercentage(): PieData[] {
    const totalValue = data.filter(({value}) => !!value || value === 0)
      .map(({ value }) => value)
      .reduce((sum, value) => value! + sum!);

    return data.map((item) => {
      const currentItem = item;

      const currentPercentage = currentItem.value! * 100 / totalValue!;
      return { ...currentItem, percentageValue: currentPercentage } as PieData;
    });
  }

  function handleSelectItem(item: PieData) {
    if (item.key === itemSelected.key) {
      setItemSelected({} as PieData);
    } else {
      setItemSelected(item);
    }
  }

  function insertEventOnItem(data: PieData[]) {
    return data.map((item) => {
      let currentItem = item;

      currentItem.svg = {
        ...currentItem.svg,
        onPress: () => handleSelectItem(item)
      }

      return currentItem;
    })
  }

  return (
    <View style={styles.container}>
      <PieChart
        style={{ height: 240, }}
        data={insertEventOnItem(calcPercentage())}
        valueAccessor={({ item }) => item.percentageValue!}
        outerRadius={'100%'}
        innerRadius={4}
        startAngle={-0.9}
        {...all}
      >
        <Labels
          complementLabel={complementLabel}
        />
        <PieTooltip itemSelected={itemSelected} />
      </PieChart>
      { children }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});