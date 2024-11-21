import { StyleSheet, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={ {headerShown: false}} />
      </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
