import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const profile = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>profile</Text>
      <Button onPress={() => router.back()} title="Go Back" />
    </View>
  );
};

export default profile;
