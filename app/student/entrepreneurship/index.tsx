import { Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import { Box, Container, Fab, NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Feature } from "../../../src/models/objects/FeatureModel";
import CompanyCards from "../../../data/CompanyCards.json";
import { Link } from "expo-router";
import CompanyCard from "../../../src/components/molecules/cards/CompanyCard";
import { useAppSelector } from "../../../redux/reduxHooks";
import { filterCompaniesByUserId } from "../../../utils/globalFunctions";

export default function entrepreneurship() {
  const { width } = Dimensions.get("window");
  const activeUser = useAppSelector((state) => state.activeUser.currentUser);
  const [companyData, setCompanyData] = React.useState(
    filterCompaniesByUserId(activeUser.id, CompanyCards)
  );
  return (
    <NativeBaseProvider>
      <ScrollView>
        {companyData.length > 0 ? (
          companyData.map((companyCard) => {
            return (
              <React.Fragment key={companyCard.id + Math.random()}>
                <Box
                  style={{ width: width * 0.95 }}
                  alignSelf={"center"}
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
                    punctuation={companyCard.punctuation}
                    description={companyCard.description}
                    link={companyCard.link}
                  />
                </Box>
              </React.Fragment>
            );
          })
        ) : (
          <Text>You don't have any Company yet</Text>
        )}
        <Container style={{ flex: 1 }}>
          <Fab
            position="absolute"
            bg="blue.500"
            icon={<Ionicons name="add" size={24} color="white" />}
          />
        </Container>
      </ScrollView>
    </NativeBaseProvider>
  );
}
