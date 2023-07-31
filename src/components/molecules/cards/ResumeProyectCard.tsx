import { StyleSheet, Text as TextNative, Dimensions } from "react-native";
import React from "react";
import { Box, Center, HStack, Heading, Stack, Text } from "native-base";
import { User } from "../../../../models/objects/User";
import StarsRatingView from "../../atoms/stars/StarsRatingView";

type ResumeProyectCardProps = {
  proyectName: string;
  proyectDescription: string;
  participants: Array<User>;
  proyectType: string;
};

const ResumeProyectCard = (props: ResumeProyectCardProps) => {
  const { width } = Dimensions.get("window");

  const proyectColor = () => {
    switch (props.proyectType) {
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
      style={{ width: width * 0.9 }}
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
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {props.proyectName}
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: `${proyectColor()}.500`,
            }}
            _dark={{
              color: `${proyectColor()}.400`,
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            {props.proyectDescription}
          </Text>
        </Stack>
        <Box fontWeight="400">
          {props.participants.map((participant) => {
            return (
              <React.Fragment key={participant.name + Math.random()}>
                <HStack justifyContent={"space-between"}>
                  <TextNative>
                    {participant.name} {participant.lastName}
                  </TextNative>
                  <HStack textAlign={"end"} justifyContent={"space-between"}>
                    <StarsRatingView value={participant.punctuation} />
                    <Text width="30px">({participant.votes})</Text>
                  </HStack>
                </HStack>
              </React.Fragment>
            );
          })}
        </Box>
      </Stack>
      <Box alignSelf={"flex-end"}>
        <Center
          bg={`${proyectColor()}.500`}
          _dark={{
            bg: `${proyectColor()}.400`,
          }}
          _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs",
          }}
          bottom="0"
          px="3"
          py="1.5"
        >
          {props.proyectType}
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
export default ResumeProyectCard;
