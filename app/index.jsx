import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl">Hi! Welcome to Aora! </Text>
      <StatusBar style="auto" />
      <Link href="Profile" style={{color: 'blue'}}>Go to Profile</Link>
    </View>
  );
};

export default Index;
