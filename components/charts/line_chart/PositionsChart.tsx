import React, { ReactElement } from 'react';
import { Circle, G } from 'react-native-svg';
import { LineChartData } from './DefaultLineChart';

type Props = {
  data: LineChartData[];
  x: Function;
  y: Function;
  onChangeSelectPosition: (indexes: number[]) => void;
  value: number[] | null;
}

type StyleSelected = {
  radius: number;
  color: string;
  stroke: string;
}

export function PositionsChart(props: any) {
  const { data, x, y, onChangeSelectPosition, value }: Props = props;

  function styleSelectedPosition(currentIndex: number, lineIndex: number): StyleSelected {
    const dataLine = data[lineIndex].svg

    if (value?.length && (currentIndex === value[0] && lineIndex === value[1])) {
      return {
        color: dataLine?.stroke?.toString() || '#000',
        radius: 10,
        stroke: '#fff'
      }
    }

    return {
      color: '#fff',
      radius: 7,
      stroke: dataLine?.stroke?.toString() || '#000'
    }
  }

  function makeIndicatorPosition() {
    const totalLine = data.length;
    const totalItems = data[0].data;

    return totalItems.map((__, index) => {
      let currentItems: number[] = [];

      for(let i=0; i<totalLine; i++) {
        const currentLine = data[i];

        if (!!currentLine?.data) {
          currentItems = [...currentItems, currentLine.data[index]];
        }
      }

      return currentItems;
    });
  }

  function handleSelectPosition(value: number, lineIndex: number) {
    onChangeSelectPosition([value, lineIndex]);
  }

  return (
    <>
      {makeIndicatorPosition().map((item, index) => (
        item.map((line, lineIndex) => (
          <Circle
            key={lineIndex}
            cx={x(index)}
            cy={y(line)}
            r={styleSelectedPosition(index, lineIndex).radius}
            stroke={styleSelectedPosition(index, lineIndex).stroke}
            strokeWidth={2}
            fill={styleSelectedPosition(index, lineIndex).color}
            onPress={() => handleSelectPosition(index, lineIndex)}
          />
        ))
      ))}
    </>
  );
}