import { useState } from "react";
import { Dimensions, Text, View, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";

function Slider() {
  const [autoPlayMode, setAutoPlayMode] = useState(false);
  const [autoPlayReverseMode, setAutoPlayReverseMode] = useState(false);

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
    <View style={{ flex: 1 }}>
      <Carousel
        loop={false}
        width={width}
        height={width / 2}
        autoPlay={autoPlayMode}
        autoPlayReverse={autoPlayReverseMode}
        autoPlayInterval={100}
        data={[...new Array(20).keys()]}
        scrollAnimationDuration={500}
        // onSnapToItem={(index) => {}}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
          </View>
        )}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={handlePreviousPage}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextPage}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Slider;
