import { View, Text, TouchableOpacity } from "react-native";

import { Image } from "expo-image";

import styles from "../styles/global";
const WaterOptions = ({
  title,
  amount,
  currentWaterIntake,
  setCurrentWaterIntake,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
          }}
        >
          <Image
            source="https://picsum.photos/seed/696/3000/2000"
            contentFit="cover"
            transition={1000}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "red",
            }}
          />
        </View>
        <View style={{ gap: 5 }}>
          <Text style={[styles.text]}>{title}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.textGrey]}>{amount}</Text>
            <Text style={[styles.textSmallGrey]}>ML</Text>
          </View>
        </View>
      </View>
      <View style={{ justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.buttonCtaSmall}
          onPress={() => setCurrentWaterIntake(currentWaterIntake + amount)}
        >
          <Text style={styles.textWhite}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WaterOptions;
