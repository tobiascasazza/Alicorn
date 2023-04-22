import { View, Text, ScrollView } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import ResumeProyectCard from "../../src/components/cards/ResumeProyectCard";
import { Box, NativeBaseProvider } from "native-base";
import proyects from "../../exampleData/proyectsExample.json";

export default function home() {
  const list = proyects;

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box py={5} alignItems={"center"}>
          {list.map((proyect) => {
            return (
              <>
                <Text>
                  <Box my={2}>
                    <ResumeProyectCard
                      proyectName={proyect.proyectName}
                      proyectDescription={proyect.proyectDescription}
                      participants={proyect.participants}
                      proyectType={proyect.proyectType}
                      key={proyect.proyectName + Math.random()}
                    />
                  </Box>
                </Text>
              </>
            );
          })}
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}
