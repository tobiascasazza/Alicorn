import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Container, Fab } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import WorkProyectDetailsPage from "../../../../src/pages/WorkProyectDetailsPage";

const proyect = () => {
  return (
    <ScrollView>
      <Stack.Screen options={{ headerTitle: "Work Proyect" }} />
      <WorkProyectDetailsPage currentTab="profile" />
    </ScrollView>
  );
};

export default proyect;
