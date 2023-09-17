import { StyleSheet, Text as TextNative, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { Box, Center, HStack, Heading, Stack, Text, VStack } from "native-base";
import { User } from "../../../models/objects/User";
import StarsRatingView from "../../atoms/stars/StarsRatingView";
import { Link, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { ResumeProject } from "../../../models/objects/ResumeProject";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const ResumeProjectCard = (props: ResumeProject) => {
  const projectColor = () => {
    switch (props.projectType) {
      case "Work Project":
        return "blue";
      case "Entrepreneurship":
        return "pink";
      default:
        break;
    }
  };

  return (
    <Box
      width="100%"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "white",
      }}
    >
      <VStack p="4" space={3} width={"100%"}>
        <VStack space={2}>
          <HStack justifyContent={"space-between"}>
            <Heading size="md">{props.projectName}</Heading>
            <Link href={props.projectDetailLink}>
              <Text
                color={
                  props.projectType === "Entrepreneurship"
                    ? "pink.500"
                    : "blue.500"
                }
                underline
              >
                view detail
              </Text>
            </Link>
          </HStack>

          <Text
            fontSize="xs"
            _light={{
              color: `${projectColor()}.500`,
            }}
            _dark={{
              color: `${projectColor()}.400`,
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            {props.projectDescription}
          </Text>
        </VStack>
        <VStack>
          {props.participants.map((participant) => {
            return (
              <HStack
                justifyContent={"space-between"}
                key={participant.name + Math.random()}
              >
                <Text>
                  {participant.name} {participant.lastName}
                </Text>
                <HStack>
                  <StarsRatingView value={participant.punctuation} />
                  <Text width="30px">({participant.votes})</Text>
                </HStack>
              </HStack>
            );
          })}
        </VStack>
      </VStack>
      <Box alignSelf={"flex-end"}>
        <Center
          bg={`${projectColor()}.500`}
          _dark={{
            bg: `${projectColor()}.400`,
          }}
          _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs",
          }}
          bottom="0"
          px="3"
          py="1.5"
          borderTopLeftRadius={5}
        >
          {props.projectType === "Entrepreneurship" ? (
            <MaterialCommunityIcons
              name="unicorn-variant"
              size={24}
              color="white"
            />
          ) : (
            <AntDesign name="profile" size={24} color="white" />
          )}
        </Center>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  filledStar: {
    borderColor: "transparent",
  },
});
export default ResumeProjectCard;
