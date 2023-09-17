import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Box, HStack, Text, VStack } from "native-base";
import StarsRatingView from "../../atoms/stars/StarsRatingView";
import FeaturesCard from "../../atoms/smallCards/FeaturesCard";
import { User } from "../../../models/objects/User";
import { Link } from "expo-router";

const StudentCard = (props: {
  student: User;
  profileLink?: string;
  searchCard?: boolean;
}) => {
  return (
    <View>
      <Box
        pl={2}
        pr={2}
        rounded={props.searchCard ? "0" : "lg"}
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
        <VStack pt="2" pb="2">
          <HStack justifyContent={"space-between"} pb="2" alignItems={"center"}>
            <Link href={props.profileLink ? props.profileLink : ""}>
              <Avatar
                size={"sm"}
                source={{
                  uri:
                    props.student.photo !== undefined &&
                    props.student.photo.length > 0
                      ? props.student.photo
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                }}
              />
              <Box alignSelf={"center"}>
                <Text fontSize={"md"} underline bold ml={"5px"}>
                  {props.student.name} {props.student.lastName}
                </Text>
              </Box>
            </Link>

            <HStack textAlign={"right"} justifyContent={"space-between"}>
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
