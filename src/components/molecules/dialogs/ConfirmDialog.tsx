import { AlertDialog, Button, Center } from "native-base";
import React, { useRef } from "react";

interface confirmWorkProjectDialogProps {
  isOpen: boolean;
  setIsOpen: Function;
  confirmAction: Function;
  title: string;
  description: string;
}

const ConfirmWorkProjectDialogProps = (
  props: confirmWorkProjectDialogProps
) => {
  const onClose = () => props.setIsOpen(false);

  const cancelRef = useRef(null);
  return (
    <Center>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={props.isOpen ? props.isOpen : false}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>{props.title}</AlertDialog.Header>
          <AlertDialog.Body>{props.description}</AlertDialog.Body>
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
              <Button colorScheme="green" onPress={() => props.confirmAction()}>
                Confirm
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
};

export default ConfirmWorkProjectDialogProps;
