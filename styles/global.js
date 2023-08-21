import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../constants/theme";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    justifyContent: "flex-end"
  },
  container: {
    backgroundColor: COLORS.white,
    height: "65%",
    borderRadius: "25px 0 0 25px",
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