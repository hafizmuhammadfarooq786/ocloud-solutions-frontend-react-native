import React from "react";
import { useQuery } from "@apollo/client";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { GET_COUNTRY_DETAILS } from "../graphql/queries";
import { StyleSheet, View, Text } from "react-native";
import { StyledButton, StyledText, StyledView } from "../shared/shared";
import TravelPlanForm from "../components/TravelPlanForm";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useColorScheme } from "nativewind";

interface Country {
  name: string;
  capital: string;
  emoji: string;
  continent: { name: string };
  languages: { name: string }[];
  phone: string;
  states: { name: string }[];
  subdivisions: { name: string }[];
}

interface GetCountryData {
  country: Country;
}

interface GetCountryVars {
  code: string;
}

type CountryDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "CountryDetail"
>;

interface Props {
  route: CountryDetailScreenRouteProp;
  navigation: any;
}

const CountryDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { colorScheme } = useColorScheme();
  const { code } = route.params;
  const plans = useSelector((state: RootState) => state.travelPlans);

  const { loading, data } = useQuery<GetCountryData, GetCountryVars>(
    GET_COUNTRY_DETAILS,
    {
      variables: { code },
    }
  );

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (!data)
    return (
      <View style={styles.loading}>
        <Text>No data available</Text>
      </View>
    );

  const { country } = data;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "black" : "white" },
      ]}
    >
      <StyledView tw="flex-1 flex-col p-2 w-full justify-start">
        <StyledText tw="text-3xl text-center mb-8 text-black dark:text-white">
          {country?.name}
        </StyledText>
        <StyledView tw="w-full flex-row justify-between items-center">
          <StyledText tw="text-lg text-black dark:text-white">Flag:</StyledText>
          <StyledText tw="text-3xl text-start">{country?.emoji}</StyledText>
        </StyledView>
        <StyledView tw="w-full flex-row justify-between items-center">
          <StyledText tw="text-lg text-black dark:text-white">
            Capital:
          </StyledText>
          <StyledText tw="text-md text-start text-black dark:text-white">
            {country?.capital || "--"}
          </StyledText>
        </StyledView>
        <StyledView tw="w-full flex-row justify-between items-center">
          <StyledText tw="text-lg text-black dark:text-white">
            Continent:
          </StyledText>
          <StyledText tw="text-md text-start text-black dark:text-white">
            {country?.continent?.name || "--"}
          </StyledText>
        </StyledView>
        <StyledView tw="w-full flex-row justify-between items-center">
          <StyledText tw="text-lg text-black dark:text-white">
            Phone Code:
          </StyledText>
          <StyledText tw="text-md text-start text-black dark:text-white">
            {country?.phone}
          </StyledText>
        </StyledView>
        <StyledView tw="w-full flex-row justify-between items-start">
          <StyledText tw="text-lg text-black dark:text-white">
            Languages:
          </StyledText>
          <StyledText tw="text-md text-end flex-wrap text-black dark:text-white">
            {country?.languages.map((lang) => lang.name).join(", ")}
          </StyledText>
        </StyledView>

        {/* Add Travel Plan */}
        <TravelPlanForm country={country.name} />

        {/* If Travel Plans exists, then show see travel plan button */}
        {plans.length > 0 && (
          <StyledView tw="mt-4">
            <StyledButton
              title="See Travel Plan"
              tw="text-white bg-blue font-medium rounded-lg text-sm px-5 py-2 focus:outline-none dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onPress={() => navigation.navigate("TravelManagement")}
            />
          </StyledView>
        )}
      </StyledView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 8,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  loading: {
    margin: 8,
    flex: 1,
    fontSize: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CountryDetailScreen;
