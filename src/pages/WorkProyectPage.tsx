import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Heading,
  Stack,
  Text,
  Alert,
  useClipboard,
  VStack,
  Container,
  Fab,
  TextArea,
  Input,
  Button,
  Icon,
} from "native-base";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import FeaturesCard from "../components/atoms/smallCards/FeaturesCard";
import StudentCard from "../components/molecules/cards/StudentCard";
import { WorkProyect } from "../models/objects/WorkProyect";
import { Feature } from "../models/objects/Feature";
import users from "../../exampleData/users.json";
import { User } from "../models/objects/User";

const WorkProyectPage = () => {
  const { width } = Dimensions.get("window");
  const { onCopy } = useClipboard();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [fadeAnim] = React.useState(new Animated.Value(0));
  const [editMode, setEditMode] = useState(false);
  const [usersProtyect, setUsersProtyect] = useState<User[]>(users);

  const animatedStyle = {
    opacity: fadeAnim,
  };

  const proyectFeatures: Feature[] = [
    { title: "Materia", description: "Web Development" },
    { title: "Theme", description: "E-commerce", editable: true },
    { title: "Participants", description: "3" },
    { title: "State", description: "In progress", editable: true },
    { title: "Start date", description: "2022-01-01", editable: true },
    { title: "Deadline", description: "2022-06-30", editable: true },
    {
      title: "Professor Mail",
      description: "professor@gmail.com.ar",
    },
  ];

  const WorkProyect: WorkProyect = {
    id: 1,
    title: "ProyectTitle",
    subtitle: "ProyectSubTitle",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem sed, laudantium neque a impedit qui optio quo nesciunt, corrupti repellat consectetur corporis, enim perspiciatis? Sint ipsum beatae sapiente nulla consequatur?",
    features: proyectFeatures,
    students: usersProtyect,
    link: "https://www.example.com",
  };

  const handleCopyLink = () => {
    onCopy("");
    setShowAlert(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 1000);
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  };

  const changePageMode = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    console.log(usersProtyect);
  }, [usersProtyect]);
  return (
    <ScrollView>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <HStack justifyContent={"space-between"}>
            <Heading size="md" ml="-1">
              <Text>Prueba</Text>
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
            SubTitle Proyect
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
              <FeaturesCard features={proyectFeatures} edit={editMode} />
            </VStack>
          </HStack>
          <Box style={{ width: width * 0.9 }} rounded="lg" overflow="hidden">
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                sed, laudantium neque a impedit qui optio quo nesciunt, corrupti
                repellat consectetur corporis, enim perspiciatis? Sint ipsum
                beatae sapiente nulla consequatur?
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                sed, laudantium neque a impedit qui optio quo nesciunt, corrupti
                repellat consectetur corporis, enim perspiciatis? Sint ipsum
                beatae sapiente nulla consequatur?
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
                      href="http://localhost:19000/student/workProyect/proyect/1"
                      style={{ color: "black" }}
                    >
                      <Text>
                        http://localhost:19000/student/workProyect/proyect/1
                      </Text>
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
          <View style={[styles.alertContainer]}>
            <Animated.View style={animatedStyle}>
              {showAlert && (
                <Alert w="100%" status="success">
                  <Alert.Icon />
                  Link copied to clipboard
                </Alert>
              )}
            </Animated.View>
          </View>
        </Stack>
      </Stack>
      <Box mb={20}>
        {usersProtyect.map((user, index) => (
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
                icon={<Icon as={Entypo} name="cross" size="md" color="white" />}
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
        <Container style={{ flex: 1 }}>
          <Fab
            onPressOut={() => changePageMode()}
            position="absolute"
            bg="blue.500"
            icon={<Ionicons name="ios-pencil" size={24} color="white" />}
          />
        </Container>
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
    bottom: 0,
    width: "100%",
    zIndex: 99,
  },
});

export default WorkProyectPage;
