import { View } from "react-native";
import { HStack, Text } from "native-base";
import React from "react";
import { Notification } from "../../../models/objects/Notification";
import { notificationType } from "../../../models/helpers/enums";
import StarsRatingView from "./StarsRatingView";
type NotificationItemProps = {
  notificationType: notificationType;
  item: string;
};

const NotificationItem = (props: NotificationItemProps) => {
  return (
    <View>
      {props.notificationType !== notificationType.punctuation ? (
        <Text
          fontSize={"md"}
          bold={true}
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          alignSelf="flex-start"
        >
          {props.item}
        </Text>
      ) : (
        <HStack>
          <StarsRatingView value={Number(props.item)} />
          <Text
            fontSize={"md"}
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            alignSelf="flex-start"
          >
            ({props.item})
          </Text>
        </HStack>
      )}
    </View>
  );
};

export default NotificationItem;
