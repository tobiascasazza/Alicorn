import { View, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Stack, Tabs } from "expo-router";
import companies from "../../../data/CompanyCards.json";
import users from "../../../data/users.json";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import {
  Input,
  Icon,
  Box,
  Button,
  HStack,
  Center,
  Actionsheet,
  Text,
  Select,
  AlertDialog,
} from "native-base";
import ResumeProjectCard from "../../../src/components/molecules/cards/ResumeProjectCard";
import CompanyCard from "../../../src/components/molecules/cards/CompanyCard";
import StudentCard from "../../../src/components/molecules/cards/StudentCard";
import { useAppDispatch, useAppSelector } from "../../../redux/reduxHooks";
import { User } from "../../../src/models/objects/User";
import {
  filterUsersByUserSearch,
  getFeaturesValuesByUser,
} from "../../../utils/globalFunctions";
import { setUserSearch } from "../../../redux/searchEngine";

export default function search() {
  const dispatch = useAppDispatch();
  const activeUser = useAppSelector((state) => state.activeUser.currentUser);
  const userSearch = useAppSelector((state) => state.searchEngine.userSearch);
  const [resultUsers, setResultUsers] = useState<User[]>([]);
  const [searchProfilesProjects, setSearchProfilesProjects] = useState(false);
  const [filterSheetIsOpen, setFilterSheetIsOpen] = useState(false);
  const { width } = Dimensions.get("window");

  const cancelRef = useRef(null);

  const list = companies;
  const searchProfiles = () => {
    setSearchProfilesProjects(false);
  };

  const searchProjects = () => {
    setSearchProfilesProjects(true);
  };

  const openFilters = () => {
    setFilterSheetIsOpen(true);
  };

  const onCloseFilterSheet = () => {
    setFilterSheetIsOpen(false);
  };

  useEffect(() => {
    dispatch(
      setUserSearch({
        name: "",
        punctuation: [0, 0],
        features: [],
      })
    );
  }, []);

  useEffect(() => {
    setResultUsers(filterUsersByUserSearch(users, userSearch));
  }, [userSearch]);
  return (
    <View>
      <HStack>
        <HStack w={"90%"}>
          <Button
            w={"50%"}
            borderRadius={"0"}
            backgroundColor={searchProfilesProjects ? "blue.300" : "blue.500"}
            borderStyle={"solid"}
            onTouchEnd={() => searchProfiles()}
          >
            Profiles
          </Button>
          <Button
            w={"50%"}
            borderRadius={"0"}
            backgroundColor={searchProfilesProjects ? "blue.500" : "blue.300"}
            onTouchEnd={() => searchProjects()}
          >
            Projects
          </Button>
        </HStack>
        <Box
          backgroundColor={"white"}
          w={"10%"}
          onTouchEnd={() => openFilters()}
        >
          <Icon
            alignSelf={"center"}
            size="8"
            color="black"
            as={<AntDesign name="filter" size={24} color="black" />}
          />
        </Box>
      </HStack>
      <ScrollView>
        {searchProfilesProjects ? (
          <Box py={2} alignItems={"center"}>
            {list.length > 0 ? (
              list.map((company) => {
                return (
                  <React.Fragment key={company.id + Math.random()}>
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
              <Text>It doesn't have any project with these parameters</Text>
            )}
          </Box>
        ) : (
          <Box py={2} alignItems={"center"}>
            {resultUsers.length > 0 ? (
              resultUsers.map((user) => {
                return (
                  <React.Fragment key={user.id + Math.random()}>
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
              <Text>It doesn't have any users with these parameters</Text>
            )}
          </Box>
        )}
      </ScrollView>
      <Center>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={filterSheetIsOpen}
          onClose={() => onCloseFilterSheet}
        >
          <AlertDialog.Content>
            <Box w="100%" px={4} justifyContent="center">
              <Text
                fontSize="lg"
                fontWeight={"bold"}
                marginTop={"10px"}
                marginBottom={"10px"}
                _dark={{
                  color: "gray.300",
                }}
              >
                Profiles Filters
              </Text>
              <HStack justifyContent={"space-between"} marginBottom={"10px"}>
                <Text>Carrer</Text>
                <Box w={"70%"}>
                  <Select w={"100%"}>
                    {getFeaturesValuesByUser(users, "carrer").map(
                      (carrer: string, index: number) => {
                        return (
                          <Select.Item
                            label={carrer}
                            value={carrer}
                            key={carrer + index}
                          />
                        );
                      }
                    )}
                  </Select>
                </Box>
              </HStack>
              <HStack justifyContent={"space-between"} marginBottom={"10px"}>
                <Text>Year</Text>
                <Box w={"70%"}>
                  <Select w={"100%"}>
                    {getFeaturesValuesByUser(users, "year").map(
                      (carrer: string, index: number) => {
                        return (
                          <Select.Item
                            label={carrer}
                            value={carrer}
                            key={carrer + index}
                          />
                        );
                      }
                    )}
                  </Select>
                </Box>
              </HStack>
            </Box>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>
    </View>
  );
}
