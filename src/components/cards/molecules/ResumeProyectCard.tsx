import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { Box, Center, HStack, Heading, Stack, Text } from "native-base";
type Participants = {
  name: string;
  punctuation: number;
};

type ResumeProyectCardProps = {
  proyectName: string;
  proyectDescription: string;
  participants: Array<Participants>;
  proyectType: string;
};

const ResumeProyectCard = (props: ResumeProyectCardProps) => {
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
    <Box>
      <Box
        width={"100%"}
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
          <Text fontWeight="400">
            {props.participants.map((participant) => {
              return `${participant.name} (${participant.punctuation}), `;
            })}
          </Text>
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
export default ResumeProyectCard;
