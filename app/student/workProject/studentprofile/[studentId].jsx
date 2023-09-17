import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { HStack, Heading, NativeBaseProvider, Spinner } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import WorkProjectDetailsPage from "../../../../src/pages/WorkProjectDetailsPage";
import users from "../../../../data/users.json";
import { useRoute } from "@react-navigation/native";
import MyProfile from "../../../../src/pages/Profile";
import Profile from "../../../../src/pages/Profile";

const studentProfile = () => {
  const route = useRoute();
  const [allUsers, setAllUsers] = useState(users);
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    setUserProfile(
      allUsers.filter(
        (user) => user.id === Number.parseInt(route.params.studentId)
      )[0]
    );
  }, []);
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Stack.Screen options={{ headerTitle: "Profile" }} />
        {userProfile ? (
          <Profile student={userProfile} currentTab="workProject" />
        ) : (
          <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" color="blue.500" />
            <Heading color="blue.500" fontSize="md">
              Loading
            </Heading>
          </HStack>
        )}
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default studentProfile;
