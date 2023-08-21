import { View, Text } from "react-native";

import Slider from "../components/Slider";

import styles from "../styles/global";
import { COLORS } from "../constants/theme";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>Hello setup</Text>
      <Slider />
    </View>
  );
};

export default Index;
