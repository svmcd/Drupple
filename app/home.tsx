import { useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from "react-native";

import * as Animatable from "react-native-animatable";

import useStoredUserData from "../hooks/useStoredUserData";
import { useSwipe } from "../hooks/useSwipe";

import BoomerangUp from "../assets/svg/BoomerangUp";
import DevMenu from "../components/DevMenu";
import Bottle from "../components/Bottle";
import ProgressContainer from "../components/ProgressContainer";
import SlideUpContainer from "../components/SlideUpContainer";

import { SIZES, COLORS, WINDOW_HEIGHT, ANIMATIONS } from "../constants/theme";
import styles from "../styles/global";

const Home = () => {
  const userData = useStoredUserData();

  const [currentWaterIntake, setCurrentWaterIntake] = useState(0);
  const [boomerangDeg, setBoomerangDeg] = useState("0deg");

  const swipeY = useRef(new Animated.Value(200)).current;

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
      toValue: 200,
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
          marginBottom: WINDOW_HEIGHT / 5,
          gap: 50,
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
      <SlideUpContainer
        boomerangDeg={boomerangDeg}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        swipeY={swipeY}
        currentWaterIntake={currentWaterIntake}
        setCurrentWaterIntake={setCurrentWaterIntake}
      />
    </>
  );
};

export default Home;
