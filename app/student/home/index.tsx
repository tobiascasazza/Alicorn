import React, { useEffect } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Link, Tabs } from "expo-router";
import ResumeProyectCard from "../../../src/components/molecules/cards/ResumeProyectCard";
import { Box, Icon, Badge, Text, NativeBaseProvider } from "native-base";
import proyects from "../../../data/proyectsExample.json";
import { Feather } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../../../redux/reduxHooks";
import users from "../../../data/users.json";
import { setCurrentUser } from "../../../redux/activeUser";

export default function home() {
  const notificationsCount = 5;
  const { width } = Dimensions.get("window");
  const dispatch = useAppDispatch();

  const list = proyects;

  const detailLink = (proyect: any) => {
    if (proyect.proyectType === "Work Project") {
      return `student/home/workproyectdetail/${proyect.id}`;
    } else {
      return `student/home/companydetail/${proyect.id}`;
    }
  };

  useEffect(() => {
    dispatch(setCurrentUser(users[0]));
    console.log("HOME");
  }, []);
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
                  <Box my={"2"} width={width * 0.9}>
                    <ResumeProyectCard
                      proyectDetailLink={detailLink(proyect)}
                      proyectName={proyect.proyectName}
                      proyectDescription={proyect.proyectDescription}
                      participants={proyect.participants}
                      proyectType={proyect.proyectType}
                      key={proyect.proyectName + Math.random()}
                    />
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
