import { useState } from "react";

import { Dimensions, Text, View, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import SliderSlide from "./SliderSlide";
import Dots from "../assets/svg/Dots";

import styles from "../styles/global";

function Slider() {
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

  const width = Dimensions.get("window").width;
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
      <Carousel
        loop={false}
        width={width - 15}
        height={375}
        autoPlay={autoPlayMode}
        autoPlayReverse={autoPlayReverseMode}
        autoPlayInterval={100}
        data={[
          {
            title: "Welcome to Drupple!",
            text: "Embark on a journey to better hydration and well-being with us. Let's work together to make staying hydrated a seamless part of your routine. Ready to begin?",
          },
          {
            title: "Calculate your goal",
            text: "Let's tailor your hydration goal to your needs. Answer a few quick questions to help us calculate the ideal amount of water for you.",
          },
          {
            title: "You're all set!",
            text: "Congratulations! You've completed the setup. Based on your input, here's your personalized daily hydration goal:",
          },
        ]}
        scrollAnimationDuration={500}
        // style={{ backgroundColor: "blue" }}
        onSnapToItem={(index) => {
          setCurrentIndex(index);
        }}
        renderItem={({ item, index }) => (
          <SliderSlide title={item.title} text={item.text} index={index} />
        )}
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

export default Slider;
