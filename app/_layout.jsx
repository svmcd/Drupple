import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import WaterDrop from "../assets/svg/WaterDrop";
import Frame from "../assets/svg/Frame";

import styles from "../styles/global";

// SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    PBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.page}>
      <>
        <WaterDrop styles={styles.svgTopRight(0, -40, -30)} />
        <Frame styles={styles.svgTopLeft(0, -120, -170)} />
        <Slot />
      </>
    </View>

  );
};

export default Layout;
