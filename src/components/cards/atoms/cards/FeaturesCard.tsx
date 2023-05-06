import { StyleSheet, Text as TextNative, Dimensions } from "react-native";
import React from "react";
import { Box, HStack, Text } from "native-base";
import { Feature } from "../../../../models/objects/Features";

type FeaturesCardProps = {
  features: Feature[];
};

const FeaturesCard = (props: FeaturesCardProps) => {
  const { width } = Dimensions.get("window");

  return (
    <Box style={{ width: width * 0.35 }} rounded="lg" overflow="hidden">
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
          Features
        </Text>
      </Box>

      {props.features.map((feature) => {
        return (
          <HStack justifyContent={"space-between"} pl={2} pr={2} pt={2}>
            <Text
              bold={true}
              color={feature.title === "Materia" ? "blue.500" : "black"}
              fontSize={"xs"}
            >
              {feature.title}:
            </Text>
            <Text
              color={feature.title === "Materia" ? "blue.500" : "black"}
              fontSize={"xs"}
            >
              {feature.description}
            </Text>
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
