import { Dimensions } from "react-native";

import Carousel from "react-native-reanimated-carousel";
import SetupCarouselSlide from "./SetupCarouselSlide";

const SetupCarousel = ({
  autoPlayMode,
  autoPlayReverseMode,
  setCurrentIndex,
  weight,
  onChangeWeight,
  selectedOption,
  setSelectedOption,
}) => {
  const width = Dimensions.get("window").width;

  return (
    <Carousel
      loop={false}
      width={width - 15}
      height={375}
      autoPlay={autoPlayMode}
      autoPlayReverse={autoPlayReverseMode}
      autoPlayInterval={100}
      enabled={false}
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
      onSnapToItem={(index) => {
        setCurrentIndex(index);
      }}
      renderItem={({ item, index }) => (
        <SetupCarouselSlide
          title={item.title}
          text={item.text}
          index={index}
          weight={weight}
          onChangeWeight={onChangeWeight}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      )}
    />
  );
};

export default SetupCarousel;
