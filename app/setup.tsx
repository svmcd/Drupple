import { SafeAreaView, View, Text } from "react-native";

import { COLORS } from "../constants/theme";

const Setup = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
      <View>
        <Text>Hello setup</Text>
      </View>
    </SafeAreaView>
  );
};

export default Setup;
