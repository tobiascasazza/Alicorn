import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import WorkProyectPage from "../../../../src/pages/WorkProyectPage";
import { Container, Fab, NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const proyect = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Stack.Screen options={{ headerTitle: "Work Proyect" }} />
        <WorkProyectPage />
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default proyect;
