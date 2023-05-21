import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
} from "react-native";
import React from "react";
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
} from "native-base";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import FeaturesCard from "../components/cards/atoms/cards/FeaturesCard";
import StudentCard from "../components/cards/molecules/cards/StudentCard";

const WorkProyectPage = () => {
  const { width } = Dimensions.get("window");
  const { onCopy } = useClipboard();
  const [showAlert, setShowAlert] = React.useState<boolean>(false);
  const [fadeAnim] = React.useState(new Animated.Value(0));
  const [editMode, setEditMode] = React.useState(false);

  const animatedStyle = {
    opacity: fadeAnim,
  };

  const proyectFeatures = [
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
            <VStack style={{ width: width * 0.45 }}>
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
                  padding={2}
                >
                  Features
                </Text>
              </Box>
              <FeaturesCard features={proyectFeatures} edit={editMode} />
            </VStack>

            <Box style={{ width: width * 0.45 }} rounded="lg" overflow="hidden">
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
                  padding={2}
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem sed, laudantium neque a impedit qui optio quo nesciunt,
                  corrupti repellat consectetur corporis, enim perspiciatis?
                  Sint ipsum beatae sapiente nulla consequatur?
                </Text>
              ) : (
                <Input
                  multiline={true}
                  h={"80%"}
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem sed, laudantium neque a impedit qui optio quo nesciunt,
                  corrupti repellat consectetur corporis, enim perspiciatis?
                  Sint ipsum beatae sapiente nulla consequatur?
                </Input>
              )}
            </Box>
          </HStack>
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
        <Box ml={2} mr={2} mb={2}>
          <StudentCard />
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
                icon={<Entypo name="cross" size={24} color="white" />}
                size={8}
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
