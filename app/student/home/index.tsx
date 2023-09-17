import React, { useEffect } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Link, Tabs } from "expo-router";
import ResumeProjectCard from "../../../src/components/molecules/cards/ResumeProjectCard";
import { Box, Icon, Badge, Text, NativeBaseProvider } from "native-base";
import projects from "../../../data/projectsExample.json";
import { Feather } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../../../redux/reduxHooks";
import users from "../../../data/users.json";
import { setCurrentUser } from "../../../redux/activeUser";

export default function home() {
  const notificationsCount = 5;
  const { width } = Dimensions.get("window");
  const dispatch = useAppDispatch();

  const list = projects;

  const detailLink = (project: any) => {
    if (project.projectType === "Work Project") {
      return `student/home/workprojectdetail/${project.id}`;
    } else {
      return `student/home/companydetail/${project.id}`;
    }
  };

  useEffect(() => {
    dispatch(setCurrentUser(users[0]));
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
            list.map((project) => {
              return (
                <React.Fragment key={project.projectName + Math.random()}>
                  <Box my={"2"} width={width * 0.9}>
                    <ResumeProjectCard
                      projectDetailLink={detailLink(project)}
                      projectName={project.projectName}
                      projectDescription={project.projectDescription}
                      participants={project.participants}
                      projectType={project.projectType}
                      key={project.projectName + Math.random()}
                    />
                  </Box>
                </React.Fragment>
              );
            })
          ) : (
            <Text>You don't have any project yet</Text>
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
