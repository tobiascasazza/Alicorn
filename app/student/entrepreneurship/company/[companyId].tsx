import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import CompanyDetailsPage from "../../../../src/pages/CompanyDetailsPage";

const proyect = () => {
  return (
    <ScrollView>
      <Stack.Screen options={{ headerTitle: "Company" }} />
      <CompanyDetailsPage currentTab="entrepreneurship" />
    </ScrollView>
  );
};

export default proyect;
