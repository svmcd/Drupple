import { useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Animated, // Import Animated
} from "react-native";
import { Link } from "expo-router";

import * as Animatable from "react-native-animatable";

import useStoredUserData from "../hooks/useStoredUserData";
import { useSwipe } from "../hooks/useSwipe";

import BoomerangUp from "../assets/svg/BoomerangUp";
import DevMenu from "../components/DevMenu";
import Bottle from "../components/Bottle";
import ProgressContainer from "../components/ProgressContainer";

import { SIZES, COLORS, WINDOW_HEIGHT, ANIMATIONS } from "../constants/theme";
import styles from "../styles/global";

const Home = () => {
  const userData = useStoredUserData();

  const [currentWaterIntake, setCurrentWaterIntake] = useState(0);
  const [boomerangDeg, setBoomerangDeg] = useState("0deg");
  const [progStatus, setProgStatus] = useState("hello");

  const swipeY = useRef(new Animated.Value(450)).current;

  const handleSwipeUp = () => {
    setBoomerangDeg("180deg");
    Animated.timing(swipeY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleSwipeDown = () => {
    setBoomerangDeg("0deg");
    Animated.timing(swipeY, {
      toValue: 450,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const percentageAchieved =
    currentWaterIntake / userData?.dailyWaterIntake / 10;

  const { onTouchStart, onTouchEnd } = useSwipe(handleSwipeUp, handleSwipeDown);

  return (
    <>
      <DevMenu setCurrentWaterIntake={setCurrentWaterIntake} />
      <SafeAreaView
        style={{
          justifyContent: "flex-end",
          height: WINDOW_HEIGHT,
          marginBottom: WINDOW_HEIGHT / 6.5,
          gap: 75,
        }}
      >
        <ProgressContainer
          currentWaterIntake={currentWaterIntake}
          waterIntakeGoal={userData?.dailyWaterIntake}
          percentageAchieved={percentageAchieved}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Bottle
            waterIntakeGoal={userData?.dailyWaterIntake}
            currentWaterIntake={currentWaterIntake}
            setCurrentWaterIntake={setCurrentWaterIntake}
            percentageAchieved={percentageAchieved}
          />
          <TouchableOpacity
            onPress={() => setCurrentWaterIntake(currentWaterIntake + 200)}
          >
            <Text>Add 200 ml </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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

export default Home;
