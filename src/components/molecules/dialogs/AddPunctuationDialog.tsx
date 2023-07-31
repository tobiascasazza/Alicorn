import { AlertDialog, Button, Center, Input, Text } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { User } from "../../../models/objects/User";
import { Rating } from "react-native-ratings";
import CardPunctuationList from "../../atoms/lists/CardPunctuationList";

interface addPunctuationDialogProps {
  isOpen: boolean;
  setIsOpen: Function;
  student: User;
}

const AddPunctuationDialog = (props: addPunctuationDialogProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const onClose = () => setDialogOpen(false);
  const [dialogCenter, setDialogCenter] = useState<boolean>(true);
  const [ratingPunctuation, setRatingPunctuation] = useState<number>(0);

  useEffect(() => {}, [ratingPunctuation]);
  const confirmAction = () => {
    setDialogOpen(false);
  };

  const cancelRef = useRef(null);
  useEffect(() => {
    if (props.isOpen === true) {
      setDialogOpen(true);
    }
  }, [props.isOpen]);
  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={dialogOpen ? dialogOpen : false}
      onClose={onClose}
      style={{
        justifyContent: dialogCenter ? "center" : "flex-start",
        alignItems: "center",
      }}
    >
      <AlertDialog.Content>
        <AlertDialog.Header alignItems={"center"} backgroundColor={"white"}>
          {"How was working with "}
          <Text fontSize={"lg"} fontWeight={"bold"}>
            {props.student.name + " " + props.student.lastName}
          </Text>
        </AlertDialog.Header>
        <AlertDialog.Body backgroundColor={"white"}>
          <Rating
            type="custom"
            ratingCount={5}
            fractions={true}
            showRating
            startingValue={0}
            ratingTextColor="grey"
            onFinishRating={(e: number) => setRatingPunctuation(e)}
          />
          <CardPunctuationList punctuationType={ratingPunctuation} />
          <Input
            multiline={true}
            m="2"
            fontSize="xs"
            backgroundColor={"blue"}
            placeholder="Additional Comments"
            onFocus={() => {
              setDialogCenter(false);
            }}
            onBlur={() => {
              setDialogCenter(true);
            }}
          ></Input>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={onClose}
              ref={cancelRef}
            >
              Cancel
            </Button>
            <Button colorScheme="green" onPress={() => confirmAction()}>
              Confirm
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default AddPunctuationDialog;
