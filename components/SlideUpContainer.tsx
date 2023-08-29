import { View, Animated, ScrollView } from "react-native";

import * as Animatable from "react-native-animatable";

import BoomerangUp from "../assets/svg/BoomerangUp";
import WaterOptions from "./WaterOptions";
import { ANIMATIONS } from "../constants/theme";
import styles from "../styles/global";

const SlideUpContainer = ({
  boomerangDeg,
  onTouchStart,
  onTouchEnd,
  swipeY,
  currentWaterIntake,
  setCurrentWaterIntake,
}) => {
  return (
    <>
      <Animatable.View animation={ANIMATIONS.slideUp}>
        <Animated.View
          style={[
            styles.swipeContainer,
            {
              transform: [{ translateY: swipeY || 450 }],
              alignItems: "center",
            },
          ]}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <BoomerangUp
              styles={{
                zIndex: 10,
                transform: [{ rotate: boomerangDeg || "0deg" }],
              }}
            />
          </View>
          <ScrollView style={{ width: "100%" }}>
            <WaterOptions
              title="Glass of water"
              amount={250}
              currentWaterIntake={currentWaterIntake}
              setCurrentWaterIntake={setCurrentWaterIntake}
            />
            <WaterOptions
              title="Bottle of water"
              amount={500}
              currentWaterIntake={currentWaterIntake}
              setCurrentWaterIntake={setCurrentWaterIntake}
            />
            <WaterOptions
              title="Large bottle of water"
              amount={750}
              currentWaterIntake={currentWaterIntake}
              setCurrentWaterIntake={setCurrentWaterIntake}
            />
            <WaterOptions
              title="XL bottle of water"
              amount={1000}
              currentWaterIntake={currentWaterIntake}
              setCurrentWaterIntake={setCurrentWaterIntake}
            />
          </ScrollView>
        </Animated.View>
      </Animatable.View>
    </>
  );
};

export default SlideUpContainer;
