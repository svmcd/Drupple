import { View, Text } from "react-native";

import { COLORS, SIZES } from "../constants/theme";

const Bottle = ({
  waterIntakeGoal,
  currentWaterIntake,
  setCurrentWaterIntake,
}) => {
  const percentageAchieved = currentWaterIntake / waterIntakeGoal / 10;

  return (
    <View>
      <View
        style={{
          backgroundColor: COLORS.white,
          height: 200,
          width: 100,
          padding: SIZES.xs,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: `${percentageAchieved}%`,
            width: "100%",
          }}
        ></View>
      </View>
    </View>
  );
};

export default Bottle;
