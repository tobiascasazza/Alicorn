import { View, Button } from "react-native";
import React, { ReactNode, useState } from "react";
import { Box, HStack, Icon, Text } from "native-base";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";

interface AlicornCollapsibleProps {
  title: String;
  children: ReactNode;
}

const AlicornCollapsible = (props: AlicornCollapsibleProps) => {
  const [collapsibleClosed, setCollapsibleClosed] = useState(true);

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
          onTouchEnd={() => setCollapsibleClosed(!collapsibleClosed)}
          justifyContent={"space-between"}
          p={2}
        >
          <Text fontWeight={"bold"}>{props.title}</Text>
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
