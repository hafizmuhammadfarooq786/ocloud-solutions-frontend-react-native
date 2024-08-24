import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CountryListScreen from "../screens/CountryListScreen";
import CountryDetailScreen from "../screens/CountryDetailScreen";
import TravelPlanManagementScreen from "../screens/TravelPlansScreen";
import { useColorScheme } from "nativewind";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type RootStackParamList = {
  CountryList: undefined;
  CountryDetail: { code: string };
  TravelManagement: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CountryList"
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === "dark" ? "black" : "white",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            color: colorScheme === "dark" ? "white" : "black",
            fontSize: 18,
          },
          headerTitleAlign: "center",
          contentStyle: {
            backgroundColor: colorScheme === "dark" ? "black" : "white",
          },
          headerRight: () => (
            <Pressable onPress={() => toggleColorScheme()}>
              {colorScheme === "dark" ? (
                <MaterialIcons name="light-mode" size={24} color="white" />
              ) : (
                <MaterialIcons name="dark-mode" size={24} color="black" />
              )}
            </Pressable>
          ),
        }}
      >
        <Stack.Screen
          name="CountryList"
          component={CountryListScreen}
          options={{
            title: "Countries",
          }}
        />
        <Stack.Screen
          name="CountryDetail"
          component={CountryDetailScreen}
          options={({ route }) => {
            return {
              title: `${route.params.code}`,
            };
          }}
        />
        <Stack.Screen
          name="TravelManagement"
          component={TravelPlanManagementScreen}
          options={({ route }) => {
            return {
              title: "Travel Plans",
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
