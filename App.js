import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import MyButton from "./components/MyButton";
import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import AddPlayer from "./screens/addPlayer";
import AddGame from "./screens/addGame";
import GameHome from "./screens/gameHome";
import ViewGames from "./screens/viewGames";
import RecordGame from "./screens/RecordGame";
import ViewEvents from "./screens/viewEvents";
import ViewStats from "./screens/viewStats";
import PLayerStats from "./screens/playerStats";
import OverallStats from "./screens/overallStats";
import PlayersOverallStats from "./screens/playersOverallStats";
import TeamStats from "./screens/TeamStats";
import LineBuilder from "./screens/lineBuilder";
import Login from "./screens/login";
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "#119fb8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Mayhem",
            headerStyle: {
              backgroundColor: "#119fb8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Add Player"
          component={AddPlayer}
          options={{
            title: "Add Player",
            headerStyle: {
              backgroundColor: "#119fb8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Add Game"
          component={AddGame}
          options={{
            title: "Mayhem",
            headerStyle: {
              backgroundColor: "#119fb8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="View Games"
          component={ViewGames}
          options={{
            title: "View Games",
            headerStyle: {
              backgroundColor: "#119fb8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Game Home"
          component={GameHome}
          options={{
            title: "Game",
            headerStyle: {
              backgroundColor: "#119fb8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Record Game"
          component={RecordGame}
          options={{
            title: "Record Game",
            headerStyle: {
              backgroundColor: "#119fb8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="View Game Events"
          component={ViewEvents}
          options={{
            title: "View Game Events",
            headerStyle: {
              backgroundColor: "#119fb8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="View Game Stats"
          component={ViewStats}
          options={{
            title: "View Game Stats",
            headerStyle: {
              backgroundColor: "#119fb8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="View Player Stats"
          component={PLayerStats}
          options={{
            title: "View Player Stats",
            headerStyle: {
              backgroundColor: "#119fb8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="View Overall Stats"
          component={OverallStats}
          options={{
            title: "View Overall Stats",
            headerStyle: {
              backgroundColor: "#119fb8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Players Overall Stats"
          component={PlayersOverallStats}
          options={{
            title: "Players Overall Stats",
            headerStyle: {
              backgroundColor: "#119fb8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Team Stats"
          component={TeamStats}
          options={{
            title: "Team Stats",
            headerStyle: {
              backgroundColor: "#119fb8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Line Builder"
          component={LineBuilder}
          options={{
            title: "Line Builder",
            headerStyle: {
              backgroundColor: "#119fb8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Image style={styles.image} source={require("./assets/logo.png")} />
//       <MyButton text="Add Player"></MyButton>
//       <MyButton text="Add Game"></MyButton>
//       <MyButton text="View Games"></MyButton>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
    marginBottom: 80,
  },
});
