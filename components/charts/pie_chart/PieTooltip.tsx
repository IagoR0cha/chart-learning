import React, { useState } from 'react';
import Svg, { G, Rect, Text } from 'react-native-svg';
import { LayoutChangeEvent, View } from 'react-native';

import { PieData } from './DefaultPieChart';

interface Props {
  slices: any;
  itemSelected: PieData;
  width: number
}

export function PieTooltip(props: any) {
  const { slices, itemSelected, width }: Props = props;

  const [textWidth, setTextWidth] = useState(10);

  if (itemSelected?.key) {
    const { key } = itemSelected;

    const currentItem = slices.find(({ data }: any) => data.key === key);
    const { pieCentroid, data } = currentItem;

    function tooltipY() {
      if (pieCentroid[1] > 0) {
        return pieCentroid[1] - 53;
      }

      return pieCentroid[1] + 10;
    }

    function tooltipX() {
      const widthDiference = (textWidth + (pieCentroid[0] + width / 2)) - width + 1;

      if (widthDiference > 0) {
        return pieCentroid[0] - widthDiference;
      }

      return pieCentroid[0];
    }

    return (
      <G
        key={'tooltip'}
        x={tooltipX()}
        y={tooltipY()}
      >
        <Rect
          height={40}
          width={textWidth}
          stroke={data.svg.fill}
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
          fill={data.svg.fill}
          fontWeight={'bold'}
          onLayout={(e: LayoutChangeEvent) => {
            setTextWidth(e.nativeEvent.layout.width + 16)
          }}
        >
          { `${data.key}: ${data.value}` }
        </Text>
      </G>
    )
  }

  return null;
}