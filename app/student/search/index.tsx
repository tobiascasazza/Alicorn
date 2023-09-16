import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Stack, Tabs } from "expo-router";
import companies from "../../../data/CompanyCards.json";
import users from "../../../data/users.json";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { Input, Icon, Box, Button, HStack } from "native-base";
import ResumeProyectCard from "../../../src/components/molecules/cards/ResumeProyectCard";
import CompanyCard from "../../../src/components/molecules/cards/CompanyCard";
import StudentCard from "../../../src/components/molecules/cards/StudentCard";
import { useAppSelector } from "../../../redux/reduxHooks";

export default function search() {
  const [searchProfilesProyects, setSearchProfilesProyects] = useState(false);
  const activeUser = useAppSelector((state) => state.activeUser.currentUser);
  const { width } = Dimensions.get("window");
  const list = companies;
  const searchProfiles = () => {
    setSearchProfilesProyects(false);
  };

  const searchProyects = () => {
    setSearchProfilesProyects(true);
  };

  return (
    <View>
      <HStack>
        <HStack w={"90%"}>
          <Button
            w={"50%"}
            borderRadius={"0"}
            backgroundColor={searchProfilesProyects ? "blue.300" : "blue.500"}
            borderStyle={"solid"}
            onTouchEnd={() => searchProfiles()}
          >
            Profiles
          </Button>
          <Button
            w={"50%"}
            borderRadius={"0"}
            backgroundColor={searchProfilesProyects ? "blue.500" : "blue.300"}
            onTouchEnd={() => searchProyects()}
          >
            Proyects
          </Button>
        </HStack>
        <Box backgroundColor={"white"} w={"10%"}>
          <Icon
            alignSelf={"center"}
            size="8"
            color="black"
            as={<AntDesign name="filter" size={24} color="black" />}
          />
        </Box>
      </HStack>
      <ScrollView>
        {searchProfilesProyects ? (
          <Box py={2} alignItems={"center"}>
            {list.length > 0 ? (
              list.map((company) => {
                return (
                  <React.Fragment key={company.title + Math.random()}>
                    <Box width={width}>
                      <CompanyCard
                        link={`student/home/companydetail/${company.id}`}
                        title={company.title}
                        description={company.description}
                        features={company.features}
                        id={company.id}
                        logo={company.logo}
                        slogan={company.slogan}
                        searchCard={true}
                        key={company.title + Math.random()}
                      />
                    </Box>
                  </React.Fragment>
                );
              })
            ) : (
              <Text>It doesn't have any proyect with these parameters</Text>
            )}
          </Box>
        ) : (
          <Box py={2} alignItems={"center"}>
            {users.length > 0 ? (
              users.map((user) => {
                return (
                  <React.Fragment key={user.title + Math.random()}>
                    <Box width={width}>
                      <StudentCard
                        student={user}
                        searchCard={true}
                        profileLink={
                          activeUser.id !== user.id
                            ? `student/search/studentprofile/${user.id}`
                            : "student/profile"
                        }
                      />
                    </Box>
                  </React.Fragment>
                );
              })
            ) : (
              <Text>It doesn't have any proyect with these parameters</Text>
            )}
          </Box>
        )}
      </ScrollView>
    </View>
  );
}
