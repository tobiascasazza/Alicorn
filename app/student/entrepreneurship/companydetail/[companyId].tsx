import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import CompanyDetailsPage from "../../../../src/pages/CompanyDetailsPage";
import { NativeBaseProvider } from "native-base";

const project = () => {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Stack.Screen options={{ headerTitle: "Company" }} />
        <CompanyDetailsPage currentTab="entrepreneurship" />
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default project;
