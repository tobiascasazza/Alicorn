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
            headerTitle: "My Work Proyects",
            headerTitleAlign: "left",
          }}
        />
      </Stack>
    </>
  );
};
