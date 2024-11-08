import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import {
  Avatar,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Stack,
} from "native-base";
import { notificationType } from "../../../models/helpers/enums";
import NotificationItem from "../../atoms/items/NotificationItem";
import { Notification } from "../../../models/objects/Notification";
import InvitationButtons from "../../atoms/buttons/InvitationButtons";
import { Link } from "expo-router";

const NotificationComponent = (props: Notification) => {
  const { width } = Dimensions.get("window");

  const calculateTime = () => {
    const notificationDateTime = new Date(props.notificationDateTime);
    const minutesFromNotif =
      new Date().getMinutes() - notificationDateTime.getMinutes();
    let notificationTime = "";

    if (minutesFromNotif < 60) {
      notificationTime =
        minutesFromNotif <= 0 ? "now" : `${minutesFromNotif} min`;
    } else if (minutesFromNotif > 60 && minutesFromNotif < 1440) {
      notificationTime = `${minutesFromNotif} h`;
    } else if (minutesFromNotif > 1440) {
      notificationTime = `${minutesFromNotif} y"`;
    }
    return notificationTime;
  };

  const notificationText = () => {
    switch (props.notificationType) {
      case notificationType.proReq:
        return "has sent you a work project request together:";
      case notificationType.jobReq:
        return "has sent you a job application:";
      case notificationType.parRequ:
        return "has sent you a request for venture partners";
      case notificationType.punctuation:
        return "They have given you a score";
    }
  };

  const notificationPress = () => {
    switch (props.notificationType) {
      case notificationType.proReq:
        console.log("Project Request function");
        break;
      case notificationType.jobReq:
        console.log("Job Request function");
        break;
      case notificationType.parRequ:
        console.log("Partner Request function");
        break;
      case notificationType.punctuation:
        console.log("punctuation function");
        break;
      default:
        console.log("notification without function");
        break;
    }
  };

  return (
    <View>
      <Box
        _dark={{
          bg: "coolGray.800",
        }}
        _light={{
          bg: "white",
        }}
        borderBottomColor={"coolGray.300"}
        borderBottomStyle={"inset"}
        borderBottomWidth={"0.2"}
      >
        <Pressable onPress={() => notificationPress()}>
          <Box pl="2" pr="2" py="2">
            <HStack display={"flex"}>
              <Stack alignSelf={"center"}>
                <Link href={`student/home/studentprofile/${props.user.id}`}>
                  <Avatar
                    size={width * 0.12}
                    source={{
                      uri:
                        props.user.photo !== undefined &&
                        props.user.photo.length > 0
                          ? props.user.photo
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                    }}
                  />
                </Link>
              </Stack>

              <VStack>
                <HStack>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                    alignSelf={"flex-start"}
                    pl="2"
                    width={width * 0.5}
                    textAlign={"left"}
                  >
                    {props.notificationType !== notificationType.punctuation
                      ? `${props.user.name} ${
                          props.user.lastName
                        } ${notificationText()}`
                      : notificationText()}
                  </Text>
                  <Box pl={2} alignSelf={"center"} width={width * 0.2}>
                    <InvitationButtons buttonType={props.notificationStatus} />
                  </Box>
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <Box pl="8px">
                    <NotificationItem
                      notificationType={props.notificationType}
                      item={props.item}
                    />
                  </Box>
                </HStack>
              </VStack>
            </HStack>
            <Text
              fontSize="xs"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
              alignSelf="flex-end"
              width={width * 0.1}
            >
              {calculateTime()}
            </Text>
          </Box>
        </Pressable>
      </Box>
    </View>
  );
};
const styles = StyleSheet.create({
  rating: {
    borderColor: "transparent",
  },
});
export default NotificationComponent;
function componentDidMount(arg0: () => void) {
  throw new Error("Function not implemented.");
}
