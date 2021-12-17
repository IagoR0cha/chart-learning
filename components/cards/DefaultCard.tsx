import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  children: ReactElement;
}

export function DefaultCard({ children }: Props) {
  return (
    <View style={styles.container}>
      { children }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 10,
    marginHorizontal: 16,
    marginVertical: 12,
    padding: 8,
  }
});