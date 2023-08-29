import { useState, useRef } from "react";
import { View, Animated } from "react-native";

import * as Animatable from "react-native-animatable";

import BoomerangUp from "../assets/svg/BoomerangUp";
import { ANIMATIONS } from "../constants/theme";
import styles from "../styles/global";

const SlideUpContainer = ({
  boomerangDeg,
  onTouchStart,
  onTouchEnd,
  swipeY,
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
        </Animated.View>
      </Animatable.View>
    </>
  );
};

export default SlideUpContainer;
