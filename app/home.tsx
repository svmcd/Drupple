import { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Link } from "expo-router";

import useStoredUserData from "../hooks/useStoredUserData";

import Bottle from "../components/Bottle";
import { SIZES, COLORS, WINDOW_HEIGHT } from "../constants/theme";
import styles from "../styles/global";

const Home = () => {
  const userData = useStoredUserData();

  const [currentWaterIntake, setCurrentWaterIntake] = useState(0);

  return (
    <SafeAreaView>
      <View style={{ position: "absolute", top: 200 }}>
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
      </View>
      <View
        style={{
          height: WINDOW_HEIGHT,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Text>
            {currentWaterIntake}/{userData.dailyWaterIntake * 1000} ML
          </Text>
        </View>
        <Bottle
          waterIntakeGoal={userData?.dailyWaterIntake}
          currentWaterIntake={currentWaterIntake}
          setCurrentWaterIntake={setCurrentWaterIntake}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
