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
import CompanyData from "../../data/CompanyCards.json";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Company } from "../models/objects/Company";
import Accordion from "react-native-collapsible/Accordion";
import Collapsible from "react-native-collapsible";
import AlicornCollapsible from "../components/molecules/collapsible/AlicornCollapsible";
import StarsRatingView from "../components/atoms/stars/StarsRatingView";
import { useAppSelector } from "../../redux/reduxHooks";
type CompanyPageRouteParamList = {
  CompanyPage: {
    companyId: number;
  };
};

const CompanyDetailsPage = (props: { currentTab?: string }) => {
  const empltyEmployee: User = {
    id: 0,
    features: [],
    name: "",
    lastName: "",
  };

  const { width } = Dimensions.get("window");
  const { onCopy } = useClipboard();
  const activeUser = useAppSelector((state) => state.activeUser.currentUser);
  const route = useRoute<RouteProp<CompanyPageRouteParamList, "CompanyPage">>();
  const [fadeAnim] = React.useState(new Animated.Value(0));
  const [editMode, setEditMode] = useState(false);
  const [ownersStarsAvg, setOwnersStarsAvg] = useState(0);
  const [employeesStarsAvg, setEmployeesStarsAvg] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDeleteEmployeeDialog, setIsDeleteEmployeeDialog] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] =
    useState<User>(empltyEmployee);
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

  const dialogDeleteEmployee = (student: User) => {
    setEmployeeToDelete(student);
    setIsDeleteEmployeeDialog(true);
  };

  const deleteEmployee = () => {
    setIsDeleteEmployeeDialog(false);
    Dialog.show({
      type: ALERT_TYPE.DANGER,
      title: `${employeeToDelete?.name} ${employeeToDelete?.lastName} was deleted`,
      textBody: `You are deleted ${employeeToDelete?.name} ${employeeToDelete?.lastName} of the proyect ${currentCompany.title} `,
      button: "close",
    });
    let newEmployees: User[] = currentCompany.employees.filter(
      (user) => user.id !== employeeToDelete.id
    );
    setCurrentCompany({ ...currentCompany, employees: newEmployees });
    setEmployeeToDelete(empltyEmployee);
  };

  const calculateStarsAvg = () => {
    const ownersPunctuations: number[] =
      currentCompany.owners.length > 0
        ? currentCompany.owners.map((owner) =>
            owner.punctuation ? owner.punctuation : 0
          )
        : [0];
    const employeesPunctuations: number[] =
      currentCompany.employees.length > 0
        ? currentCompany.employees.map((employee) =>
            employee.punctuation ? employee.punctuation : 0
          )
        : [0];

    const ownersSum = ownersPunctuations.reduce(
      (total, currentValue) => total + currentValue,
      0
    );
    const employeesSum = employeesPunctuations.reduce(
      (total, currentValue) => total + currentValue,
      0
    );

    const ownersAvg = (ownersSum / ownersPunctuations.length).toFixed(2);
    const employeesAvg = (employeesSum / employeesPunctuations.length).toFixed(
      2
    );

    setOwnersStarsAvg(Number.parseFloat(ownersAvg));
    setEmployeesStarsAvg(Number.parseFloat(employeesAvg));
  };

  useEffect(() => {
    const newCurrentCompany = CompanyData.filter(
      (company) => company.id == route.params?.companyId
    )[0];
    setCurrentCompany(newCurrentCompany);
  }, []);

  useEffect(() => {
    if (currentCompany.title) {
      currentCompany.title != "" ? setIsLoading(false) : setIsLoading(true);
      calculateStarsAvg();
    }
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
          <Stack p="4" space={3} w={width}>
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

              <HStack
                justifyContent={"space-between"}
                backgroundColor={"white"}
                borderColor="coolGray.200"
                borderWidth="1"
                p="2"
                borderRadius={10}
              >
                <VStack w="100%">
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
                  <FeaturesCard
                    features={
                      currentCompany.features ? currentCompany.features : []
                    }
                    edit={editMode}
                  />
                </VStack>
              </HStack>
              <Box
                rounded="lg"
                overflow="hidden"
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
                  ml="-0.5"
                  mt="1"
                  bold={true}
                  pl={1}
                >
                  Description
                </Text>
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
                  <HStack justifyContent={"space-between"} m={2}>
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
                      defaultValue={currentCompany.link}
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
          <Box mb={20}>
            <Box mb={2} ml={4} mr={4}>
              <AlicornCollapsible
                title={"Owners"}
                addToTitle={
                  <HStack ml={2}>
                    <StarsRatingView value={ownersStarsAvg} />
                    <Text fontWeight={"bold"}>{ownersStarsAvg} Stars</Text>
                  </HStack>
                }
              >
                <Box>
                  {currentCompany.owners.length > 0 &&
                    currentCompany.owners.map((user, index) => (
                      <Box ml={2} mr={2} mb={2} key={user.name + index}>
                        <StudentCard
                          student={user}
                          profileLink={
                            activeUser.id !== user.id
                              ? `student/${props.currentTab}/studentprofile/${user.id}`
                              : "student/profile"
                          }
                        />
                      </Box>
                    ))}

                  {editMode === true && (
                    <Box>
                      <Button
                        backgroundColor={"blue.500"}
                        marginLeft={"5%"}
                        marginRight={"5%"}
                        borderRadius={"20px"}
                      >
                        <Text color={"white"} fontWeight={"bold"}>
                          Manage Ownership
                        </Text>
                      </Button>
                    </Box>
                  )}
                </Box>
              </AlicornCollapsible>
            </Box>
            <Box mb={2} ml={4} mr={4}>
              <AlicornCollapsible
                title={"Employees"}
                addToTitle={
                  <HStack ml={2}>
                    <StarsRatingView value={employeesStarsAvg} />
                    <Text fontWeight={"bold"}>{employeesStarsAvg} Stars</Text>
                  </HStack>
                }
              >
                <Box mr={2} mb={2}>
                  {currentCompany.employees.length > 0 &&
                    currentCompany.employees.map((user, index) => (
                      <Box ml={2} mb={2} key={user.name + index}>
                        <StudentCard
                          student={user}
                          profileLink={
                            activeUser.id !== user.id
                              ? `student/${props.currentTab}/studentprofile/${user.id}`
                              : "student/profile"
                          }
                        />
                        {editMode === true && (
                          <Button
                            backgroundColor={"red.500"}
                            textAlign="center"
                            bottom={2}
                            borderTopRadius={0}
                            onPress={() => dialogDeleteEmployee(user)}
                          >
                            <AntDesign name="delete" size={24} color="white" />
                          </Button>
                        )}
                      </Box>
                    ))}
                  {editMode === true && (
                    <Box>
                      <Button
                        backgroundColor={"blue.500"}
                        marginLeft={"5%"}
                        marginRight={"5%"}
                        borderRadius={"20px"}
                      >
                        <Text color={"white"} fontWeight={"bold"}>
                          Hire a new employee
                        </Text>
                      </Button>
                    </Box>
                  )}
                </Box>
              </AlicornCollapsible>
            </Box>
          </Box>

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
                    bg="pink.500"
                    textAlign={"center"}
                    icon={
                      <Icon
                        as={Ionicons}
                        name="ios-settings-outline"
                        size="lg"
                        color="white"
                      />
                    }
                  />
                </HStack>
              </Container>
            </React.Fragment>
          )}
        </>
      )}
      <ConfirmDialog
        isOpen={isDeleteEmployeeDialog}
        setIsOpen={setIsDeleteEmployeeDialog}
        confirmAction={deleteEmployee}
        title={"Delete Employee"}
        description={`Are you sure that you want delete the next student of this entrepreneurship?: ${employeeToDelete?.name} ${employeeToDelete?.lastName}`}
      />
    </ScrollView>
  );
};

export default CompanyDetailsPage;
