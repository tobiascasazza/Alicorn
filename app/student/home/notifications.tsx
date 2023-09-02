import { View, Text, ScrollView } from "react-native";
import React from "react";
import NotificationsPage from "../../../src/pages/NotificationsPage";

const notifications = () => {
  return (
    <ScrollView>
      <NotificationsPage />
    </ScrollView>
  );
};

export default notifications;
