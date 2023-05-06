import { StyleSheet, Text as TextNative, Dimensions } from "react-native";
import React from "react";
import { Box, Center, HStack, Heading, Stack, Text } from "native-base";
import { User } from "../../../models/objects/User";
import { Rating, AirbnbRating } from "react-native-ratings";
import { transparentize } from "native-base/lib/typescript/theme/tools";
import FeaturesCard from "../atoms/cards/FeaturesCard";
import { Feature } from "../../../models/objects/Features";
import { AntDesign } from "@expo/vector-icons";
const WorkProyectCard = () => {
  const { width } = Dimensions.get("window");
  const features: Feature[] = [
    {
      title: "Materia",
      description: "Back-End 1",
    },
    {
      title: "Theme",
      description: "Arrays",
    },
    {
      title: "Participants",
      description: "4",
    },
    {
      title: "State",
      description: "open",
    },
    {
      title: "Start Date",
      description: "12/04/2023",
    },
    {
      title: "Time Line",
      description: "12/05/2023",
    },
  ];
  return (
    <Box
      style={{ width: width * 0.95 }}
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
        backgroundColor: "gray.50",
      }}
    >
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            Restaurant App
          </Heading>
          <Text
            fontSize="s"
            _light={{
              color: "grey",
            }}
            _dark={{
              color: "black",
            }}
            ml="-0.5"
            mt="-1"
            bold={true}
          >
            Build a restaurant app with C# .NET
          </Text>
          <HStack justifyContent={"space-between"}>
            <FeaturesCard features={features} />
            <Box style={{ width: width * 0.45 }} rounded="lg" overflow="hidden">
              <Box borderBottomColor={"grey"} borderBottomWidth={"1"}>
                <Text
                  fontSize="md"
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "black",
                  }}
                  ml="-0.5"
                  mt="1"
                  bold={true}
                  padding={2}
                >
                  Description
                </Text>
              </Box>

              <Text
                fontSize="xs"
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "black",
                }}
                ml="-0.5"
                padding={2}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus provident pariatur cum soluta commodi mollitia est
                quasi sed sit. Tempore pariatur nobis sit iste laboriosam vero
                eligendi molestiae temporibus unde!
              </Text>
            </Box>
          </HStack>
          <Box
            pl={2}
            pr={2}
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
              backgroundColor: "gray.50",
            }}
          >
            <HStack justifyContent={"space-between"}>
              <HStack flex={1}>
                <Text bold={true}>Link: </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  flex={1}
                  marginRight={2}
                >
                  <a
                    href="www.github.com/RestaurantApp"
                    style={{ color: "black" }}
                  >
                    www.github.com/RestaurantApp
                  </a>
                </Text>
              </HStack>
              <Box zIndex={99} flexShrink={1}>
                <AntDesign name="copy1" size={18} color="black" />
              </Box>
            </HStack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
});
export default WorkProyectCard;
