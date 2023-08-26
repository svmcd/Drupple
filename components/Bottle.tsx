import React, { useRef, useEffect } from "react";
import { View, Text, Animated } from "react-native";

import { COLORS, SIZES } from "../constants/theme";

const Bottle = ({
  waterIntakeGoal,
  currentWaterIntake,
  setCurrentWaterIntake,
}) => {
  const percentageAchieved = currentWaterIntake / waterIntakeGoal / 10;

  const heightFill = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(heightFill, {
      toValue: percentageAchieved * 2,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [percentageAchieved]);

  return (
    <View>
      <View
        style={{
          backgroundColor: COLORS.white,
          height: 200,
          width: 100,
          justifyContent: "flex-end",
        }}
      >
        <Animated.View
          style={{
            backgroundColor: COLORS.primary,
            height: heightFill,
            width: "100%",
          }}
        ></Animated.View>
      </View>
    </View>
  );
};

export default Bottle;
