import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  HStack,
  Heading,
  Stack,
  Text,
  useClipboard,
  VStack,
  Container,
  Fab,
  TextArea,
  Input,
  Button,
  Icon,
  Spinner,
} from "native-base";
import { ALERT_TYPE, Dialog, Toast } from "react-native-alert-notification";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import FeaturesCard from "../components/atoms/smallCards/FeaturesCard";
import StudentCard from "../components/molecules/cards/StudentCard";
import { WorkProyect } from "../models/objects/WorkProyect";
import { Feature } from "../models/objects/FeatureModel";
import users from "../../exampleData/users.json";
import { User } from "../models/objects/User";
import ConfirmWorkProyectDialogProps from "../components/molecules/dialogs/ConfirmDialog";
import ConfirmDialog from "../components/molecules/dialogs/ConfirmDialog";
import AddPunctuationDialog from "../components/molecules/dialogs/AddPunctuationDialog";
import WorkProyectData from "../../exampleData/WorkProyectCards.json";
import { RouteProp, useRoute } from "@react-navigation/native";

type WorkProyectPageRouteParamList = {
  WorkProyectPage: {
    proyectId: number;
  };
};

const WorkProyectPage = () => {
  const { width } = Dimensions.get("window");
  const { onCopy } = useClipboard();
  const route =
    useRoute<RouteProp<WorkProyectPageRouteParamList, "WorkProyectPage">>();
  const [fadeAnim] = React.useState(new Animated.Value(0));
  const [editMode, setEditMode] = useState(false);
  const [isFinishDialogOpen, setIsFinishDialogOpen] = useState(false);
  const [usersProtyect, setUsersProtyect] = useState<User[]>(users);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentWorkProyect, setCurrentWorkProyect] = useState<WorkProyect>({
    id: 1,
    title: "",
    subtitle: "",
    description: "",
    features: [],
    students: [],
    link: "",
  });
  const [professorMail, setProfessorMail] = useState();
  const [punctuationCard, setPunctuationCard] = useState<boolean>(false);

  const animatedStyle = {
    opacity: fadeAnim,
  };

  const handleCopyLink = () => {
    onCopy(currentWorkProyect.link ? currentWorkProyect.link : "");
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: "Success",
      textBody: "The link has was copied",
      autoClose: 1000,
    });
  };

  const changePageMode = () => {
    setEditMode(!editMode);
  };

  const dialogFinishProyect = () => {
    setIsFinishDialogOpen(true);
  };

  const finishProyect = () => {
    setIsFinishDialogOpen(false);
    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: "Success",
      textBody: "Congrats! Your proyecs was sended",
      button: "close",
    });
    setPunctuationCard(true);
  };

  useEffect(() => {
    console.log(route.params?.proyectId);
    const newCurrentWorkProyect = WorkProyectData.filter(
      (proyect) => proyect.id == route.params?.proyectId
    )[0];
    setCurrentWorkProyect(newCurrentWorkProyect);
  }, []);

  useEffect(() => {
    currentWorkProyect.title != "" ? setIsLoading(false) : setIsLoading(true);
  }, [currentWorkProyect]);
  return (
    <ScrollView>
      {isLoading ? (
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" color="blue.500" />
          <Heading color="blue.500" fontSize="md">
            Loading
          </Heading>
        </HStack>
      ) : (
        <>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <HStack justifyContent={"space-between"}>
                <Heading size="md" ml="-1">
                  <Text>{currentWorkProyect.title}</Text>
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
                {currentWorkProyect.subtitle}
              </Text>
              <HStack justifyContent={"space-between"}>
                <VStack>
                  <Box
                    borderBottomColor={"grey"}
                    borderBottomWidth={"1"}
                    style={{ width: width * 0.9 }}
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
                  </Box>
                  <FeaturesCard
                    features={
                      currentWorkProyect.features
                        ? currentWorkProyect.features
                        : []
                    }
                    edit={editMode}
                  />
                </VStack>
              </HStack>
              <Box
                style={{ width: width * 0.9 }}
                rounded="lg"
                overflow="hidden"
              >
                <Box borderBottomColor={"grey"} borderBottomWidth={"1"}>
                  <Text
                    fontSize="md"
                    _light={{
                      color: "black",
                    }}
                    _dark={{
                      color: "black",
                    }}
                    ml="-0.5"
                    mt="1"
                    bold={true}
                    pl={1}
                  >
                    Description
                  </Text>
                </Box>
                {!editMode ? (
                  <Text
                    fontSize="xs"
                    _light={{
                      color: "black",
                    }}
                    _dark={{
                      color: "black",
                    }}
                    ml="-0.5"
                    padding={2}
                  >
                    {currentWorkProyect.description}
                  </Text>
                ) : (
                  <Input
                    multiline={true}
                    m="1"
                    fontSize="xs"
                    _light={{
                      color: "black",
                    }}
                    _dark={{
                      color: "black",
                    }}
                    backgroundColor={"blue"}
                  >
                    {currentWorkProyect.description}
                  </Input>
                )}
              </Box>
              <Box
                pl={2}
                pr={2}
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}
              >
                {!editMode ? (
                  <HStack justifyContent={"space-between"}>
                    <HStack flex={1}>
                      <Text bold={true}>Link: </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        flex={1}
                        marginRight={2}
                      >
                        <Link
                          href={
                            currentWorkProyect.link?.toString() !== undefined
                              ? currentWorkProyect.link?.toString()
                              : ""
                          }
                          style={{ color: "black" }}
                        >
                          <Text>{currentWorkProyect.link}</Text>
                        </Link>
                      </Text>
                    </HStack>
                    <Box
                      zIndex={99}
                      flexShrink={1}
                      onTouchEnd={() => handleCopyLink()}
                    >
                      <AntDesign name="copy1" size={18} color="black" />
                    </Box>
                  </HStack>
                ) : (
                  <HStack flex={1}>
                    <Text bold={true} alignSelf="center">
                      Link:{" "}
                    </Text>
                    <Input
                      defaultValue="http://localhost:19000/student/workProyect/proyect/1"
                      w={"90%"}
                      m="1"
                      fontSize="xs"
                      _light={{
                        color: "black",
                      }}
                      _dark={{
                        color: "black",
                      }}
                      backgroundColor={"blue"}
                    />
                  </HStack>
                )}
              </Box>
            </Stack>
          </Stack>
          <Box mb={editMode === true ? 0 : 20}>
            {usersProtyect.length > 0 &&
              usersProtyect.map((user, index) => (
                <Box ml={2} mr={2} mb={2} key={user.name + index}>
                  <StudentCard student={user} />
                  {editMode === true && (
                    <Button
                      backgroundColor={"red.500"}
                      textAlign="center"
                      bottom={2}
                      borderTopRadius={0}
                    >
                      <AntDesign name="delete" size={24} color="white" />
                    </Button>
                  )}
                </Box>
              ))}
          </Box>
          {editMode === true && (
            <Box mb={20}>
              <Button
                backgroundColor={"blue.500"}
                marginLeft={"5%"}
                marginRight={"5%"}
                borderRadius={"20px"}
              >
                <Text color={"white"} fontWeight={"bold"}>
                  Add new User
                </Text>
              </Button>
            </Box>
          )}

          {editMode === true ? (
            <React.Fragment>
              <Container style={{ flex: 2 }}>
                <HStack justifyContent="space-between">
                  <Fab
                    onPressOut={() => changePageMode()}
                    position="absolute"
                    mr={16}
                    bg="red.500"
                    w={9}
                    h={9}
                    textAlign={"center"}
                    icon={
                      <Icon as={Entypo} name="cross" size="md" color="white" />
                    }
                  />
                  <Fab
                    onPressOut={() => changePageMode()}
                    position="absolute"
                    bg="blue.500"
                    icon={<AntDesign name="check" size={24} color="white" />}
                  />
                </HStack>
              </Container>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Container style={{ flex: 2 }}>
                <HStack justifyContent="space-between">
                  <Fab
                    onPressOut={() => changePageMode()}
                    position="absolute"
                    mr={16}
                    bg="blue.500"
                    w={9}
                    h={9}
                    textAlign={"center"}
                    icon={
                      <Icon
                        as={Ionicons}
                        name="ios-pencil"
                        size="md"
                        color="white"
                      />
                    }
                  />
                  <Fab
                    onPressOut={() => dialogFinishProyect()}
                    position="absolute"
                    bg="green.600"
                    icon={
                      <Icon
                        as={MaterialCommunityIcons}
                        name="file-certificate"
                        size="lg"
                        color="white"
                      />
                    }
                  />
                </HStack>
              </Container>
            </React.Fragment>
          )}
          <ConfirmDialog
            isOpen={isFinishDialogOpen}
            setIsOpen={setIsFinishDialogOpen}
            confirmAction={finishProyect}
            title={"Send Work Proyect Confirm"}
            description={
              "This will confirm and send all data relating to " +
              currentWorkProyect.title +
              " and will send it to the professor mail " +
              (currentWorkProyect.features
                ? currentWorkProyect.features.filter(
                    (feature) => feature.title === "Professor mail"
                  )[0].description
                : "") +
              ". This action cannot be reversed."
            }
          />
          {usersProtyect.length > 0 &&
            usersProtyect.map((user, index) => (
              <AddPunctuationDialog
                isOpen={punctuationCard}
                setIsOpen={setPunctuationCard}
                student={user}
                key={index}
              />
            ))}
        </>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  alertContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 99,
  },
});

export default WorkProyectPage;
