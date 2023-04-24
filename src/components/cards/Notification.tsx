import { View } from "react-native";
import React from "react";
import {
  Avatar,
  Box,
  HStack,
  Pressable,
  VStack,
  Text,
  Spacer,
  Button,
} from "native-base";

const Notification = () => {
  return (
    <View>
      <Box
        _dark={{
          bg: "coolGray.800",
        }}
        _light={{
          bg: "white",
        }}
      >
        <Box pl="4" pr="4" py="2">
          <HStack display={"contents"}>
            <HStack>
              <Avatar
                size="48px"
                source={{
                  uri: "data:image/jpeg;base64,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",
                }}
              />
              <VStack
                pl="2"
                width={true === true ? "60%" : "70%"}
                textAlign={"left"}
              >
                <Box alignSelf={"left"}>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {"Tobias Casazza te ha enviado una solicitud de proyecto"}
                  </Text>
                </Box>
              </VStack>
              {true === true ? (
                <HStack>
                  <Button size={"xs"} colorScheme={"blue"} height={"30px"}>
                    Acept
                  </Button>
                  <Button
                    ml={1}
                    size={"xs"}
                    colorScheme={"blue"}
                    variant={"outline"}
                    height={"30px"}
                  >
                    Cancel
                  </Button>
                </HStack>
              ) : (
                ""
              )}
            </HStack>
          </HStack>
          <Text
            fontSize="xs"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            alignSelf="flex-end"
          >
            {"18min"}
          </Text>
        </Box>
      </Box>
    </View>
  );
};

export default Notification;
