import { useRef, useEffect } from "react";
import { View, Text, Animated } from "react-native";

import { COLORS, SIZES, WINDOW_WIDTH } from "../constants/theme";
import styles from "../styles/global";

const ProgressContainer = ({
  currentWaterIntake,
  waterIntakeGoal,
  percentageAchieved,
}) => {
  const barFill = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(barFill, {
      toValue: percentageAchieved * 2.435,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [percentageAchieved]);

  return (
    <View style={{ overflow: "hidden", paddingBottom: 5 }}>
      <View
        style={{
          backgroundColor: COLORS.white,
          width: WINDOW_WIDTH / 1.25,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 25,
          gap: 7.5,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 1,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.text}>
            <Text style={styles.textBlue}>{currentWaterIntake}</Text>/
            {waterIntakeGoal * 1000}ML
          </Text>
          <Text style={styles.text}>{Math.round(percentageAchieved)}%</Text>
        </View>
        <View>
          <View
            style={{
              width: "100%",
              height: 2.5,
              backgroundColor: COLORS.grey,
              borderRadius: 25,
            }}
          >
            <Animated.View
              style={{
                width: barFill || 0,
                height: 2.5,
                backgroundColor: COLORS.primary,
                borderRadius: 25,
              }}
            ></Animated.View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProgressContainer;
