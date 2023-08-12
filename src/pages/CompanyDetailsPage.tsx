import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
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
  Avatar,
} from "native-base";
import { ALERT_TYPE, Dialog, Toast } from "react-native-alert-notification";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import FeaturesCard from "../components/atoms/smallCards/FeaturesCard";
import StudentCard from "../components/molecules/cards/StudentCard";
import { Feature } from "../models/objects/FeatureModel";
import { User } from "../models/objects/User";
import ConfirmCompanyDialogProps from "../components/molecules/dialogs/ConfirmDialog";
import ConfirmDialog from "../components/molecules/dialogs/ConfirmDialog";
import AddPunctuationDialog from "../components/molecules/dialogs/AddPunctuationDialog";
import CompanyData from "../../data/CompanyCards.json";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Company } from "../models/objects/Company";
import Accordion from "react-native-collapsible/Accordion";
import Collapsible from "react-native-collapsible";
import AlicornCollapsible from "../components/molecules/collapsible/AlicornCollapsible";
type CompanyPageRouteParamList = {
  CompanyPage: {
    companyId: number;
  };
};

const CompanyDetailsPage = () => {
  const { width } = Dimensions.get("window");
  const { onCopy } = useClipboard();
  const route = useRoute<RouteProp<CompanyPageRouteParamList, "CompanyPage">>();
  const [fadeAnim] = React.useState(new Animated.Value(0));
  const [editMode, setEditMode] = useState(false);
  const [isFinishDialogOpen, setIsFinishDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentCompany, setCurrentCompany] = useState<Company>({
    id: 1,
    title: "",
    slogan: "",
    logo: "",
    description: "",
    features: [],
    owners: [],
    employees: [],
    link: "",
  });
  const [punctuationCard, setPunctuationCard] = useState<boolean>(false);

  const animatedStyle = {
    opacity: fadeAnim,
  };

  const handleCopyLink = () => {
    onCopy(currentCompany.link ? currentCompany.link : "");
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
    const newCurrentCompany = CompanyData.filter(
      (company) => company.id == route.params?.companyId
    )[0];
    setCurrentCompany(newCurrentCompany);
  }, []);

  useEffect(() => {
    if (currentCompany.title)
      currentCompany.title != "" ? setIsLoading(false) : setIsLoading(true);
  }, [currentCompany]);
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
              <HStack>
                <Avatar
                  marginRight={0}
                  source={{
                    uri: currentCompany.logo?.toString(),
                  }}
                />
                <VStack ml={3}>
                  <HStack justifyContent={"space-between"}>
                    <Heading size="md" ml="-1">
                      <Text>{currentCompany.title}</Text>
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
                    {currentCompany.slogan}
                  </Text>
                </VStack>
              </HStack>

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
                      currentCompany.features ? currentCompany.features : []
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
                    {currentCompany.description}
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
                    {currentCompany.description}
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
                            currentCompany.link?.toString() !== undefined
                              ? currentCompany.link?.toString()
                              : ""
                          }
                          style={{ color: "black" }}
                        >
                          <Text>{currentCompany.link}</Text>
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
                      defaultValue="http://localhost:19000/student/entrepreneurship/company/1"
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
            <Box mb={2}>
              <AlicornCollapsible title={"Owners"}>
                <Box>
                  {currentCompany.owners.length > 0 &&
                    currentCompany.owners.map((user, index) => (
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
              </AlicornCollapsible>
            </Box>
            <Box mb={2}>
              <AlicornCollapsible title={"Employees"}>
                <Box>
                  {currentCompany.employees.length > 0 &&
                    currentCompany.employees.map((user, index) => (
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
              </AlicornCollapsible>
            </Box>
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
            description={""}
          />
        </>
      )}
    </ScrollView>
  );
};

export default CompanyDetailsPage;
