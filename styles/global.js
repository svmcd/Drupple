import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../constants/theme";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    justifyContent: "flex-end"
  },
  container: {
    height: windowHeight / 1.5,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 13,
    },
    shadowOpacity: 0.24,
    shadowRadius: 14.86,
    elevation: 18,
    zIndex: 2,
  },
  slidesContainer: {
    padding: SIZES.md,
    gap: 10
  },
  coloredDrupple: {
    color: COLORS.primary,
  },
  title: {
    fontFamily: FONT.semibold,
    fontSize: SIZES.xxl,
    color: COLORS.black,
  },
  text: {
    fontFamily: FONT.medium,
    fontSize: SIZES.lg,
    color: COLORS.black,
  },
  textWhite: {
    fontFamily: FONT.medium,
    fontSize: SIZES.lg,
    color: COLORS.white,
  },
  textBlue: {
    fontFamily: FONT.medium,
    fontSize: SIZES.lg,
    color: COLORS.primary,
  },
  buttonPassive: {
    fontFamily: FONT.semibold,
    fontSize: SIZES.lg,
    backgroundColor: COLORS.white,
    color: COLORS.white,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: COLORS.primary
  },
  buttonCta: {
    fontFamily: FONT.semibold,
    fontSize: SIZES.lg,
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    width: 200,
    height: 50,
    textAlign: 'center',
    overflow: "hidden",
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberInput: {
    backgroundColor: COLORS.grey,
    fontFamily: FONT.medium,
    fontSize: SIZES.lg,
    width: 40,
    paddingVertical: 5,
    textAlign: 'center'
  },
  option: {
    backgroundColor: COLORS.grey,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  svgTopRight: (zIndex, top, right) => ({
    position: "absolute",
    zIndex: zIndex,
    top: top,
    right: right,
  }),

  svgTopLeft: (zIndex, top, left) => ({
    position: "absolute",
    zIndex: zIndex,
    top: top,
    left: left,
  }),
});

export default styles;