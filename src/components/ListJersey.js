import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardJersey from './CardJersey';

const ListJersey = ({jerseys}) => {
  return (
    <View style={styles.container}>
      {jerseys.map(jersey => {
        return <CardJersey key={jerseys.id} jersey={jersey} />;
      })}
    </View>
  );
};

export default ListJersey;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
