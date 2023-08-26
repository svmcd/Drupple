import { View, Text } from "react-native";
import { Link } from "expo-router";

import useStoredUserData from "../hooks/useStoredUserData";

const Home = () => {
  const userData = useStoredUserData();

  return (
    <View style={{ position: "absolute", top: 300 }}>
      <Text>Stored User Data:</Text>
      {userData ? (
        <View>
          <Text>Daily water intake: {userData.dailyWaterIntake} liter</Text>
          <Text>Selected Option: {userData.selectedOption}</Text>
          <Text>Weight: {userData.weight}</Text>
          <Text> {userData.setupFinished ? "finished" : "not finished"}</Text>
        </View>
      ) : (
        <Text>No data stored yet.</Text>
      )}
      <Link href="/setup">link</Link>
    </View>
  );
};

export default Home;
