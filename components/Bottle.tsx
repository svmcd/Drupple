import React, { useRef, useEffect } from "react";
import { View, Text, Animated, Easing, StyleSheet } from "react-native";

import Waves from "../assets/svg/Waves";
import { COLORS, SIZES } from "../constants/theme";

const Bottle = ({
  waterIntakeGoal,
  currentWaterIntake,
  setCurrentWaterIntake,
  percentageAchieved,
}) => {
  const heightFill = useRef(new Animated.Value(0)).current;
  const translationValue = useRef(new Animated.Value(0)).current;
  const screenWidth = -65;
  const animationDuration = 7500;

  useEffect(() => {
    const moveRight = Animated.timing(translationValue, {
      toValue: screenWidth,
      duration: animationDuration,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const moveLeft = Animated.timing(translationValue, {
      toValue: 0,
      duration: animationDuration,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    Animated.loop(Animated.sequence([moveRight, moveLeft])).start();
  }, []);

  useEffect(() => {
    Animated.timing(heightFill, {
      toValue: percentageAchieved * 2.85,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [percentageAchieved]);

  return (
    <View style={{ overflow: "hidden", paddingBottom: 5 }}>
      <View style={bottleStyles.bottleOuter}>
        <View style={bottleStyles.highlight} />
        <View style={bottleStyles.highlightSmall} />
        <View style={bottleStyles.bottleInner}>
          <Animated.View
            style={[bottleStyles.water, { height: heightFill || 0 }]}
          >
            <Animated.View
              style={[
                bottleStyles.wavesContainer,
                { transform: [{ translateX: translationValue }] },
              ]}
            >
              <Waves styles={""} />
            </Animated.View>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Bottle;

const bottleStyles = StyleSheet.create({
  bottleOuter: {
    padding: 5,
    paddingTop: 0,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  bottleInner: {
    overflow: "hidden",
    backgroundColor: COLORS.white,
    height: 300,
    width: 150,
    justifyContent: "flex-end",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  water: {
    backgroundColor: COLORS.primary,
    height: 0,
    width: "100%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  highlight: {
    position: "absolute",
    backgroundColor: COLORS.white,
    opacity: 0.5,
    top: 80,
    right: 15,
    zIndex: 2,
    width: 8,
    height: 75,
    borderRadius: 25,
  },
  highlightSmall: {
    position: "absolute",
    backgroundColor: COLORS.white,
    opacity: 0.5,
    top: 170,
    right: 15,
    zIndex: 2,
    width: 8,
    height: 15,
    borderRadius: 25,
  },
  wavesContainer: {
    transform: [{ translateX: 0 }],
    width: 210,
    height: 90,
    position: "absolute",
    top: -55,
    left: 0,
  },
});
