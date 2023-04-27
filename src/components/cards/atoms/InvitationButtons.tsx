import { View, Text } from "react-native";
import React from "react";
import { notificationStatus } from "../../../models/helpers/enums";
import { HStack, Button } from "native-base";

type InvitationButtonProps = {
  buttonType: notificationStatus;
};

const InvitationButtons = (props: InvitationButtonProps) => {
  const buttonSwitch = () => {
    switch (props.buttonType) {
      case notificationStatus.noInv:
        return "";
      case notificationStatus.invPending:
        return (
          <>
            <HStack>
              <Button size={"xs"} colorScheme={"blue"} height={"30px"}>
                Acept
              </Button>
              <Button
                ml={1}
                size={"xs"}
                colorScheme={"blue"}
                variant={"outline"}
                height={"30px"}
              >
                Cancel
              </Button>
            </HStack>
          </>
        );
      case notificationStatus.invAccepted:
        return (
          <>
            <HStack alignSelf={"center"}>
              <Button
                colorScheme={"blue"}
                height={"30px"}
                width={"90px"}
                variant={"outline"}
              >
                Cancel
              </Button>
            </HStack>
          </>
        );
    }
  };
  return <View>{buttonSwitch()}</View>;
};

export default InvitationButtons;
