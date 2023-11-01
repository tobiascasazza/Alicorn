import {
  AlertDialog,
  Button,
  Center,
  Box,
  Text,
  HStack,
  Select,
  Icon,
} from "native-base";
import React, { useEffect, useRef, useState } from "react";
import users from "../../../../data/users.json";
import { useAppDispatch, useAppSelector } from "../../../../redux/reduxHooks";
import { UserSearch } from "../../../models/objects/SearchEngine";
import { Feature } from "../../../models/objects/FeatureModel";
import { setUserSearch } from "../../../../redux/searchEngine";
import { AntDesign } from "@expo/vector-icons";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { getFeaturesValuesByUser } from "../../../../utils/globalFunctions";

interface ProfileFilterDialogProps {
  isOpen: boolean;
  setIsOpen: Function;
}

const ProfileFilterDialog = (props: ProfileFilterDialogProps) => {
  const dispatch = useAppDispatch();
  const userSearch = useAppSelector((state) => state.searchEngine.userSearch);
  const cancelRef = useRef(null);
  const [userSearchTemp, setUserSearchTemp] = useState<UserSearch>(userSearch);

  const handleAddOrUpdateFeature = (title: string, description: string) => {
    const existingFeatureIndex = userSearchTemp.features.findIndex(
      (feature) => feature.title === title
    );

    if (existingFeatureIndex !== -1) {
      const updatedFeatures = [...userSearchTemp.features];
      updatedFeatures[existingFeatureIndex] = { title, description };
      setUserSearchTemp({ ...userSearchTemp, features: updatedFeatures });
    } else {
      const newFeature: Feature = { title, description };
      setUserSearchTemp({
        ...userSearchTemp,
        features: [...userSearchTemp.features, newFeature],
      });
    }
  };
  const confirmFilters = () => {
    dispatch(
      setUserSearch({
        name: userSearchTemp.name,
        punctuation: userSearchTemp.punctuation,
        features: userSearchTemp.features,
      })
    );
    props.setIsOpen(false);
  };
  const emptyFilters = () => {
    dispatch(
      setUserSearch({
        name: userSearch.name,
        punctuation: [0, 0],
        features: [],
      })
    );
  };
  useEffect(() => {
    setUserSearchTemp(userSearch);
  }, [userSearch]);

  return (
    <Center>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={props.isOpen}
        onClose={() => props.setIsOpen(false)}
      >
        <AlertDialog.Content>
          <Box w="100%" px={4} justifyContent="center">
            <Text
              fontSize="lg"
              fontWeight={"bold"}
              marginTop={"10px"}
              marginBottom={"10px"}
              _dark={{
                color: "gray.300",
              }}
            >
              Profiles Filters
            </Text>
            <HStack justifyContent={"space-between"} marginBottom={"10px"}>
              <Text>Career</Text>
              <Box w={"70%"}>
                <Select
                  w={"100%"}
                  onValueChange={(e) => handleAddOrUpdateFeature("Career", e)}
                  selectedValue={
                    userSearchTemp.features.find(
                      (feature) => feature.title === "Career"
                    )?.description
                  }
                >
                  {getFeaturesValuesByUser(users, "career").map(
                    (career: string, index: number) => {
                      return (
                        <Select.Item
                          label={career}
                          value={career}
                          key={career + index}
                        />
                      );
                    }
                  )}
                </Select>
              </Box>
            </HStack>
            <HStack justifyContent={"space-between"} marginBottom={"10px"}>
              <Text>Year</Text>
              <Box w={"70%"}>
                <Select
                  w={"100%"}
                  onValueChange={(e) => handleAddOrUpdateFeature("Year", e)}
                  selectedValue={
                    userSearchTemp.features.find(
                      (feature) => feature.title === "Year"
                    )?.description
                  }
                >
                  {getFeaturesValuesByUser(users, "year").map(
                    (career: string, index: number) => {
                      return (
                        <Select.Item
                          label={career}
                          value={career}
                          key={career + index}
                        />
                      );
                    }
                  )}
                </Select>
              </Box>
            </HStack>
            <Text
              fontSize="lg"
              fontWeight={"bold"}
              marginTop={"10px"}
              marginBottom={"10px"}
              textAlign={"center"}
              _dark={{
                color: "gray.300",
              }}
            >
              Star Range
            </Text>
            <HStack justifyContent={"space-between"}>
              <Text>Star from: {userSearchTemp.punctuation[0]}</Text>
              <Text>Star to: {userSearchTemp.punctuation[1]}</Text>
            </HStack>
            <MultiSlider
              values={[
                userSearchTemp.punctuation[0],
                userSearchTemp.punctuation[1],
              ]}
              sliderLength={250}
              min={0}
              max={5}
              step={1}
              customMarker={() => (
                <Icon size={"sm"} color={"yellow"}>
                  <AntDesign name="star" size={16} color="gold" />
                </Icon>
              )}
              onValuesChangeFinish={(e: any) => {
                setUserSearchTemp({ ...userSearchTemp, punctuation: e });
              }}
            />
          </Box>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button colorScheme="coolGray" onPress={() => emptyFilters()}>
                Empty filters
              </Button>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={() => props.setIsOpen(false)}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button colorScheme="green" onPress={() => confirmFilters()}>
                Confirm
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
};

export default ProfileFilterDialog;
