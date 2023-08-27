import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

import useStoredUserData from "../hooks/useStoredUserData";

const DevMenu = ({ setCurrentWaterIntake }) => {
  const userData = useStoredUserData();

  return (
    <View style={{ position: "absolute", bottom: 100, zIndex: 10 }}>
      {userData ? (
        <View style={{ gap: 10 }}>
          {/* <Text>Daily water intake: {userData.dailyWaterIntake} liter</Text>
          <Text>Selected Option: {userData.selectedOption}</Text>
          <Text>Weight: {userData.weight}</Text>
          <Text>
            Setup progress:
            {userData.setupFinished ? " Finished" : " Not finished"}
          </Text> */}
          <TouchableOpacity onPress={() => setCurrentWaterIntake(0)}>
            <Text>Reset</Text>
          </TouchableOpacity>
          <Link href="/setup">Redo setup</Link>
        </View>
      ) : (
        <Text>No data stored yet.</Text>
      )}
    </View>
  );
};

export default DevMenu;
