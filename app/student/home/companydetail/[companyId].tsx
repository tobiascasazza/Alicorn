import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import WorkProjectPage from "../../../../src/pages/WorkProjectDetailsPage";
import { Container, Fab, NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import CompanyDetailsPage from "../../../../src/pages/CompanyDetailsPage";

const project = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Stack.Screen options={{ headerTitle: "Company" }} />
        <CompanyDetailsPage currentTab="home" />
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default project;
