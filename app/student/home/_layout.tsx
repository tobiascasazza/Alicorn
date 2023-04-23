import { View, Text } from "react-native";
import { Stack } from "expo-router";
import React from "react";

export default () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Alicorn",
            headerTitleAlign: "left",
          }}
        />
        <Stack.Screen name="notifications" options={{}} />
      </Stack>
      ;
    </>
  );
};
