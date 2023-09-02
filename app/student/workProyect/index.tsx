import { Text, ScrollView } from "react-native";
import React from "react";
import WorkProyectCard from "../../../src/components/molecules/cards/WorkProyectCard";
import { Box, Container, Fab, Icon, NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Feature } from "../../../src/models/objects/FeatureModel";
import WorkProyectCards from "../../../data/WorkProyectCards.json";
import { Link } from "expo-router";

export default function workProyect() {
  const [workProyectData, setWorkProyectData] =
    React.useState(WorkProyectCards);
  return (
    <NativeBaseProvider>
      <ScrollView>
        {workProyectData.length > 0 ? (
          workProyectData.map((workProyect) => {
            return (
              <React.Fragment key={workProyect.id + Math.random()}>
                <Box
                  py={2}
                  alignItems={"center"}
                  key={workProyect.id + Math.random()}
                >
                  <WorkProyectCard
                    id={workProyect.id}
                    features={workProyect.features}
                    title={workProyect.title}
                    subtitle={workProyect.subtitle}
                    description={workProyect.description}
                    link={workProyect.link}
                  />
                </Box>
              </React.Fragment>
            );
          })
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
