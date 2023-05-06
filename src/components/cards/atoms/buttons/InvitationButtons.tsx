import { View, Text, Dimensions } from "react-native";
import React from "react";
import { notificationStatus } from "../../../../models/helpers/enums";
import { HStack, Button } from "native-base";

type InvitationButtonProps = {
  buttonType: notificationStatus;
};

const InvitationButtons = (props: InvitationButtonProps) => {
  const { width } = Dimensions.get("window");

  const buttonSwitch = () => {
    switch (props.buttonType) {
      case notificationStatus.noInv:
        return "";
      case notificationStatus.invPending:
        return (
          <>
            <HStack>
              <Button
                size={"xs"}
                colorScheme={"blue"}
                height={"30px"}
                width={width * 0.15}
              >
                Acept
              </Button>
              <Button
                ml={1}
                size={"xs"}
                colorScheme={"blue"}
                variant={"outline"}
                height={"30px"}
                width={width * 0.15}
              >
                Cancel
              </Button>
            </HStack>
          </>
        );
      case notificationStatus.invAccepted:
        return (
          <>
            <HStack>
              <Button
                colorScheme={"blue"}
                height={"30px"}
                width={width * 0.3}
                variant={"outline"}
              >
                Cancel
              </Button>
            </HStack>
          </>
        );
    }
  };
  return <React.Fragment>{buttonSwitch()}</React.Fragment>;
};

export default InvitationButtons;
