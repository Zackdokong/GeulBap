import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as NavigationBar from 'expo-navigation-bar';
import * as React from "react";
import { useEffect } from "react";
import { StatusBar } from 'react-native';

import BookScreen from "../app/book";
import HomeScreen from "../app/index";
import ProfileScreen from "../app/profile";
import RankingScreen from "../app/ranking";
import VocabScreen from "../app/vocab";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync('leanback');
  }, []);

  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ranking" component={RankingScreen} />
        <Stack.Screen name="Vocab" component={VocabScreen} />
        <Stack.Screen name="Book" component={BookScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
