import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, HStack, Text, VStack } from "native-base";
import StarsRatingView from "../../atoms/stars/StarsRatingView";
import FeaturesCard from "../../atoms/smallCards/FeaturesCard";
import { User } from "../../../models/objects/User";

const StudentCard = (props: { student: User }) => {
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
              {props.student.name} {props.student.lastName}
            </Text>
            <HStack textAlign={"end"} justifyContent={"space-between"}>
              <StarsRatingView value={props.student.punctuation} />
              <Text width="30px">({props.student.votes})</Text>
            </HStack>
          </HStack>
          <FeaturesCard features={props.student.features} />
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
