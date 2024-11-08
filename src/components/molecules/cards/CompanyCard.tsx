import { StyleSheet, Dimensions, Animated, ViewStyle } from "react-native";
import React from "react";
import {
  Box,
  HStack,
  Heading,
  Stack,
  Text,
  Alert,
  Avatar,
  VStack,
} from "native-base";
import FeaturesCard from "../../atoms/smallCards/FeaturesCard";
import { Feature } from "../../../models/objects/FeatureModel";
import { AntDesign } from "@expo/vector-icons";
import { useClipboard } from "native-base";
import { Link } from "expo-router";
import StarsRatingView from "../../atoms/stars/StarsRatingView";

interface CompanyCardProps {
  id: number;
  logo: String;
  title: String;
  slogan: String;
  features: Feature[];
  description: String;
  punctuation: number;
  link?: String;
  searchCard?: boolean;
  currentTab?: String;
}

const CompanyCard = (props: CompanyCardProps) => {
  const { onCopy } = useClipboard();
  const [showAlert, setShowAlert] = React.useState<boolean>(false);
  const [fadeAnim] = React.useState(new Animated.Value(0));

  React.useEffect(() => {}, [fadeAnim, showAlert]);

  return (
    <React.Fragment>
      <Stack
        width={"100%"}
        overflow="hidden"
        rounded={props.searchCard ? "0" : "lg"}
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
          backgroundColor: "white",
        }}
      >
        <Stack p="4" space={3}>
          <Stack space={2}>
            <HStack justifyContent={"space-between"}>
              <HStack>
                <Avatar
                  marginRight={0}
                  source={{
                    uri: props.logo?.toString(),
                  }}
                />
                <VStack ml={2}>
                  <Link
                    href={`student/${
                      props.currentTab ? props.currentTab : "entrepreneurship"
                    }/companydetail/${props.id}`}
                  >
                    <Heading underline size="md">
                      {props.title}
                    </Heading>
                  </Link>

                  <Text
                    _light={{
                      color: "grey",
                    }}
                    _dark={{
                      color: "black",
                    }}
                    mt="-1"
                    bold={true}
                  >
                    {props.slogan}
                  </Text>
                </VStack>
              </HStack>
              <HStack textAlign={"right"}>
                <StarsRatingView value={props.punctuation} />
                <Text>{props.punctuation}</Text>
              </HStack>
            </HStack>
            <FeaturesCard features={props.features} />
            <Box
              pl={2}
              pr={2}
              rounded="lg"
              overflow="hidden"
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
            ></Box>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  alert: {
    borderRadius: 10,
    position: "relative",
    zIndex: 10,
    bottom: 50,
  },
});
export default CompanyCard;
