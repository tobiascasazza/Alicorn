import {
  AlertDialog,
  Button,
  Card,
  Center,
  HStack,
  Input,
  ScrollView,
  Stack,
  Text,
} from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { User } from "../../../models/objects/User";
import { Rating } from "react-native-ratings";
import CardPunctuationList from "../../atoms/lists/CardPunctuationList";
import { Opinion } from "../../../models/objects/Opinion";
import StarsRatingView from "../../atoms/stars/StarsRatingView";
import { Dimensions } from "react-native";
import CardPunctuationListView from "../../atoms/lists/CardPunctuationListView";

interface seePunctuationDialogProps {
  isOpen: boolean;
  setIsOpen: Function;
  opinions: Opinion[];
}

const SeePunctuationDialog = (props: seePunctuationDialogProps) => {
  const { width, height } = Dimensions.get("window");
  const onClose = () => props.setIsOpen(false);
  const [dialogCenter, setDialogCenter] = useState<boolean>(true);
  const [ratingPunctuation, setRatingPunctuation] = useState<number>(0);

  const cancelRef = useRef(null);
  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={props.isOpen}
      onClose={onClose}
      style={{
        justifyContent: dialogCenter ? "center" : "flex-start",
        alignItems: "center",
      }}
    >
      <AlertDialog.Content maxHeight={height * 0.6}>
        <Text fontWeight={"bold"} fontSize="md" margin={5}>
          Opinions
        </Text>
        <AlertDialog.Body backgroundColor={"white"}>
          {props.opinions.map((opinion, index) => (
            <Card
              key={index + opinion.comments}
              backgroundColor={"white"}
              borderColor={"gray.200"}
              borderWidth={"1"}
              marginBottom={2}
            >
              <HStack justifyContent={"space-between"}>
                <Text fontWeight={"bold"}>Annonymus</Text>
                <HStack alignSelf={"center"}>
                  <StarsRatingView value={opinion.stars} />
                  <Text fontWeight={"bold"} ml={0.5}>
                    {opinion.stars}
                  </Text>
                </HStack>
              </HStack>
              <Stack>
                <CardPunctuationListView
                  cards={opinion.punctuationCards.map((punctuationCard) => ({
                    id: 1,
                    title: punctuationCard,
                    type: "",
                    number: 1,
                  }))}
                />
              </Stack>
              <Stack marginTop={5}>
                <Text fontWeight={"bold"}>Comments</Text>
                <Text>{opinion.comments}</Text>
              </Stack>
            </Card>
          ))}
        </AlertDialog.Body>

        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={() => props.setIsOpen(false)}
              ref={cancelRef}
            >
              Cancel
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default SeePunctuationDialog;
