import { View } from "react-native";
import { HStack, Text } from "native-base";
import React from "react";
import { Notification } from "../../../models/objects/Notification";
import { notificationType } from "../../../models/helpers/enums";
import { AirbnbRating, Rating } from "react-native-ratings";
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
          <AirbnbRating
            count={5}
            defaultRating={Number(props.item)}
            size={20}
            isDisabled
            showRating={false}
          />
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
