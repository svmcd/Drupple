import { useState } from "react";

import { Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import useStoredUserData from "../hooks/useStoredUserData";

import SetupCarousel from "./SetupCarousel";
import Dots from "../assets/svg/Dots";
import styles from "../styles/global";
import { COLORS } from "../constants/theme";

function Setup() {
  const userData = useStoredUserData();

  const [autoPlayMode, setAutoPlayMode] = useState(false);
  const [autoPlayReverseMode, setAutoPlayReverseMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [weight, onChangeWeight] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [dailyWaterIntake, setDailyWaterIntake] = useState(0);

  const handleNextPage = async () => {
    setDailyWaterIntake(waterIntake);
    if (currentIndex === 2) {
      try {
        const data = { dailyWaterIntake, selectedOption, weight };
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem("userData", jsonValue);
      } catch (e) {
        console.error("Error storing data:", e);
      }
    }
    setAutoPlayMode(!autoPlayMode);
    setDisabled(true);
    setTimeout(() => {
      setAutoPlayMode(false);
    }, 200);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  const handlePreviousPage = () => {
    setAutoPlayMode(!autoPlayMode);
    setAutoPlayReverseMode(!autoPlayReverseMode);
    setTimeout(() => {
      setAutoPlayMode(false);
      setAutoPlayReverseMode(false);
    }, 200);
  };

  const WATER_PER_KG = 0.035;
  const activityMultipliers = {
    Sedentary: 1.0,
    "Lightly active": 1.11,
    "Moderately active": 1.24,
    Active: 1.35,
    "Very Active": 1.42,
  };

  const waterIntake =
    Math.round(
      parseInt(weight) * WATER_PER_KG * activityMultipliers[selectedOption] * 10
    ) / 10;

  return (
    <View
      style={{
        padding: 10,
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ position: "absolute", top: -100 }}>
        <Text>Stored User Data:</Text>
        {userData ? (
          <View>
            <Text>Selected Option: {userData.dailyWaterIntake}</Text>
            <Text>Selected Option: {userData.selectedOption}</Text>
            <Text>Weight: {userData.weight}</Text>
          </View>
        ) : (
          <Text>No data stored yet.</Text>
        )}
      </View>
      <SetupCarousel
        autoPlayMode={autoPlayMode}
        autoPlayReverseMode={autoPlayReverseMode}
        setCurrentIndex={setCurrentIndex}
        weight={weight}
        onChangeWeight={onChangeWeight}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <View
        style={{
          flexDirection: "column",
          gap: 10,
          paddingBottom: 25,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: currentIndex === 0 ? "center" : "space-between",
            alignItems: "flex-start",
          }}
        >
          {currentIndex > 0 && (
            <TouchableOpacity
              onPress={handlePreviousPage}
              style={styles.buttonPassive}
            >
              <Text style={styles.textBlue}>
                {currentIndex === 2 ? "Edit" : "Back"}
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={handleNextPage}
            style={[
              styles.buttonCta,
              currentIndex === 1 &&
                (weight === "" || selectedOption === "") && {
                  backgroundColor: COLORS.darkerGrey,
                },
            ]}
            disabled={
              disabled ||
              (currentIndex === 1 && (weight === "" || selectedOption === ""))
            }
          >
            <Text style={styles.textWhite}>
              {currentIndex === 0
                ? "Let's get started"
                : currentIndex === 1
                ? "Continue"
                : "Finish"}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            height: 40,
          }}
        >
          <Dots index={currentIndex} styles={""} />
        </View>
      </View>
    </View>
  );
}

export default Setup;
