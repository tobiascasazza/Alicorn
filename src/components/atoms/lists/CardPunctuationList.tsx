import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Card, Text, Button } from "native-base";
import { PunctuationCardData } from "../../../models/objects/PunctuationCardData";

interface CardPunctuationListProps {
  punctuationType: number;
}
const CardPunctuationList = (props: CardPunctuationListProps) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const cardData: PunctuationCardData[] = [
    { id: 1, title: "Good Partner", type: "good" },
    { id: 2, title: "Attentive", type: "good" },
    { id: 4, title: "Moody", type: "bad" },
    { id: 3, title: "Responsible", type: "good" },
    { id: 5, title: "Irresponsible", type: "bad" },
    { id: 6, title: "Superb", type: "bad" },
  ];

  const toggleItemSelection = (itemId: number) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <Container style={styles.cardsContainer}>
      {cardData
        .filter((card) =>
          props.punctuationType <= 2
            ? card.type === "bad"
            : props.punctuationType >= 3.9
            ? card.type === "good"
            : card.type === "good" || card.type === "bad"
        )
        .map((item, index) => (
          <Button
            key={item.id + index}
            onPress={() => toggleItemSelection(item.id)}
            style={
              selectedItems.includes(item.id)
                ? styles.selectedCard
                : styles.unselectedCard
            }
          >
            <Text
              style={
                selectedItems.includes(item.id)
                  ? { color: "white" }
                  : { color: "black" }
              }
              fontSize={10}
              fontWeight={"bold"}
            >
              {item.title}
            </Text>
          </Button>
        ))}
    </Container>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 10,
    alignSelf: "center",
    marginTop: 5,
  },
  selectedCard: {
    backgroundColor: "grey",
    borderRadius: 20,
    margin: 2,
    height: 35,
  },
  unselectedCard: {
    backgroundColor: "#fff",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 20,
    margin: 2,
    height: 35,
  },
});

export default CardPunctuationList;
