import {
  StyleSheet,
  Text as TextNative,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { Box, Flex, HStack, Input, SimpleGrid, Text } from "native-base";
import { Feature } from "../../../models/objects/FeatureModel";

type FeaturesCardProps = {
  features: Feature[];
  edit?: boolean;
};

const FeaturesCard = (props: FeaturesCardProps) => {
  const { width } = Dimensions.get("window");

  return (
    <Box rounded="lg" overflow="hidden">
      {props.features &&
        props.features.map((feature) => {
          return (
            <HStack
              justifyContent={"space-between"}
              pt={2}
              key={feature.title + Math.random()}
            >
              <Text
                w={"35%"}
                alignSelf="center"
                bold={true}
                color={
                  feature.title === "Subject"
                    ? "blue.500"
                    : feature.title === "Industry"
                    ? "pink.500"
                    : feature.description === "Finished"
                    ? "green.500"
                    : "black"
                }
                fontSize={"xs"}
              >
                {feature.title}:
              </Text>
              {feature.editable && props.edit ? (
                <Input
                  multiline={true}
                  defaultValue={feature.description}
                  w={"60%"}
                  m="1"
                  fontSize="xs"
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "black",
                  }}
                  backgroundColor={"blue"}
                />
              ) : (
                <Text
                  color={
                    feature.title === "Subject"
                      ? "blue.500"
                      : feature.title === "Industry"
                      ? "pink.500"
                      : feature.description === "Finished"
                      ? "green.500"
                      : "black"
                  }
                  fontSize={"xs"}
                  pl={1}
                  textAlign={"right"}
                >
                  {feature.description}
                </Text>
              )}
            </HStack>
          );
        })}
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
export default FeaturesCard;
