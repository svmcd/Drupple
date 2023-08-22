import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import { SIZES, COLORS } from "../constants/theme";
import styles from "../styles/global";

const SetupCarouselSlide = ({ title, text, index }) => {
  const coloredPart = index === 0 ? title.slice(-8, -1) : title;
  const nonColoredPart = index === 0 ? title.slice(0, -8) : title;
  const nonColoredPart2 = index === 0 ? title.slice(18) : title;

  return (
    <View style={{ overflow: "hidden" }}>
      <View style={{ padding: SIZES.md }}>
        <Text style={[styles.title, { marginBottom: SIZES.xs }]}>
          {nonColoredPart}
          {index === 0 && (
            <>
              <Text style={styles.coloredDrupple}>{coloredPart}</Text>
              <Text>{nonColoredPart2}</Text>
            </>
          )}
        </Text>
        <Text style={styles.text}>{text}</Text>
        {index === 1 && (
          <View
            style={{
              height: "60%",
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
                <TextInput style={styles.numberInput} maxLength={3} />
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
                <TouchableOpacity style={styles.option}>
                  <Text style={styles.text}>Low</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                  <Text style={styles.text}>Moderate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                  <Text style={styles.text}>Active</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default SetupCarouselSlide;
