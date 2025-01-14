import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {
            minHeight: 70,
            borderTopWidth: 0,
            borderTopColor: "#ffffff",
            paddingTop: 15,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => (
            <Octicons size={28} name="bell" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Octicons size={28} name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
