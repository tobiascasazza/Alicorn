import React from "react";
import { StyleSheet } from "react-native";
import { Button, Tooltip } from "native-base";
import { Rating } from "react-native-ratings";

type StartsRatingProps = {
  value?: number;
  size?: number;
};

const StarsRatingView = (props: StartsRatingProps) => {
  return (
    <Rating
      type="custom"
      ratingCount={5}
      imageSize={props.size !== undefined ? props.size : 20}
      startingValue={props.value !== undefined ? props.value : 0}
      readonly={true}
      fractions={true}
      style={styles.filledStar}
    />
  );
};
const styles = StyleSheet.create({
  filledStar: {
    borderColor: "transparent",
  },
  tooltipContainer: {
    backgroundColor: "transparent",
  },
});
export default StarsRatingView;
