import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  IconHome,
  IconHomeActive,
  IconJersey,
  IconJerseyActive,
  IconProfile,
  IconProfileActive,
} from '../assets/icons';
import {colors} from '../utils';

const TabItem = ({index, isFocused, options, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHome />;
    }
    if (label === 'Jersey') {
      return isFocused ? <IconJerseyActive /> : <IconJersey />;
    }
    if (label === 'Profile') {
      return isFocused ? <IconProfileActive /> : <IconProfile />;
    }

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: isFocused => ({
    color: isFocused ? colors.white : colors.secondary,
    fontSize: 11,
    marginTop: 4,
  }),
  container: {
    alignItems: 'center',
  },
});

export default TabItem;
