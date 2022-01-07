import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {colors} from '../../utils';

const index = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default index;
