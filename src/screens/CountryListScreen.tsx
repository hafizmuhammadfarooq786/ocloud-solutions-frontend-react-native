import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/queries";
import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useColorScheme } from "nativewind";

interface Country {
  code: string;
  emoji: string;
  name: string;
}

interface GetCountriesData {
  countries: Country[];
}

interface GetCountriesVars {
  filter?: { name?: string };
}

type CountryListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "CountryList"
>;

interface Props {
  navigation: CountryListScreenNavigationProp;
}

const CountryListScreen: React.FC<any> = ({ navigation }) => {
  const { colorScheme } = useColorScheme();
  const [searchText, setSearchText] = useState("");
  const { loading, error, data } = useQuery<GetCountriesData, GetCountriesVars>(
    GET_COUNTRIES,
    {
      variables: { filter: {} },
    },
  );

  const filteredCountries = data?.countries?.filter((country) =>
    country.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "black" : "white" },
      ]}
    >
      {/* Search Bar */}
      <View style={styles.search}>
        <SearchBar value={searchText} onChange={setSearchText} />
      </View>

      {/* Country List */}
      {filteredCountries?.length ? (
        <View style={styles.flatlist}>
          <FlatList
            data={filteredCountries}
            keyExtractor={(item: Country) => item.name}
            renderItem={({ item }) => (
              <CountryCard
                country={item}
                onPress={() =>
                  navigation.navigate("CountryDetail", { code: item.code })
                }
              />
            )}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
          />
        </View>
      ) : (
        <View style={styles.error}>
          <Text>No Data Found!</Text>
        </View>
      )}

      {loading && (
        <View style={styles.loading}>
          <Text>Loading...</Text>
        </View>
      )}
      {error && (
        <View style={styles.error}>
          <Text>{error.message}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  search: {
    width: "100%",
  },

  flatlist: {
    width: "100%",
    paddingTop: 20,
  },

  loading: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
});

export default CountryListScreen;
