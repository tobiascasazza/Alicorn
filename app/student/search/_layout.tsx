import { View, Text, Button } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { Box, HStack, Icon, Input } from "native-base";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

export default () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => {
              return (
                <HStack
                  alignItems={"center"}
                  paddingBottom={"3"}
                  backgroundColor={"white"}
                  justifyContent={"center"}
                >
                  <Input
                    mt={"12"}
                    alignSelf={"center"}
                    placeholder="Search"
                    variant="outline"
                    width="95%"
                    height={"10"}
                    borderRadius="10"
                    py="1"
                    px="2"
                    bgColor={"white"}
                    focusOutlineColor={"black"}
                    InputLeftElement={
                      <Icon
                        ml="2"
                        size="4"
                        color="gray.400"
                        as={<EvilIcons name="search" size={24} color="black" />}
                      />
                    }
                  />
                </HStack>
              );
            },
          }}
        />
      </Stack>
    </>
  );
};
