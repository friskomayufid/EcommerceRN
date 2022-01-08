import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {colors, responsiveHeight} from '../utils';
import {IconSearch, IconCart} from '../assets';
import {Button, Distance} from './index';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <View style={styles.searchSection}>
          <IconSearch />
          <TextInput placeholder="Cari Jersey..." style={styles.input} />
        </View>
        <Distance width={10}/>
        <Button icon="cart" padding={10}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(125),
  },
  wrapperHeader: {
    marginTop: 10,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  searchSection: {
    backgroundColor: colors.white,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },
  input: {
    fontSize: 16,
    height: 40,
    marginVertical: 4,
    borderWidth: 1,
    padding: 5,
    borderColor: '#fff',
  },
});

export default Header;
