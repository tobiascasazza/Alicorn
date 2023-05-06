import { Text, ScrollView } from "react-native";
import React from "react";
import WorkProyectCard from "../../../src/components/cards/molecules/WorkProyectCard";
import { Box, Container, Fab, Icon, NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default function workProyect() {
  return (
    <NativeBaseProvider>
      <ScrollView>
        {true === true ? (
          <React.Fragment>
            <Box py={2} alignItems={"center"}>
              <WorkProyectCard />
            </Box>
            <Box py={2} alignItems={"center"}>
              <WorkProyectCard />
            </Box>
            <Box py={2} alignItems={"center"}>
              <WorkProyectCard />
            </Box>
            <Box py={2} alignItems={"center"}>
              <WorkProyectCard />
            </Box>
            <Box py={2} alignItems={"center"}>
              <WorkProyectCard />
            </Box>
            <Box py={2} alignItems={"center"}>
              <WorkProyectCard />
            </Box>
          </React.Fragment>
        ) : (
          <Text>You don't have any Work Proyect yet</Text>
        )}
        <Container style={{ flex: 1 }}>
          <Fab
            position="absolute"
            bg="blue.500"
            icon={<Ionicons name="ios-add" size={24} color="white" />}
          />
        </Container>
      </ScrollView>
    </NativeBaseProvider>
  );
}
