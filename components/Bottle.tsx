import { View, Text } from "react-native";

import { COLORS, SIZES } from "../constants/theme";

const Bottle = ({
  waterIntakeGoal,
  currentWaterIntake,
  setCurrentWaterIntake,
}) => {
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
            height: "72%",
            width: "100%",
          }}
        ></View>
      </View>
    </View>
  );
};

export default Bottle;
