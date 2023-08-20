import React, { useCallback, useEffect, useState } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    PBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default Layout;
