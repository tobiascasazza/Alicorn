import { Dimensions, View } from "react-native";
import React, { ReactNode, useState } from "react";
import { Box, HStack, Icon, Text } from "native-base";
import { SimpleLineIcons } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";

interface AlicornCollapsibleProps {
  title: String;
  children: ReactNode;
  addToTitle?: ReactNode;
}

const AlicornCollapsible = (props: AlicornCollapsibleProps) => {
  const { width, height } = Dimensions.get("window");
  const [collapsibleClosed, setCollapsibleClosed] = useState(true);
  const [isInside, setIsInside] = useState(true);

  const handleTouchStart = (event: any) => {
    setIsInside(true);
  };

  const handleTouchMove = (event: any) => {
    const moveX = event.nativeEvent.locationX;
    const moveY = event.nativeEvent.locationY;
    const widthOfYourComponent = height;
    const heightOfYourComponent = width;
    if (
      moveX < 0 ||
      moveY < 0 ||
      moveX > widthOfYourComponent ||
      moveY > heightOfYourComponent
    ) {
      setIsInside(false);
    }
  };

  const handleTouchEnd = () => {
    if (isInside) {
      setCollapsibleClosed(!collapsibleClosed);
    }
  };

  return (
    <View>
      <Box
        backgroundColor={"white"}
        borderColor={"coolGray.200"}
        borderWidth={"1"}
        ml={4}
        mr={4}
        borderRadius={8}
        p={2}
      >
        <HStack
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          justifyContent={"space-between"}
          p={2}
        >
          <HStack>
            <Text fontWeight={"bold"}>{props.title}</Text>
            {props.addToTitle}
          </HStack>
          <Icon
            as={SimpleLineIcons}
            name={collapsibleClosed ? "arrow-down" : "arrow-up"}
            size="md"
          />
        </HStack>
        <Collapsible collapsed={collapsibleClosed}>
          {props.children}
        </Collapsible>
      </Box>
    </View>
  );
};

export default AlicornCollapsible;
