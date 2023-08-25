import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import { SIZES, COLORS } from "../constants/theme";
import styles from "../styles/global";

const SetupCarouselSlide = ({
  title,
  text,
  index,
  weight,
  onChangeWeight,
  selectedOption,
  setSelectedOption,
}) => {
  const coloredPart = index === 0 ? title.slice(-8, -1) : title;
  const nonColoredPart = index === 0 ? title.slice(0, -8) : title;
  const nonColoredPart2 = index === 0 ? title.slice(18) : title;

  const WATER_PER_KG = 0.035;
  const activityMultipliers = {
    Sedentary: 1.0,
    "Lightly active": 1.11,
    "Moderately active": 1.24,
    Active: 1.35,
    "Very Active": 1.42,
  };

  const baseWaterIntake = weight * WATER_PER_KG;
  const adjustedWaterIntake =
    baseWaterIntake * activityMultipliers[selectedOption];
  const roundedWaterIntake = Math.round(adjustedWaterIntake * 10) / 10;

  return (
    <View
      style={{
        overflow: "hidden",
      }}
    >
      <View style={{ padding: SIZES.md, gap: 20 }}>
        <View>
          <Text style={[styles.title, { marginBottom: SIZES.xs }]}>
            {nonColoredPart}
            {index === 0 && (
              <>
                <Text style={styles.titleBlue}>{coloredPart}</Text>
                <Text>{nonColoredPart2}</Text>
              </>
            )}
          </Text>
          <Text style={styles.text}>{text}</Text>
        </View>
        {index === 1 && (
          <View
            style={{
              justifyContent: "center",
              gap: 25,
            }}
          >
            <View style={{ alignItems: "center", gap: 7 }}>
              <Text style={styles.text}>Weight</Text>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  backgroundColor: COLORS.grey,
                  borderRadius: 25,
                }}
              >
                <TextInput
                  style={styles.numberInput}
                  onChangeText={onChangeWeight}
                  value={weight}
                  maxLength={3}
                />
                <Text
                  style={[
                    styles.text,
                    {
                      color: COLORS.darkerGrey,
                      backgroundColor: COLORS.grey,
                      fontSize: SIZES.md,
                      alignSelf: "stretch",
                      paddingTop: 7,
                    },
                  ]}
                >
                  KG
                </Text>
              </View>
            </View>
            <View style={{ alignItems: "center", gap: 7 }}>
              <Text style={styles.text}>Physical activity</Text>
              <ScrollView
                style={{ flexDirection: "row", overflow: "visible" }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {[
                  "Sedentary",
                  "Lightly active",
                  "Moderately active",
                  "Active",
                  "Very Active",
                ].map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={[
                      styles.option,
                      selectedOption === option && {
                        backgroundColor: COLORS.primary,
                      },
                    ]}
                    onPress={() => setSelectedOption(option)}
                  >
                    <Text
                      style={[
                        selectedOption === option
                          ? styles.textWhite
                          : styles.text,
                      ]}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        )}
        {index === 2 && (
          <View
            style={{
              alignItems: "center",
              gap: 25,
            }}
          >
            {/* <Text style={styles.titleBlue}>{weight}</Text>
            <Text style={styles.titleBlue}>{selectedOption}</Text> */}
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                gap: -10,
              }}
            >
              <Text style={styles.titleBlueBig}>{roundedWaterIntake}</Text>
              <Text style={styles.textBlue}>liters/day</Text>
            </View>
            <View style={{ width: "100%" }}>
              <Text style={styles.text}>
                That's about {Math.round(roundedWaterIntake / 0.25)} glasses of
                water everyday.
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default SetupCarouselSlide;
