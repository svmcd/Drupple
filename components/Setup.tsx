import { useState } from "react";

import { Text, View, TouchableOpacity } from "react-native";

import SetupCarousel from "./SetupCarousel";
import Dots from "../assets/svg/Dots";

import styles from "../styles/global";

function Setup() {
  const [autoPlayMode, setAutoPlayMode] = useState(false);
  const [autoPlayReverseMode, setAutoPlayReverseMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextPage = () => {
    setAutoPlayMode(!autoPlayMode);
    setTimeout(() => {
      setAutoPlayMode(false);
    }, 200);
  };

  const handlePreviousPage = () => {
    setAutoPlayMode(!autoPlayMode);
    setAutoPlayReverseMode(!autoPlayReverseMode);
    setTimeout(() => {
      setAutoPlayMode(false);
      setAutoPlayReverseMode(false);
    }, 200);
  };

  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SetupCarousel
        autoPlayMode={autoPlayMode}
        autoPlayReverseMode={autoPlayReverseMode}
        setCurrentIndex={setCurrentIndex}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          // backgroundColor: "red",
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
              <Text style={styles.textBlue}>Back</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={handleNextPage} style={styles.buttonCta}>
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
            justifyContent: "center",
          }}
        >
          <Dots index={currentIndex} styles={""} />
        </View>
      </View>
    </View>
  );
}

export default Setup;
