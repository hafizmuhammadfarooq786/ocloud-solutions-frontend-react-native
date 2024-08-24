# Travel Planning App - Coding Challenge

A React Native application built with Expo, Redux Toolkit, Redux Persistence, Async Storage, GraphQL, Apollo Client, and NativeBase for designing components. This app allows users to browse a list of countries, view detailed information about each country, and create/remove travel plans.

## Features

- **Country List Screen**

  - Fetch and display a list of countries.
  - Search functionality for filtering countries.
  - Navigation to the Country Detail Screen.

- **Country Detail Screen**

  - Fetch and display detailed information about the selected country.
  - Create travel plans for the selected country.

- **Travel Plan Management Screen**
  - Display and allow you to remove all created travel plans.
  - Persistent data storage using Redux Persistence and Async Storage.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v16 or later
- **npm**: v6 or later (comes with Node.js)
- **yarn**: v1.22 or later (optional)
- **pnpm**: v7 or later (optional)
- **Expo CLI**: v5 or later

Install Expo CLI globally if you haven’t:

```bash
npm install -g expo-cli
```

## Project Structure

- src: A source folder containing all the modules and their dependencies.
- screens: All screens build, designed, and functionality integrated under this folder.
- components: This folder consists for reuseable components used with the screens such as CountryCard, Searchbar,etc.
- redux: A store setup with redux toolkit and async storage persistance.
- graphql: A graphql appolo client.
- navigation: Contains the App Navigation feature.

## Getting Started

1. ### Clone the Repository

```
git clone https://github.com/hafizmuhammadfarooq786/ocloud-solutions-frontend-react-native.git
cd ocloud-solutions-frontend-react-native
```

Install Packages

```
npm install || yarn install || pnpm install
```

2. ### Build and Start the Application

A start command will compile the code and allow you to run the app on web, android and ios simulator.

```
npm run start || yarn start || pnpm start
```

5. ### Andoird Run

Tp run this application on android, please make sure that emulator is installed and launched properly:

```
pnpm andoird || yarn android || npm run android
```

5. ### IOS Run

Tp run this application on ios, please make sure that simulator is installed and launched properly on your macOS:

```
pnpm ios || yarn ios || npm run ios
```

6. ### Stop the Application

To stop the running application, use the following command:

```
Ctrl + C
```

7. ### FEW Screenshots Attached
