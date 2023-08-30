import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Card, Text, Button, HStack } from "native-base";

interface CardPunctuationListViewProps {
  cards: PunctuationCardData[];
}
const CardPunctuationListView = (props: CardPunctuationListViewProps) => {
  return (
    <HStack style={styles.cardsContainer}>
      {props.cards.map((item, index) => {
        if (item.number !== undefined && item.number > 0) {
          return (
            <Button key={item.id + index} style={styles.unselectedCard}>
              <Text color="black" fontSize={10} fontWeight={"bold"}>
                {item.title} {item.number > 1 ? `x${item.number}` : ""}
              </Text>
            </Button>
          );
        }
      })}
    </HStack>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    width: "100%",
    flexWrap: "wrap",
    fontSize: 10,
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

export default CardPunctuationListView;
