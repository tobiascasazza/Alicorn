import { Text, ScrollView } from "react-native";
import React from "react";
import { Box, Container, Fab, Icon, NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Feature } from "../../../src/models/objects/Feature";
import CompanyCards from "../../../exampleData/CompanyCards.json";
import { Link } from "expo-router";
import CompanyCard from "../../../src/components/molecules/cards/CompanyCard";

export default function workProyect() {
  const [companyData, setCompanyData] = React.useState(CompanyCards);
  return (
    <NativeBaseProvider>
      <ScrollView>
        {companyData.length > 0 ? (
          companyData.map((CompanyCards) => {
            return (
              <React.Fragment key={CompanyCards.id + Math.random()}>
                <Box
                  py={2}
                  alignItems={"center"}
                  key={CompanyCards.id + Math.random()}
                >
                  <CompanyCard
                    id={CompanyCards.id}
                    features={CompanyCards.features}
                    title={CompanyCards.title}
                    logo={CompanyCards.logo}
                    description={CompanyCards.description}
                    link={CompanyCards.link}
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
