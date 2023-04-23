import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import React from "react";
import ResumeProyectCard from "../../src/components/cards/ResumeProyectCard";
import { Box, NativeBaseProvider, Icon } from "native-base";
import proyects from "../../exampleData/proyectsExample.json";
import { Feather } from "@expo/vector-icons";

export default function home() {
  const list = proyects;

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Tabs.Screen
          options={{
            headerRight: () => {
              return (
                <View
                  style={{
                    justifyContent: "flex-end",
                    width: 50,
                  }}
                >
                  <NativeBaseProvider>
                    <Icon
                      as={
                        <Feather
                          name="heart"
                          color="black"
                          style={style.heartIcon}
                        />
                      }
                    />
                  </NativeBaseProvider>
                </View>
              );
            },
          }}
        />
        <Box py={2} alignItems={"center"}>
          {list.length > 0 ? (
            list.map((proyect) => {
              return (
                <React.Fragment key={proyect.proyectName + Math.random()}>
                  <Text>
                    <Box my={"2"}>
                      <ResumeProyectCard
                        proyectName={proyect.proyectName}
                        proyectDescription={proyect.proyectDescription}
                        participants={proyect.participants}
                        proyectType={proyect.proyectType}
                        key={proyect.proyectName + Math.random()}
                      />
                    </Box>
                  </Text>
                </React.Fragment>
              );
            })
          ) : (
            <Text>You don't have any proyect yet</Text>
          )}
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const style = StyleSheet.create({
  heartIcon: {
    fontSize: 30,
  },
});
