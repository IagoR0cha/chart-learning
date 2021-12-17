import React from 'react';
import { Text } from 'react-native-svg'

interface Props {
  slices: any;
  complementLabel?: string;
}

export function Labels(props: any) {
  const { slices, complementLabel }: Props = props;

  return slices.map((slice: any, index: number) => {
    const { labelCentroid, pieCentroid, data } = slice;
    return (
      <Text
        key={index}
        x={pieCentroid[ 0 ]}
        y={pieCentroid[ 1 ]}
        fill={'white'}
        textAnchor={'middle'}
        alignmentBaseline={'middle'}
        fontSize={22}
        fontWeight={'bold'}
        stroke={'black'}
        strokeWidth={0.2}
      >
        {`${data.percentageValue.toFixed(1)}${complementLabel ?? ''}`}
      </Text>
    )
})
}