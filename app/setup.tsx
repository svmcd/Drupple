import { useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as Animatable from "react-native-animatable";

import SetupCarousel from "../components/SetupCarousel";
import { calculateWaterIntake } from "../utils/waterCalc";
import Dots from "../assets/svg/Dots";
import styles from "../styles/global";
import { COLORS, ANIMATIONS } from "../constants/theme";

function Setup() {
  const router = useRouter();
  const viewRef = useRef(null);

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
      if (viewRef.current) {
        viewRef.current
          .animate(ANIMATIONS.slideDown)

          .then(() => router.push("home"));
      }
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

  const waterIntake = calculateWaterIntake(weight, selectedOption);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1, justifyContent: "flex-end" }}
    >
      <Animatable.View
        ref={(ref) => {
          viewRef.current = ref;
        }}
        animation={ANIMATIONS.slideUp}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View
              style={{
                padding: 10,
                height: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
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
                    justifyContent:
                      currentIndex === 0 ? "center" : "space-between",
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
                      (currentIndex === 1 &&
                        (weight === "" || selectedOption === ""))
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
          </View>
        </TouchableWithoutFeedback>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
}

export default Setup;
