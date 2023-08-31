import { Text, ScrollView } from "react-native";
import React from "react";
import { Box, Container, Fab, Icon, NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import CompanyCards from "../../../data/CompanyCards.json";
import CompanyCard from "../../../src/components/molecules/cards/CompanyCard";
import users from "../../../data/users.json";
import MyProfile from "../../../src/pages/Profile";

export default function profile() {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <MyProfile student={users[0]} />
      </ScrollView>
    </NativeBaseProvider>
  );
}
