import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Stack, Tabs } from "expo-router";
import { EvilIcons } from "@expo/vector-icons";
import { Input, Icon, Box } from "native-base";

export default function search() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Tabs.Screen
        options={{
          header: () => {
            return (
              <Box
                alignItems={"center"}
                paddingTop={"3"}
                paddingBottom={"3"}
                backgroundColor={"white"}
              >
                <Input
                  placeholder="Search"
                  variant="filled"
                  width="95%"
                  height={"10"}
                  borderRadius="10"
                  py="1"
                  px="2"
                  InputLeftElement={
                    <Icon
                      ml="2"
                      size="4"
                      color="gray.400"
                      as={<EvilIcons name="search" size={24} color="black" />}
                    />
                  }
                />
              </Box>
            );
          },
        }}
      />

      <Text>search</Text>
    </ScrollView>
  );
}
