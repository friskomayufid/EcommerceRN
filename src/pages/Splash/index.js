import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Ilustrasi, Logo} from '../../assets';

const index = props => {
  // Splash shown for 3 seconds
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('MainApp');
    }, 3000);
  }, []);

  return (
    <View style={styles.pages}>
      <Logo />
      <View style={styles.ilustrasi}>
        <Ilustrasi />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  ilustrasi: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default index;
