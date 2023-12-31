import { Dimensions } from "react-native";

const COLORS = {
  primary: "#5FBFF9",
  secondary: "#C0E7FF",

  white: "#FFFBFF",
  grey: "#EEEEEE",
  darkerGrey: "#B3B3B3",
  black: "#252627",
};

const FONT = {
  regular: "PRegular",
  medium: "PMedium",
  semibold: "PSemiBold",
  bold: "PBold",
};

const SIZES = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 28,
  xxl: 36,
  xxxl: 60,
};

const ANIMATIONS = {
  slideDown: {
    0: { translateY: 0 },
    1: { translateY: 650 },
    animationDuration: 1500,
    animationEasing: "ease-in-out",
  },
  slideUp: {
    0: { translateY: 650 },
    1: { translateY: 0 },
    animationDuration: 1250,
    animationEasing: "ease-in-out",
  },
  slideRight: {
    0: { translateX: -650 },
    1: { translateX: 0 },
    animationDuration: 1500,
    animationEasing: "ease-in-out",
  },
};

const WINDOW_HEIGHT = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;

export { COLORS, FONT, SIZES, ANIMATIONS, WINDOW_HEIGHT, WINDOW_WIDTH };
