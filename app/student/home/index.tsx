import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Link, Tabs, useRouter } from "expo-router";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResumeProyectCard from "../../../src/components/molecules/cards/ResumeProyectCard";
import { Box, NativeBaseProvider, Icon, Badge, Text } from "native-base";
import proyects from "../../../exampleData/proyectsExample.json";
import { Feather } from "@expo/vector-icons";

export default function home() {
  const notificationsCount = 5;

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
                    <Link href="student/home/notifications">
                      <Box position="relative">
                        <Icon
                          as={
                            <Feather
                              name="heart"
                              color="black"
                              style={style.heartIcon}
                            />
                          }
                        />
                        {notificationsCount > 0 && (
                          <Badge
                            position="absolute"
                            top={3}
                            right={3}
                            bg="pink.500"
                            borderRadius={15}
                          >
                            <Text color="white">{notificationsCount}</Text>
                          </Badge>
                        )}
                      </Box>
                    </Link>
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
                  <Box my={"2"}>
                    <Link
                      href={
                        proyect.proyectType === "Work Project"
                          ? "student/workProyect"
                          : ""
                      }
                    >
                      <ResumeProyectCard
                        proyectName={proyect.proyectName}
                        proyectDescription={proyect.proyectDescription}
                        participants={proyect.participants}
                        proyectType={proyect.proyectType}
                        key={proyect.proyectName + Math.random()}
                      />
                    </Link>
                  </Box>
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
