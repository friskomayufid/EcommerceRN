import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, responsiveHeight } from '../utils'

const Header = () => {
  return (
    <View style={styles.container}>
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create( {
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight( 125 ),
  }
} )

export default Header
