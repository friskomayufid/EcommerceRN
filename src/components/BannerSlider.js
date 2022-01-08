import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Slider1, Slider2} from '../assets/images';
import {colors, responsiveHeight, responsiveWidth} from '../utils';

const BannerSlider = () => {
  const [images, setImages] = useState([Slider1, Slider2]);
  return (
    <View style={styles.container}>
      <SliderBox
        images={images}
        autoplay
        circleLoop
        sliderBoxHeight={responsiveHeight(132)}
        ImageComponentStyle={styles.slider}
        dotStyle={styles.dotStyle}
        dotColor={colors.primary}
        imageLoadingColor={colors.primary}
      />
    </View>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({
  container: {
    marginTop: -40,
  },
  slider: {
    borderRadius: 10,
    width: responsiveWidth(354),
  },
  dotStyle: {
    width: 10,
    height: 5,
    borderRadius: 5,
  },
});
