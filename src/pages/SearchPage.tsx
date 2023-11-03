import { View, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import companies from "../../data/CompanyCards.json";
import users from "../../data/users.json";
import { AntDesign } from "@expo/vector-icons";
import { Icon, Box, Button, HStack, Text } from "native-base";
import CompanyCard from "../../src/components/molecules/cards/CompanyCard";
import StudentCard from "../../src/components/molecules/cards/StudentCard";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { User } from "../../src/models/objects/User";
import {
  filterCompaniesByCompanySearch,
  filterUsersByUserSearch,
} from "../../utils/globalFunctions";
import ProfileFilterDialog from "../../src/components/molecules/dialogs/ProfileFilterDialog";
import { Company } from "../models/objects/Company";
import CompanyFilterDialog from "../components/molecules/dialogs/CompanyFilterDialog";

const SearchPage = () => {
  const activeUser = useAppSelector((state) => state.activeUser.currentUser);
  const userSearch = useAppSelector((state) => state.searchEngine.userSearch);
  const companySearch = useAppSelector(
    (state) => state.searchEngine.companySearch
  );
  const [resultUsers, setResultUsers] = useState<User[]>([]);
  const [resultCompanies, setResultCompanies] = useState<Company[]>([]);
  const [searchProfilesProjects, setSearchProfilesProjects] = useState(true);
  const [filterDialogIsOpen, setFilterDialogIsOpen] = useState(false);
  const { width } = Dimensions.get("window");

  const searchProfiles = () => {
    setSearchProfilesProjects(true);
  };

  const searchProjects = () => {
    setSearchProfilesProjects(false);
  };

  useEffect(() => {
    setResultUsers(filterUsersByUserSearch(users, userSearch));
  }, [userSearch]);

  useEffect(() => {
    setResultCompanies(
      filterCompaniesByCompanySearch(companies, companySearch)
    );
  }, [companySearch]);
  return (
    <View>
      <HStack>
        <HStack w={"90%"}>
          <Button
            w={"50%"}
            borderRadius={"0"}
            backgroundColor={!searchProfilesProjects ? "blue.300" : "blue.500"}
            borderStyle={"solid"}
            onTouchEnd={() => searchProfiles()}
          >
            Profiles
          </Button>
          <Button
            w={"50%"}
            borderRadius={"0"}
            backgroundColor={!searchProfilesProjects ? "blue.500" : "blue.300"}
            onTouchEnd={() => searchProjects()}
          >
            Projects
          </Button>
        </HStack>
        <Box
          backgroundColor={"white"}
          w={"10%"}
          onTouchEnd={() => setFilterDialogIsOpen(true)}
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
        {!searchProfilesProjects ? (
          <Box pt={2} pb={4} alignItems={"center"}>
            {resultCompanies.length > 0 ? (
              resultCompanies.map((company) => {
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
                        punctuation={company.punctuation}
                        searchCard={true}
                        key={company.title + Math.random()}
                        currentTab={"search"}
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
          <Box pt={2} pb={4} alignItems={"center"}>
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
      {searchProfilesProjects ? (
        <ProfileFilterDialog
          isOpen={filterDialogIsOpen}
          setIsOpen={setFilterDialogIsOpen}
        />
      ) : (
        <CompanyFilterDialog
          isOpen={filterDialogIsOpen}
          setIsOpen={setFilterDialogIsOpen}
        />
      )}
    </View>
  );
};

export default SearchPage;
