import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors, responsiveHeight, responsiveWidth} from '../utils';

const CardLeague = ({liga}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={liga.image} style={styles.logo}></Image>
    </TouchableOpacity>
  );
};

export default CardLeague;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  logo: {
    width: responsiveWidth(57),
    height: responsiveHeight(57),
  },
});
