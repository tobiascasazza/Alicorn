import React, { useEffect, useState } from "react";
import { View, Dimensions } from "react-native";
import {
  Button,
  Icon,
  Card,
  HStack,
  VStack,
  Text,
  Avatar,
  Stack,
  Heading,
  ScrollView,
  Box,
  Link,
} from "native-base";
import StarsRatingView from "../components/atoms/stars/StarsRatingView";
import CardPunctuationList from "../components/atoms/lists/CardPunctuationList";
import CardPunctuationListView from "../components/atoms/lists/CardPunctuationListView";
import AlicornCollapsible from "../components/molecules/collapsible/AlicornCollapsible";
import ProjectCards from "../../data/projectsExample.json";
import ResumeProjectCard from "../components/molecules/cards/ResumeProjectCard";
import { Feature } from "../models/objects/FeatureModel";
import FeaturesCard from "../components/atoms/smallCards/FeaturesCard";
import ContactCard from "../components/atoms/smallCards/ContactCard";
import opinions from "../../data/opinions.json";
import SeePunctuationDialog from "../components/molecules/dialogs/SeePunctuationsDialog";
import { User } from "../models/objects/User";
import { Opinion } from "../models/objects/Opinion";
import {
  filterCompaniesByUserId,
  filterResumeProjectsByUserId,
} from "../../utils/globalFunctions";

interface myProfileProps {
  student: User;
  currentTab?: string;
}

const Profile = (props: myProfileProps) => {
  const { width } = Dimensions.get("window");
  const [companyData, setCompanyData] = useState(
    filterResumeProjectsByUserId(
      props.student.id,
      ProjectCards.filter(
        (project) => project.projectType === "Entrepreneurship"
      )
    )
  );
  const [workProjectsData, setWorkProjectsData] = useState(
    filterResumeProjectsByUserId(
      props.student.id,
      ProjectCards.filter((project) => project.projectType === "Work Project")
    )
  );
  const [seePunctuationOpen, setSeePunctuationOpen] = useState(false);
  const [studentOpinions, setStudentOpinions] = useState<Opinion[]>([]);

  const [cardsPunctuationList, setCardsPunctuationList] = useState<
    PunctuationCardData[]
  >([
    { id: 1, title: "Good Partner", type: "good", number: 0 },
    { id: 2, title: "Attentive", type: "good", number: 0 },
    { id: 4, title: "Moody", type: "bad", number: 0 },
    { id: 3, title: "Responsible", type: "good", number: 0 },
    { id: 5, title: "Irresponsible", type: "bad", number: 0 },
    { id: 6, title: "Superb", type: "bad", number: 0 },
  ]);

  useEffect(() => {
    setCardsPunctuationList(
      cardsPunctuationList.map((card) => {
        const opinionsFiltered = studentOpinions.filter((opinion) =>
          opinion.punctuationCards.includes(card.title)
        );
        card.number = opinionsFiltered.length;
        return card;
      })
    );
  }, [studentOpinions]);

  useEffect(() => {
    setStudentOpinions(
      opinions.filter((opinion) => opinion.userId === props.student.id)
    );
  }, []);

  return (
    <Stack width={width} p="4" space={3}>
      <HStack space={2}>
        <Avatar
          marginRight={0}
          w="20"
          h="20"
          source={{
            uri: props.student.photo,
          }}
        />
        <VStack ml={2}>
          <HStack justifyContent={"space-between"}>
            <Heading size="md" ml="-1">
              <Text>
                {props.student.name} {props.student.lastName}
              </Text>
            </Heading>
          </HStack>
          <Text
            _light={{
              color: "grey",
            }}
            _dark={{
              color: "black",
            }}
            ml="-0.5"
            mt="-1"
            bold={true}
          >
            {props.student.title}
          </Text>
        </VStack>
      </HStack>
      <Box
        backgroundColor={"white"}
        borderColor="coolGray.200"
        borderWidth="1"
        p="2"
        borderRadius={10}
      >
        <ContactCard
          features={props.student.contactData ? props.student.contactData : []}
          myContactData={true}
        />
      </Box>
      <Box
        backgroundColor={"white"}
        borderColor="coolGray.200"
        borderWidth="1"
        p="2"
        borderRadius={10}
      >
        <Text
          fontSize="md"
          _light={{
            color: "black",
          }}
          _dark={{
            color: "black",
          }}
          bold={true}
        >
          Resume
        </Text>
        <Text>{props.student.resume}</Text>
      </Box>
      <Box
        backgroundColor={"white"}
        borderColor="coolGray.200"
        borderWidth="1"
        p="2"
        borderRadius={10}
      >
        <Text
          fontSize="md"
          _light={{
            color: "black",
          }}
          _dark={{
            color: "black",
          }}
          bold={true}
        >
          Features
        </Text>
        <FeaturesCard features={props.student.features} />
      </Box>
      <Box
        backgroundColor={"white"}
        borderColor="coolGray.200"
        borderWidth="1"
        p="2"
        borderRadius={10}
      >
        <HStack justifyContent={"space-between"}>
          <HStack alignSelf={"center"}>
            <Text
              fontSize="md"
              mr={1}
              _light={{
                color: "black",
              }}
              _dark={{
                color: "black",
              }}
              bold={true}
              underline
              onPress={() => {
                setSeePunctuationOpen(true);
              }}
            >
              Opinions
            </Text>
            <HStack alignSelf={"center"}>
              <StarsRatingView value={props.student.punctuation} />
              <Text fontWeight={"bold"} ml={0.5}>
                {props.student.punctuation} Stars
              </Text>
            </HStack>
          </HStack>
        </HStack>
        <CardPunctuationListView cards={cardsPunctuationList} />
      </Box>
      <AlicornCollapsible title={"Entrepreneurships"}>
        <Box py={2} alignItems={"center"}>
          {companyData.length > 0 ? (
            companyData.map((project) => {
              return (
                <React.Fragment key={project.projectName + Math.random()}>
                  <Box my={"2"} width={"100%"}>
                    <ResumeProjectCard
                      id={project.id}
                      projectDetailLink={`student/${
                        props.currentTab ? props.currentTab : "profile"
                      }/companydetail/${project.id}`}
                      projectName={project.projectName}
                      projectDescription={project.projectDescription}
                      participants={project.participants}
                      projectType={project.projectType}
                      key={project.projectName + Math.random()}
                    />
                  </Box>
                </React.Fragment>
              );
            })
          ) : (
            <Text>There is no company yet</Text>
          )}
        </Box>
      </AlicornCollapsible>
      <AlicornCollapsible title={"Work Projects History"}>
        <Box py={2} alignItems={"center"}>
          {workProjectsData.length > 0 ? (
            workProjectsData.map((project) => {
              return (
                <React.Fragment key={project.projectName + Math.random()}>
                  <Box my={"2"} width={"100%"}>
                    <ResumeProjectCard
                      id={project.id}
                      projectDetailLink={`student/${
                        props.currentTab ? props.currentTab : "profile"
                      }/workprojectdetail/${project.id}`}
                      projectName={project.projectName}
                      projectDescription={project.projectDescription}
                      participants={project.participants}
                      projectType={project.projectType}
                      key={project.projectName + Math.random()}
                    />
                  </Box>
                </React.Fragment>
              );
            })
          ) : (
            <Text>There is no work roject yet</Text>
          )}
        </Box>
      </AlicornCollapsible>
      <SeePunctuationDialog
        isOpen={seePunctuationOpen}
        setIsOpen={setSeePunctuationOpen}
        opinions={studentOpinions}
      />
    </Stack>
  );
};

export default Profile;
