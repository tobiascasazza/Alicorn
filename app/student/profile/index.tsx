import { Text, ScrollView } from "react-native";
import React from "react";
import { Box, Container, Fab, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import CompanyCards from "../../../data/CompanyCards.json";
import CompanyCard from "../../../src/components/molecules/cards/CompanyCard";
import users from "../../../data/users.json";
import MyProfile from "../../../src/pages/Profile";
import { useAppSelector } from "../../../redux/reduxHooks";

export default function profile() {
  const activeUser = useAppSelector((state) => state.activeUser.currentUser);
  return (
    <ScrollView>
      <MyProfile student={activeUser} />
    </ScrollView>
  );
}
