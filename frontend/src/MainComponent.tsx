// import { StatusBar } from 'expo-status-bar';
import {
  // ActivityIndicator,
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  StyleSheet,
  // Text,
  // View,
} from "react-native";
import {
  // getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "./screens/Home";
// import Notifications from "./screens/Notifications";
// import Profile from "./screens/Profile";
// import Home from "./screens/Home";
// import Notes from "./screens/Notes";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Login from "./screens/login_signup_screens/Login";
// import AddDetailsOnFirstTime from "./screens/login_signup_screens/AddDetailsOnFirstTime";
// import TabBarIcon from "./components/TabBarIcon";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
// import { SafeAreaProvider } from "react-native-safe-area-context";

import { useSelector, useDispatch } from "react-redux";
import { selectLogged, setLoggedIn, setLoggedOut } from "./loggedSlice";

import { useEffect, useState } from "react";

import * as NavigationBar from "expo-navigation-bar";

// import AppLoading from "expo-app-loading";
import {
  useFonts,
  Dosis_200ExtraLight,
  Dosis_300Light,
  Dosis_400Regular,
  Dosis_500Medium,
  Dosis_600SemiBold,
  Dosis_700Bold,
  Dosis_800ExtraBold,
} from "@expo-google-fonts/dosis";
// import { getLogSave } from "./utilities/LogSaveStorage";
//

// import changeNavigationBarColor, {
//   hideNavigationBar,
//   showNavigationBar,
// } from 'react-native-navigation-bar-color';

// const Stack = createNativeStackNavigator();

// Learned from documentation about this method before it was giving error.
// So always learn from documentation because sometimes after the tutorials, libraries are updated. So read docs throughly and search on docs.
// const RootStack = createNativeStackNavigator<RootStackParamList>()
// const BottomTab = createBottomTabNavigator<RootStackParamList>();
// const MaterialBottomTab =
//   createMaterialBottomTabNavigator<RootStackParamList>();

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  SignedInStack: undefined;
  SignedOutStack: undefined;
  SplashScreen: undefined;

  Home: undefined;
  Notifications: { userId: string; message: string } | undefined;
  Profile: { userId: string };
  User: undefined;
  Chats: undefined;
  // MessagingScreen: {otherParticipant: string};
  // MessagingScreen: {conversationId: string, receiver: string};
  MessagingScreen: {conversationId: string, otherParticipant: string} | undefined;
  Search: undefined;

  Notes: undefined;

  Intro: undefined;
  Login: undefined;
  Signup: undefined;
  AddDetailsOnFirstTime: undefined;
  AuthenticateOTP: undefined;
};

// import { MMKV } from 'react-native-mmkv'

// Create and initialise the MMKV instance
// export const storage = new MMKV();

// let logsave = storage.getString('logsave')

// const logId = false;

// const RootStack = createNativeStackNavigator<RootStackParamList>();

import * as SecureStore from "expo-secure-store";
// import AuthenticateOTP from "./screens/login_signup_screens/AuthenticateOTP";
// import { createStackNavigator } from "@react-navigation/stack";
import SignedInStack from "./stack/SignedInStack";
import SignedOutStack from "./stack/SignedOutStack";
import SplashScreen from "./screens/SplashScreen";
import axios from "axios";

export async function saveToExpoSec(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export const getLogSave = (key: any) => {
  let result = SecureStore.getItemAsync(key);
  if (result) {
    // alert("🔐 Here's your value 🔐 \n" + result);
    // return { key: result };
    return result;
  } else {
    // alert("No values stored under that key.");
    return result;
  }
};

// import * as SecureStore from 'expo-secure-store';

// export const setToken = (token: string) => {
//   return SecureStore.setItemAsync("secure_token", token);
// };

// export const getToken = () => {
//   return SecureStore.getItemAsync("secure_token");
// };

// setToken('#your_secret_token');
// getToken().then(token => console.log(token)); // output '#your_secret_token'
// console.log(getToken().then(token => {return token})) // output '#your_secret_token'

// const loggedUser = getLogSave("logsave");

const checkToken = async () => {
  try {
    const token = await SecureStore.getItemAsync("secure_token");

    if(token){
      // Set the global authorization header
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }

    return token !== null;
  } catch (error) {
    console.error(error);
    return false; // Return false in case of error
  }
};
//   export default function App() {
export default function MainComponent() {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // Use null to indicate loading

  const [loading, setLoading] = useState(true); // New loading

  //
  const isLoggedIn = useSelector(selectLogged);

  const dispatch = useDispatch();
  //

  // const [showSplash, setShowSplash] = useState(true); // State to control splash screen visibility

  useEffect(() => {
    const verifyToken = async () => {
      const tokenExists = await checkToken();

      setTimeout(() => {
        if (tokenExists) {
          dispatch(setLoggedIn());
        } else {
          dispatch(setLoggedOut());
        }

        // setIsLoggedIn(tokenExists);
        setLoading(false); // Set loading to false after token check
      }, 1000);
    };

    verifyToken();
  }, []);

  // NavigationBar.setBackgroundColorAsync("#fdbe00");
  // NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.setBackgroundColorAsync("white");
  NavigationBar.setButtonStyleAsync("dark");

  let [fontsLoaded] = useFonts({
    Dosis_200ExtraLight,
    Dosis_300Light,
    Dosis_400Regular,
    Dosis_500Medium,
    Dosis_600SemiBold,
    Dosis_700Bold,
    Dosis_800ExtraBold,
  });

  // let fontSize = 24;
  // let paddingVertical = 6;

  if (!fontsLoaded) {
    // return <ActivityIndicator size={100} />;
    return <SplashScreen />;
  }

  // const handleSplashAnimationEnd = () => {

  // setShowSplash(false); // Hide splash screen after animation

  // };

  // if (loading || showSplash) {

  // return <SplashScreen onAnimationEnd={handleSplashAnimationEnd} />; // Show splash screen while loading

  // }
  if (loading) {
    return <SplashScreen />;
  } else {
    NavigationBar.setVisibilityAsync("visible");

    return (
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <Stack.Screen
              name="SignedInStack"
              component={SignedInStack}
              options={{ headerShown: false, animationTypeForReplace: "pop" }}
            />
          ) : (
            <Stack.Screen
              name="SignedOutStack"
              component={SignedOutStack}
              options={{ headerShown: false, animationTypeForReplace: "push" }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
