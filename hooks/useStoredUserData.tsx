import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UserData = {
  dailyWaterIntake: number;
  selectedOption: string;
  weight: string;
};

function useStoredUserData() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("userData");
        if (jsonValue !== null) {
          const data = JSON.parse(jsonValue);
          setUserData(data);
        }
      } catch (e) {
        console.error("Error reading data:", e);
      }
    };

    getData();
  }, []);

  return userData;
}

export default useStoredUserData;
