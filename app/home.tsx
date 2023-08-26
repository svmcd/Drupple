import { useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Animated, // Import Animated
} from "react-native";
import { Link } from "expo-router";

import useStoredUserData from "../hooks/useStoredUserData";
import { useSwipe } from "../hooks/useSwipe";

import Bottle from "../components/Bottle";
import { SIZES, COLORS, WINDOW_HEIGHT } from "../constants/theme";
import styles from "../styles/global";

const Home = () => {
  const userData = useStoredUserData();

  const [currentWaterIntake, setCurrentWaterIntake] = useState(0);

  const swipeY = useRef(new Animated.Value(450)).current;

  const handleSwipeUp = () => {
    Animated.timing(swipeY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleSwipeDown = () => {
    Animated.timing(swipeY, {
      toValue: 450,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const { onTouchStart, onTouchEnd } = useSwipe(handleSwipeUp, handleSwipeDown);

  return (
    <>
      <SafeAreaView>
        {/* <View style={{ position: "absolute", top: 200, zIndex: 2 }}>
          <Text>Stored User Data:</Text>
          {userData ? (
            <View>
              <Text>Daily water intake: {userData.dailyWaterIntake} liter</Text>
              <Text>Selected Option: {userData.selectedOption}</Text>
              <Text>Weight: {userData.weight}</Text>
              <Text>
                Setup progress:
                {userData.setupFinished ? " Finished" : " Not finished"}
              </Text>
            </View>
          ) : (
            <Text>No data stored yet.</Text>
          )}
          <Link href="/setup">Redo setup</Link>
        </View> */}
        <View
          style={{
            height: WINDOW_HEIGHT,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Text>
              {currentWaterIntake} of {userData?.dailyWaterIntake * 1000} ML
            </Text>
          </View>
          <Bottle
            waterIntakeGoal={userData?.dailyWaterIntake}
            currentWaterIntake={currentWaterIntake}
            setCurrentWaterIntake={setCurrentWaterIntake}
          />
          <TouchableOpacity
            onPress={() => setCurrentWaterIntake(currentWaterIntake + 200)}
          >
            <Text>Add 200 ml</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentWaterIntake(0)}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Animated.View
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={[
          styles.swipeContainer,
          {
            transform: [{ translateY: swipeY }],
          },
        ]}
      ></Animated.View>
    </>
  );
};

export default Home;
