import React from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Box, Text, Button } from "native-base";
import { RootState } from "../redux/store";
import { removePlan } from "../redux/slices/travelPlanSlice";
import { useColorScheme } from "nativewind";

export interface TravelPlan {
  id: string;
  country: string;
  details: string;
}

const TravelPlansScreen: React.FC = ({}) => {
  const { colorScheme } = useColorScheme();
  const plans = useSelector((state: RootState) => state.travelPlans);
  const dispatch = useDispatch();

  return (
    <Box flex={1} p="4">
      <Text
        fontSize="2xl"
        color={colorScheme === "dark" ? "white" : "black"}
        textAlign="center"
        mb="4"
      >
        Your Travel Plans
      </Text>
      <FlatList
        data={plans}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Box
            borderColor="coolGray.200"
            borderWidth="1"
            borderRadius="8"
            p="4"
            m="2"
          >
            <Text
              fontSize="lg"
              mb="2"
              color={colorScheme === "dark" ? "white" : "black"}
            >
              {item.country}
            </Text>
            <Text mb="2" color={colorScheme === "dark" ? "white" : "black"}>
              {item.details}
            </Text>
            <Button onPress={() => dispatch(removePlan(item.id))}>
              Remove Plan
            </Button>
          </Box>
        )}
      />
    </Box>
  );
};

export default TravelPlansScreen;
