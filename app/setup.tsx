import { SafeAreaView, View, Text } from "react-native";

import styles from "../styles/global";

import { COLORS } from "../constants/theme";

const Setup = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Text>Hello setup</Text>
      </View>
    </SafeAreaView>
  );
};

export default Setup;
