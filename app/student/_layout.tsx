import React from "react";
import { Tabs } from "expo-router";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Input, NativeBaseProvider, Icon, Box } from "native-base";
import { EvilIcons } from "@expo/vector-icons";

export default () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveBackgroundColor: "#f3f3f3",
          headerShadowVisible: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: () => {
              return <Feather name="home" size={24} color="black" />;
            },
            headerTitle: "WhiteHorn",
            headerTitleAlign: "left",
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: () => {
              return <Feather name="search" size={24} color="black" />;
            },
          }}
        />
        <Tabs.Screen
          name="workProyect"
          options={{
            tabBarIcon: () => {
              return <AntDesign name="profile" size={24} color="black" />;
            },
            headerTitle: "Work Proyect",
          }}
        />
        <Tabs.Screen
          name="entrepreneurship"
          options={{
            tabBarIcon: () => {
              return (
                <MaterialCommunityIcons
                  name="unicorn-variant"
                  size={24}
                  color="black"
                />
              );
            },
            headerTitle: "Entrepreneurship",
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: () => {
              return <AntDesign name="user" size={24} color="black" />;
            },
            headerTitle: "Profile",
          }}
        />
      </Tabs>
    </>
  );
};
