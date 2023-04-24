import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Box } from "native-base";
import Notification from "../components/cards/Notification";

export default function NotificationsPage() {
  return (
    <ScrollView>
      <Box textAlign={"center"}>
        {true === true ? (
          <Notification />
        ) : (
          <Text>You don't have any notification yet</Text>
        )}
      </Box>
    </ScrollView>
  );
}
