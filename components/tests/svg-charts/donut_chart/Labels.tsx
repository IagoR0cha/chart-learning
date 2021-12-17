import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-svg'

export function Labels({ slices }: any) {
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
        fontSize={24}
        stroke={'black'}
        strokeWidth={0.2}
      >
        {data.amount}
      </Text>
    )
})
}