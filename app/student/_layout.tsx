import React, { useEffect } from "react";
import { Tabs } from "expo-router";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { NativeBaseProvider } from "native-base";
import { store } from "../../redux/configureStore";
import { Provider } from "react-redux";

export default () => {
  return (
    <>
      <Provider store={store}>
        <NativeBaseProvider>
          <AlertNotificationRoot
            key={"RootAlertComponent"}
            theme="light"
            colors={[
              {
                card: "white",
                label: "black",
                overlay: "black",
                danger: "#DC3545",
                warning: "#FFC107",
                success: "#28A745",
              },
              {
                card: "black",
                label: "white",
                overlay: "black",
                danger: "#DC3545",
                warning: "#FFC107",
                success: "#28A745",
              },
            ]}
          >
            <Tabs
              screenOptions={{
                tabBarActiveBackgroundColor: "#f3f3f3",
                headerShadowVisible: false,
                tabBarShowLabel: false,
              }}
            >
              <Tabs.Screen
                name="home"
                options={{
                  tabBarIcon: () => {
                    return <Feather name="home" size={24} color="black" />;
                  },
                  headerShown: false,
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
                  headerTitle: "Work Proyects",
                  headerShown: false,
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
                        color="#ec4899"
                      />
                    );
                  },
                  headerTitle: "Entrepreneurship",
                  headerShown: false,
                }}
              />
              <Tabs.Screen
                name="profile"
                options={{
                  tabBarIcon: () => {
                    return <AntDesign name="user" size={24} color="black" />;
                  },
                  headerTitle: "Profile",
                  headerShown: false,
                }}
              />
            </Tabs>
          </AlertNotificationRoot>
        </NativeBaseProvider>
      </Provider>
    </>
  );
};
