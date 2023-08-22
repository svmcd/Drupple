import { View, Text } from "react-native";

import Setup from "../components/Setup";

import styles from "../styles/global";
import { COLORS } from "../constants/theme";

const Index = () => {
  return (
    <View style={styles.container}>
      <Setup />
    </View>
  );
};

export default Index;
