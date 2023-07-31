import { StyleSheet, Dimensions, Animated } from "react-native";
import React from "react";
import { Box, HStack, Heading, Stack, Text, Alert, Avatar } from "native-base";
import FeaturesCard from "../../atoms/smallCards/FeaturesCard";
import { Feature } from "../../../../models/objects/Features";
import { AntDesign } from "@expo/vector-icons";
import { useClipboard } from "native-base";
import { Link } from "expo-router";

interface CompanyCardProps {
  id: number;
  logo: String;
  title: String;
  features: Feature[];
  description: String;
  link: String;
}

const CompanyCard = (props: CompanyCardProps) => {
  const { width } = Dimensions.get("window");
  const { onCopy } = useClipboard();
  const [showAlert, setShowAlert] = React.useState<boolean>(false);
  const [fadeAnim] = React.useState(new Animated.Value(0));

  React.useEffect(() => {}, [fadeAnim, showAlert]);

  return (
    <React.Fragment>
      <Box
        style={{ width: width * 0.95 }}
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
        <Stack p="4" space={3}>
          <Stack space={2}>
            <HStack justifyContent={"space-between"}>
              <Avatar
                marginRight={0}
                source={{
                  uri: props.logo?.toString(),
                }}
              />
              <Heading size="md" ml="-1">
                {props.title}
              </Heading>
              <Link href={`student/workProyect/proyect/${props.id}`}>
                <Text color="pink.500" underline>
                  view detail
                </Text>
              </Link>
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
      </Box>
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
