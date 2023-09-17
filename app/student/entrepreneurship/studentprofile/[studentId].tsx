import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { HStack, Heading, NativeBaseProvider, Spinner } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import WorkProjectDetailsPage from "../../../../src/pages/WorkProjectDetailsPage";
import users from "../../../../data/users.json";
import { RouteProp, useRoute } from "@react-navigation/native";
import MyProfile from "../../../../src/pages/Profile";
import Profile from "../../../../src/pages/Profile";
import { User } from "../../../../src/models/objects/User";

type StudentRouteProp = RouteProp<
  { Student: { studentId: string } },
  "Student"
>;

const studentProfile = () => {
  const route = useRoute<StudentRouteProp>();
  const [allUsers, setAllUsers] = useState(users);
  const [userProfile, setUserProfile] = useState<User>();

  useEffect(() => {
    const studentId = route.params?.studentId;
    if (studentId !== undefined) {
      setUserProfile(
        allUsers.filter((user) => user.id === Number.parseInt(studentId))[0]
      );
    }
  }, [allUsers, route.params?.studentId]);
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Stack.Screen options={{ headerTitle: "Profile" }} />
        {userProfile ? (
          <Profile student={userProfile} currentTab="entrepreneurship" />
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
