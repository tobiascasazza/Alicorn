import { Text, ScrollView } from "react-native";
import React, { useState } from "react";
import WorkProjectCard from "../../../src/components/molecules/cards/WorkProjectCard";
import { Box, Container, Fab, Icon, NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Feature } from "../../../src/models/objects/FeatureModel";
import WorkProjectCards from "../../../data/WorkProjectCards.json";
import { Link } from "expo-router";
import { filterWorkProjectsByUserId } from "../../../utils/globalFunctions";
import { useAppSelector } from "../../../redux/reduxHooks";
import { WorkProject } from "../../../src/models/objects/WorkProject";

export default function workProject() {
  const activeUser = useAppSelector((state) => state.activeUser.currentUser);
  const [workProjectData, setWorkProjectData] = useState<WorkProject[]>(
    filterWorkProjectsByUserId(activeUser.id, WorkProjectCards)
  );
  return (
    <NativeBaseProvider>
      <ScrollView>
        {workProjectData.length > 0 ? (
          workProjectData.map((workProject) => {
            return (
              <React.Fragment key={workProject.id + Math.random()}>
                <Box
                  py={2}
                  alignItems={"center"}
                  key={workProject.id + Math.random()}
                >
                  <WorkProjectCard
                    id={workProject.id}
                    features={workProject.features}
                    title={workProject.title}
                    subtitle={workProject.subtitle}
                    description={workProject.description}
                    link={workProject.link}
                  />
                </Box>
              </React.Fragment>
            );
          })
        ) : (
          <Text>You don't have any Work Project yet</Text>
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
