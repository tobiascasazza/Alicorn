import { Text, ScrollView } from "react-native";
import React from "react";
import { Box, Container, Fab, Icon, NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Feature } from "../../../src/models/objects/FeatureModel";
import CompanyCards from "../../../exampleData/CompanyCards.json";
import { Link } from "expo-router";
import CompanyCard from "../../../src/components/molecules/cards/CompanyCard";

export default function workProyect() {
  const [companyData, setCompanyData] = React.useState(CompanyCards);
  return (
    <NativeBaseProvider>
      <ScrollView>
        {companyData.length > 0 ? (
          companyData.map((companyCard) => {
            return (
              <React.Fragment key={companyCard.id + Math.random()}>
                <Box
                  py={2}
                  alignItems={"center"}
                  key={companyCard.id + Math.random()}
                >
                  <CompanyCard
                    id={companyCard.id}
                    features={companyCard.features}
                    title={companyCard.title}
                    slogan={companyCard.slogan}
                    logo={companyCard.logo}
                    description={companyCard.description}
                    link={companyCard.link}
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
