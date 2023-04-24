import { View, Text, ScrollView } from "react-native";
import React from "react";
import NotificationsPage from "../../../src/pages/NotificationsPage";
import { NativeBaseProvider } from "native-base";

const notifications = () => {
  return (
    <ScrollView>
      <NativeBaseProvider>
        <NotificationsPage />
      </NativeBaseProvider>
    </ScrollView>
  );
};

export default notifications;
