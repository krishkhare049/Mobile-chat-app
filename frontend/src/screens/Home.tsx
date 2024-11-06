import {
  StyleSheet,
  // Text,
  // View,
  // SafeAreaView,
  // Button,
  // ScrollView,
  // StatusBar,
} from "react-native";
import React, { useRef } from "react";
// import { Link } from "@react-navigation/native";
// import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { RootStackParamList } from "../App";
import { RootStackParamList } from "../MainComponent";


import { useScrollToTop } from "@react-navigation/native";

import Notifications from "./Notifications";
// import Profile from "./Profile";
// import Notes from "./Notes";
// import ContactList from "../components/ContactList";
// import AddDetailsOnFirstTime from "./login_signup_screens/AddDetailsOnFirstTime";
// import TabBarIcon from "../components/TabBarIcon";
import Chats from "./Chat";
import Search from "./Search";
import MessagingScreen from "./MessagingScreen";
import CustomHeader from "../components/CustomHeader";


// import { StatusBar } from "expo-status-bar";

// const Tab = createBottomTabNavigator<RootStackParamList>();
const HomeStack = createNativeStackNavigator<RootStackParamList>();

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: HomeProps) {
  const ScrollRef = useRef(null);

  // The expected native behavior of scrollable components is to respond to events from navigation that will scroll to top when tapping on the active tab as you would expect from native tab bars.
  // In order to achieve it we export useScrollToTop which accept ref to scrollable component (e,g. ScrollView or FlatList).
  useScrollToTop(ScrollRef);

  return (
    <>
      {/* <Tab.Navigator>
      <Tab.Screen name="Notifications" component={Notifications} initialParams={{userId: 'k2', message: 'hi'}}/>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Notes" component={Notes} />
    </Tab.Navigator> */}
      {/* <HomeStack.Navigator screenOptions={{navigationBarColor:'white'}}> */}
      <HomeStack.Navigator>
        {/* <HomeStack.Screen name="Notifications" component={Notifications} initialParams={{userId: 'k2', message: 'hi'}}/> */}
        <HomeStack.Screen
          name="Chats"
          component={Chats}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="MessagingScreen"
          component={MessagingScreen}
          options={{
            headerShown: false,
            // header(props) {
            //   return (
            //     <Text>kks</Text>
            //   )
            // },
            // headerStyle: { backgroundColor: "#fdbe00" },
            // headerTitleStyle: { fontFamily: "Dosis_700Bold" },
          }}
        />
        <HomeStack.Screen
          name="Search"
          component={Search}
          options={{
            // header(props) {
            //   return (<CustomHeader name="Search"/>)
            // },
            headerShown: false
            // headerStyle: { backgroundColor: "#fdbe00" },
            // headerTitleStyle: { fontFamily: "Dosis_700Bold" },
          }}
        />
        <HomeStack.Screen
          name="Notifications"
          component={Notifications}
          options={{
              header(props) {
                return (<CustomHeader name="Notifications"/>)
              },
            // headerStyle: { backgroundColor: "#fdbe00" },
            // headerTitleStyle: { fontFamily: "Dosis_700Bold", color: 'white'},
            
          }}
        />
      </HomeStack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({});
