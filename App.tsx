import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloProvider } from "@apollo/client";
import { store, persistor } from "./src/redux/store";
import client from "./src/graphql/client";
import { NativeBaseProvider } from "native-base";
import theme from "./src/theme/theme";
import { SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NativeBaseProvider theme={theme}>
            <SafeAreaView style={styles.container}>
              <AppNavigator />
            </SafeAreaView>
          </NativeBaseProvider>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

export default App;
