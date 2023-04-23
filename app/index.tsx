import { StyleSheet, Text, View } from "react-native";
import { Link, Redirect, Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";

export default function Page() {
  return (
    <>
      <Redirect href={"/student"} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "flex-start",
    maxWidth: 960,
    marginHorizontal: "auto",
    alignContent: "flex-start",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
