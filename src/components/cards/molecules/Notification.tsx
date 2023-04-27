import { View } from "react-native";
import React from "react";
import { Avatar, Box, HStack, VStack, Text } from "native-base";
import {
  notificationStatus,
  notificationType,
} from "../../../models/helpers/enums";
import InvitationButtons from "../atoms/InvitationButtons";
import { User } from "../../../models/objects/User";

type NotificationProps = {
  notificationStatus: notificationStatus;
  notificationDateTime: Date;
  notificationType: notificationType;
  user: User;
  nameOfItem: string;
};

const Notification = (props: NotificationProps) => {
  const calculateTime = () => {
    const minutesFromNotif =
      new Date().getMinutes() - props.notificationDateTime.getMinutes();
    let notificationTime = "";

    if (minutesFromNotif < 60) {
      notificationTime =
        minutesFromNotif <= 0 ? "now" : minutesFromNotif + " min";
    } else if (minutesFromNotif > 60 && minutesFromNotif < 1440) {
      notificationTime = minutesFromNotif + " h";
    } else if (minutesFromNotif > 1440) {
      notificationTime = minutesFromNotif + " y";
    }
    return notificationTime;
  };

  const notificationText = () => {
    switch (props.notificationType) {
      case notificationType.proReq:
        return "te ha enviado una solicitud de proyecto juntos:";
      case notificationType.jobReq:
        return "te ha enviado una solicitud de trabajo:";
      case notificationType.parRequ:
        return "te ha enviado una solicitud de socios de emprendimiento";
      case notificationType.punctuation:
        return "te ha hecho una puntuacion";
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
      >
        <Box pl="4" pr="4" py="2">
          <HStack display={"flex"}>
            <Avatar
              size="52px"
              alignSelf={"center"}
              source={{
                uri: props.user.photo,
              }}
            />
            <VStack>
              <HStack width={"300px"}>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  alignSelf={"left"}
                  pl="2"
                  width={
                    props.notificationStatus === notificationStatus.noInv
                      ? "90%"
                      : "70%"
                  }
                  textAlign={"left"}
                >
                  {props.user.name +
                    " " +
                    props.user.lastName +
                    " " +
                    notificationText()}
                </Text>
                <Box pl={2}>
                  <InvitationButtons buttonType={props.notificationStatus} />
                </Box>
              </HStack>
              <HStack justifyContent={"space-between"}>
                <Text
                  fontSize={"md"}
                  pl="8px"
                  bold={true}
                  color="coolGray.800"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  alignSelf="flex-start"
                >
                  {props.nameOfItem}
                </Text>
                <Text
                  fontSize="xs"
                  color="coolGray.800"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  alignSelf="flex-end"
                >
                  {calculateTime()}
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </Box>
      </Box>
    </View>
  );
};

export default Notification;
function componentDidMount(arg0: () => void) {
  throw new Error("Function not implemented.");
}
