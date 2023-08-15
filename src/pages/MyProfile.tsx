import React, { useState } from "react";
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
import ProyectCards from "../../data/proyectsExample.json";
import ResumeProyectCard from "../components/molecules/cards/ResumeProyectCard";

const MyProfile = () => {
  const { width } = Dimensions.get("window");
  const [companyData, setCompanyData] = useState(
    ProyectCards.filter((proyect) => proyect.proyectType === "Entrepreneurship")
  );
  const [workProyectsData, setWorkProyectsData] = useState(
    ProyectCards.filter((proyect) => proyect.proyectType === "Work Project")
  );

  const cardsPunctuationList: PunctuationCardData[] = [
    { id: 1, title: "Good Partner", type: "good", number: 3 },
    { id: 2, title: "Attentive", type: "good", number: 6 },
    { id: 3, title: "Responsible", type: "good", number: 4 },
    { id: 4, title: "Moody", type: "bad", number: 1 },
  ];
  return (
    <Stack width={width} p="4" space={3}>
      <HStack space={2}>
        <Avatar
          marginRight={0}
          w="20"
          h="20"
          source={{
            uri: "https://randomuser.me/api/portraits/men/2.jpg",
          }}
        />
        <VStack ml={2}>
          <HStack justifyContent={"space-between"}>
            <Heading size="md" ml="-1">
              <Text>Joe Evans</Text>
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
            React Web Developer
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
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
          elit id urna accumsan, vel cursus nunc suscipit.
        </Text>
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
            >
              Opinions
            </Text>
            <HStack alignSelf={"center"}>
              <StarsRatingView value={4.6} />
              <Text fontWeight={"bold"} ml={0.5}>
                {4.6} Stars
              </Text>
            </HStack>
          </HStack>
          <HStack alignSelf={"center"}>
            <Text color="blue.500" underline>
              view detail
            </Text>
          </HStack>
        </HStack>
        <CardPunctuationListView cards={cardsPunctuationList} />
      </Box>
      <AlicornCollapsible title={"Entrepreneurships"}>
        <Box py={2} alignItems={"center"}>
          {companyData.length > 0 ? (
            companyData.map((proyect) => {
              return (
                <React.Fragment key={proyect.proyectName + Math.random()}>
                  <Box my={"2"} width={"100%"}>
                    <ResumeProyectCard
                      proyectName={proyect.proyectName}
                      proyectDescription={proyect.proyectDescription}
                      participants={proyect.participants}
                      proyectType={proyect.proyectType}
                      key={proyect.proyectName + Math.random()}
                    />
                  </Box>
                </React.Fragment>
              );
            })
          ) : (
            <Text>There is no project yet</Text>
          )}
        </Box>
      </AlicornCollapsible>
      <AlicornCollapsible title={"Work Proyects History"}>
        <Box py={2} alignItems={"center"}>
          {workProyectsData.length > 0 ? (
            workProyectsData.map((proyect) => {
              return (
                <React.Fragment key={proyect.proyectName + Math.random()}>
                  <Box my={"2"} width={"100%"}>
                    <ResumeProyectCard
                      proyectName={proyect.proyectName}
                      proyectDescription={proyect.proyectDescription}
                      participants={proyect.participants}
                      proyectType={proyect.proyectType}
                      key={proyect.proyectName + Math.random()}
                    />
                  </Box>
                </React.Fragment>
              );
            })
          ) : (
            <Text>There is no project yet</Text>
          )}
        </Box>
      </AlicornCollapsible>
    </Stack>
  );
};

export default MyProfile;
