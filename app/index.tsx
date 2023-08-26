import { View, Text } from "react-native";
import { useRootNavigationState, Redirect } from "expo-router";
import useStoredUserData from "../hooks/useStoredUserData";

const Index = () => {
  const userData = useStoredUserData();
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;

  if (!userData) {
    return (
      <Text style={{ position: "absolute", top: 200, left: 200 }}>
        Loading...
      </Text>
    );
  }

  return (
    <View>
      {userData.setupFinished ? (
        <Redirect href="/home" />
      ) : (
        <Redirect href="/setup" />
      )}
    </View>
  );
};

export default Index;
