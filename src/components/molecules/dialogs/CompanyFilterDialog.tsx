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
import companies from "../../../../data/CompanyCards.json";
import { useAppDispatch, useAppSelector } from "../../../../redux/reduxHooks";
import { CompanySearch } from "../../../models/objects/SearchEngine";
import { Feature } from "../../../models/objects/FeatureModel";
import { AntDesign } from "@expo/vector-icons";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { setCompanySearch } from "../../../../redux/searchEngine";
import { getFeaturesValuesByCompany } from "../../../../utils/globalFunctions";

interface CompanyFilterDialogProps {
  isOpen: boolean;
  setIsOpen: Function;
}

const CompanyFilterDialog = (props: CompanyFilterDialogProps) => {
  const dispatch = useAppDispatch();
  const companySearch = useAppSelector(
    (state) => state.searchEngine.companySearch
  );
  const cancelRef = useRef(null);
  const [companySearchTemp, setCompanySearchTemp] =
    useState<CompanySearch>(companySearch);

  const handleAddOrUpdateFeature = (title: string, description: string) => {
    const existingFeatureIndex = companySearchTemp.features.findIndex(
      (feature) => feature.title === title
    );

    if (existingFeatureIndex !== -1) {
      const updatedFeatures = [...companySearchTemp.features];
      updatedFeatures[existingFeatureIndex] = { title, description };
      setCompanySearchTemp({ ...companySearchTemp, features: updatedFeatures });
    } else {
      const newFeature: Feature = { title, description };
      setCompanySearchTemp({
        ...companySearchTemp,
        features: [...companySearchTemp.features, newFeature],
      });
    }
  };
  const confirmFilters = () => {
    dispatch(
      setCompanySearch({
        title: companySearchTemp.title,
        punctuation: companySearchTemp.punctuation,
        features: companySearchTemp.features,
      })
    );
    props.setIsOpen(false);
  };
  const emptyFilters = () => {
    dispatch(
      setCompanySearch({
        title: companySearch.title,
        punctuation: [0, 0],
        features: [],
      })
    );
  };
  useEffect(() => {
    setCompanySearchTemp(companySearch);
  }, [companySearch]);

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
              Companys Filters
            </Text>
            <HStack justifyContent={"space-between"} marginBottom={"10px"}>
              <Text>Industry</Text>
              <Box w={"50%"}>
                <Select
                  w={"100%"}
                  onValueChange={(e) => handleAddOrUpdateFeature("Industry", e)}
                  selectedValue={
                    companySearchTemp.features.find(
                      (feature) => feature.title === "Industry"
                    )?.description
                  }
                >
                  {getFeaturesValuesByCompany(companies, "industry").map(
                    (industry: string, index: number) => {
                      return (
                        <Select.Item
                          label={industry}
                          value={industry}
                          key={industry + index}
                        />
                      );
                    }
                  )}
                </Select>
              </Box>
            </HStack>
            <HStack justifyContent={"space-between"} marginBottom={"10px"}>
              <Text>Main Product</Text>
              <Box w={"50%"}>
                <Select
                  w={"100%"}
                  onValueChange={(e) =>
                    handleAddOrUpdateFeature("Main Product", e)
                  }
                  selectedValue={
                    companySearchTemp.features.find(
                      (feature) => feature.title === "Main Product"
                    )?.description
                  }
                >
                  {getFeaturesValuesByCompany(companies, "main product").map(
                    (mainProduct: string, index: number) => {
                      return (
                        <Select.Item
                          label={mainProduct}
                          value={mainProduct}
                          key={mainProduct + index}
                        />
                      );
                    }
                  )}
                </Select>
              </Box>
            </HStack>
            <HStack justifyContent={"space-between"} marginBottom={"10px"}>
              <Text>Business Model</Text>
              <Box w={"50%"}>
                <Select
                  w={"100%"}
                  onValueChange={(e) =>
                    handleAddOrUpdateFeature("Business Model", e)
                  }
                  selectedValue={
                    companySearchTemp.features.find(
                      (feature) => feature.title === "Business Model"
                    )?.description
                  }
                >
                  {getFeaturesValuesByCompany(companies, "business model").map(
                    (businessModel: string, index: number) => {
                      return (
                        <Select.Item
                          label={businessModel}
                          value={businessModel}
                          key={businessModel + index}
                        />
                      );
                    }
                  )}
                </Select>
              </Box>
            </HStack>
            <HStack justifyContent={"space-between"} marginBottom={"10px"}>
              <Text>Status</Text>
              <Box w={"50%"}>
                <Select
                  w={"100%"}
                  onValueChange={(e) =>
                    handleAddOrUpdateFeature("Entrepreneurship Status", e)
                  }
                  selectedValue={
                    companySearchTemp.features.find(
                      (feature) => feature.title === "Entrepreneurship Status"
                    )?.description
                  }
                >
                  {getFeaturesValuesByCompany(
                    companies,
                    "entrepreneurship status"
                  ).map((status: string, index: number) => {
                    return (
                      <Select.Item
                        label={status}
                        value={status}
                        key={status + index}
                      />
                    );
                  })}
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
              <Text>Star from: {companySearchTemp.punctuation[0]}</Text>
              <Text>Star to: {companySearchTemp.punctuation[1]}</Text>
            </HStack>
            <MultiSlider
              values={[
                companySearchTemp.punctuation[0],
                companySearchTemp.punctuation[1],
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
                setCompanySearchTemp({ ...companySearchTemp, punctuation: e });
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

export default CompanyFilterDialog;
