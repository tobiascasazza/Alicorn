import { View, Text, Button } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { Box, HStack, Icon, Input } from "native-base";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../../../redux/reduxHooks";
import { setCompanySearch, setUserSearch } from "../../../redux/searchEngine";

export default () => {
  const currentUserSearch = useAppSelector(
    (state) => state.searchEngine.userSearch
  );
  const currentCompanySearch = useAppSelector(
    (state) => state.searchEngine.companySearch
  );
  const dispatch = useAppDispatch();

  const changeName = (e: any) => {
    dispatch(setUserSearch({ ...currentUserSearch, name: e.nativeEvent.text }));
    dispatch(
      setCompanySearch({ ...currentCompanySearch, title: e.nativeEvent.text })
    );
  };

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
                    placeholder="Search for name"
                    variant="outline"
                    width="95%"
                    height={"10"}
                    borderRadius="10"
                    py="1"
                    px="2"
                    bgColor={"white"}
                    focusOutlineColor={"black"}
                    onChange={(e) => changeName(e)}
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
