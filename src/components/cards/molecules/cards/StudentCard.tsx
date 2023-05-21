import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, HStack, Text, VStack } from "native-base";
import StarsRatingView from "../../atoms/StarsRatingView";
import FeaturesCard from "../../atoms/cards/FeaturesCard";

const studentFeatures = [
  { title: "Carrer", description: "Software Engeneering" },
  { title: "Year", description: "2" },
  { title: "Link", description: "https://www.instagram.com/?hl=en" },
];

const StudentCard = () => {
  return (
    <View>
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
        <VStack pt="2" pb="2">
          <HStack justifyContent={"space-between"} pb="2">
            <Text fontSize={"md"} bold>
              Johnathan Shelby
            </Text>
            <HStack textAlign={"end"} justifyContent={"space-between"}>
              <StarsRatingView value={3.7} />
              <Text width="30px">({23})</Text>
            </HStack>
          </HStack>
          <FeaturesCard features={studentFeatures} />
        </VStack>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  filledStar: {
    borderColor: "transparent",
  },
});

export default StudentCard;
