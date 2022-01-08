import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconCart} from '../assets';
import {colors} from '../utils';

const Button = ({icon, totalCart, padding}) => {
  const Icon = () => {
    if (icon === 'cart') {
      return <IconCart />;
    }
  };
  return (
    <TouchableOpacity style={styles.container(padding)}>
      <Icon />
      {totalCart && (
        <View style={styles.notif}>
          <Text style={styles.textNotif}>{totalCart}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (padding) => ({
    backgroundColor: colors.white,
    padding: padding,
    borderRadius: 5,
  }),
  notif: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 3,
    padding: 3,
  },
  textNotif: {
    fontSize: 8,
    color: colors.white,
    fontWeight: 'bold'
  },
});
