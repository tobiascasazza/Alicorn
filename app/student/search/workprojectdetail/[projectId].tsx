import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Container, Fab } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import WorkProjectDetailsPage from "../../../../src/pages/WorkProjectDetailsPage";

const project = () => {
  return (
    <ScrollView>
      <Stack.Screen options={{ headerTitle: "Work Project" }} />
      <WorkProjectDetailsPage currentTab="profile" />
    </ScrollView>
  );
};

export default project;
