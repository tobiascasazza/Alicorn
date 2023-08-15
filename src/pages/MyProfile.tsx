import React from "react";
import { View, Dimensions } from "react-native";
import {
  Button,
  Icon,
  Card,
  HStack,
  VStack,
  Text,
  Avatar,
  Stack,
  Heading,
  ScrollView,
  Box,
} from "native-base";
import StarsRatingView from "../components/atoms/stars/StarsRatingView";

const MyProfile = () => {
  const { width } = Dimensions.get("window");
  return (
    <Stack width={width} p="4" space={3}>
      <HStack space={2}>
        <Avatar
          marginRight={0}
          w="20"
          h="20"
          source={{
            uri: "https://randomuser.me/api/portraits/men/2.jpg",
          }}
        />
        <VStack ml={2}>
          <HStack justifyContent={"space-between"}>
            <Heading size="md" ml="-1">
              <Text>Joe Evans</Text>
            </Heading>
          </HStack>
          <Text
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
            React Web Developer
          </Text>
        </VStack>
      </HStack>
      <Box backgroundColor={"white"} p="2" borderRadius={10}>
        <Text
          fontSize="md"
          _light={{
            color: "black",
          }}
          _dark={{
            color: "black",
          }}
          bold={true}
        >
          Resume
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
          elit id urna accumsan, vel cursus nunc suscipit.
        </Text>
      </Box>
      <Card>
        <Text>Location: New York, USA</Text>
      </Card>
      <Card>
        <Text>Followers: 200</Text>
      </Card>
      <Card>
        <Text>Following: 150</Text>
      </Card>
    </Stack>
  );
};

export default MyProfile;
