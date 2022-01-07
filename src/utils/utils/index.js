import { Dimensions } from "react-native";
import { heightMobileUI, widthMobileUI } from "../constant";

export const windowWidth = Dimensions.get( 'window' ).width;
export const windowHeight = Dimensions.get( 'window' ).height;

export const responsiveWidth = ( width ) => {
  return windowWidth * width / widthMobileUI
}

export const responsiveHeight = ( height ) => {
  return windowHeight * height / heightMobileUI
}