import React, { useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Circle, G, Line, Rect, Text } from 'react-native-svg'
import { LineChartData } from './DefaultLineChart';

type Props = {
  positionSelected: number[];
  x: Function;
  y: Function;
  data: LineChartData[];
  width: number
}

export function Tooltip(props: any) {
  const [textWidth, setTextWidth] = useState(0);

  const { x, y, data, positionSelected, width }: Props = props;

  if (positionSelected === null) {
    return null;
  }

  const currentDatas = data[positionSelected[1]].data;
  const currentData = currentDatas[positionSelected[0]];
  const currentAvg = data[positionSelected[1]].svg

  function positionYTooltip() {
    const avg = currentDatas.reduce((acc, current) => acc + current) / currentDatas.length;

    if (currentData > avg) {
      return y(currentData) + 20;
    }

    return y(currentData) - 60;
  }

  function positionXTooltip() {
    const widthDiference = width - x(positionSelected[0]);
    if (widthDiference < textWidth / 2) {
      return Math.floor(((textWidth / 2) - widthDiference)*-1);

    } else if (width - widthDiference <= textWidth / 2) {
      return Math.ceil((textWidth / 2) - (width - widthDiference));
    }

    return 0;
  }

  return (
    <G
      key={'tooltip'}
      x={x(positionSelected[0]) - (textWidth / 2)}
    >
      <G
        y={positionYTooltip()}
        x={positionXTooltip()}
      >
        <Rect
          height={40}
          width={textWidth}
          stroke={currentAvg?.stroke}
          fill='#fff'
          ry={10}
          rx={10}
        />
        <Text
          x={textWidth / 2}
          dy={20}
          alignmentBaseline='middle'
          textAnchor='middle'
          fontSize={16}
          fill={currentAvg?.stroke}
          fontWeight={'bold'}
          onLayout={(e: LayoutChangeEvent) => {
            setTextWidth(e.nativeEvent.layout.width + 24)
          }}
        >
          { `${currentData}` }
        </Text>
      </G>
    </G>
  );
}