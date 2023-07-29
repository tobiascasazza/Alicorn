import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Card, Text, Button } from "native-base";

const CardPunctuationList = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  interface cardData {
    id: number;
    title: string;
  }

  const cardData: cardData[] = [
    { id: 1, title: "Buen Compañero" },
    { id: 2, title: "Atento" },
    { id: 3, title: "Responsable" },
    // Agrega más opciones según sea necesario
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
      {cardData.map((item) => (
        <Button
          key={item.id}
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
    width: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 15,
    fontSize: 10,
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
