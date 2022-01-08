import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardLeague from './CardLeague';

const ListLeague = ({ligas}) => {
  return (
    <View style={styles.container}>
      {ligas.map(liga => {
        return <CardLeague liga={liga} key={liga.id} />;
      })}
    </View>
  );
};

export default ListLeague;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
