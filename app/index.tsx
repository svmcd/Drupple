import { View } from "react-native";
import { useRootNavigationState, Redirect } from "expo-router";

const Index = () => {
  const rootNavigationState = useRootNavigationState();
  const setupCompleted = true;

  if (!rootNavigationState?.key) return null;

  return (
    <View>
      {setupCompleted ? <Redirect href="/home" /> : <Redirect href="/setup" />}
    </View>
  );
};

export default Index;
