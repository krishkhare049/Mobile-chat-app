// import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
// import React, { useRef } from "react";

// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Notes from "./Notes";
// import Notifications from "./Notifications";
// import { RootStackParamList } from "../App";
// import Login from "./login_signup_screens/Intro";
// import ContactList from "../components/ContactList";
// import { useScrollToTop } from "@react-navigation/native";
// import Me from "./Me";

// export type DrawerParamList = {
//   Notifications: { userId: string; message: string } | undefined;
//   // Profile: { userId: string };
//   Notes: undefined;
//   Me: undefined;
// };

// const Drawer = createDrawerNavigator<DrawerParamList>();

// export default function Profile() {
//   const ScrollRef = useRef(null);

//   // The expected native behavior of scrollable components is to respond to events from navigation that will scroll to top when tapping on the active tab as you would expect from native tab bars.
//   // In order to achieve it we export useScrollToTop which accept ref to scrollable component (e,g. ScrollView or FlatList).
//   useScrollToTop(ScrollRef);

//   return (
//       <Drawer.Navigator initialRouteName="Me" screenOptions={{headerStyle: {backgroundColor: '#fdbe00'}, headerTintColor: 'white', drawerStatusBarAnimation: 'slide', drawerActiveBackgroundColor:'white',drawerContentContainerStyle: {backgroundColor: '#fdbe00', height: '100%'}, drawerInactiveTintColor: 'black', drawerActiveTintColor: '#fdbe00'}}>
//         <Drawer.Screen name="Me" component={Me} />
//         <Drawer.Screen name="Notes" component={Notes} />
//       </Drawer.Navigator>
//   );
// }

// const styles = StyleSheet.create({});

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import TabBarIcon from "../components/TabBarIcon";
import { Button, Chip, Dialog, Portal, Surface } from "react-native-paper";

// import LogOutCard from "../components/LogOutCard";
import * as SecureStore from "expo-secure-store";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../App";
import { RootStackParamList } from "../MainComponent";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedOut } from "../loggedSlice";
import axios from "axios";
import { axiosInstance } from "../utilities/axiosInstance";

// import { DrawerParamList } from "./Profile";

type ProfileProps = NativeStackScreenProps<RootStackParamList, "Profile">;
// type MeProps = NativeStackScreenProps<DrawerParamList, "Me">;

export default function Profile({ navigation }: ProfileProps) {
  // const isLoggedIn = useSelector(selectLogged);

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const hideDialog = () => setVisible(false);

  const logOutUser = () => {
    console.log("Log out user");
    SecureStore.deleteItemAsync("secure_token");
    setVisible(false);

    // Remove global authorization header-
     // Set the global authorization header
     axiosInstance.defaults.headers.common['Authorization'] = undefined;

    dispatch(setLoggedOut());
    // navigation.popToTop()
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* <Surface elevation={4}> */}
      <Surface
        elevation={5}
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          // marginTop: 20,
          backgroundColor: "#fdbe00",
          // backgroundColor: "#6A5BC2",
          padding: 10,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <Image
          source={require("../assets/pexels-prateekkatyal-7389639.jpg")}
          style={styles.myProfileImg}
        />

        <Text
          style={{
            textAlign: "center",
            fontFamily: "Dosis_700Bold",
            fontSize: 20,
            // backgroundColor: "whitesmoke",
            backgroundColor: "#FFFFFF",
            // width: 100,
            // color: '#fdbe00',
            // margin: "auto",
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 20,
            marginTop: 10,
          }}
        >
          @username
        </Text>
        <TabBarIcon name="pencil" size={20} color="white" />
      </Surface>

      {/* </Surface> */}

      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            padding: 5,
          }}
        >
          <Text
            style={{
              color: "gray",
              alignSelf: "flex-start",
              fontFamily: "Dosis_400Regular",
              fontSize: 18,
            }}
          >
            My Status
          </Text>
        </View>

        <View style={{ flexDirection: "row", flexWrap: "wrap", width: "80%" }}>
          <Chip
            avatar={<TabBarIcon name="pencil" size={15} color="purple" />}
            style={{ margin: 4 }}
            onPress={() => console.log("Pressed")}
          >
            Living Life
          </Chip>
          <Chip
            icon="information"
            style={{ margin: 4 }}
            onPress={() => console.log("Pressed")}
          >
            Hey!
          </Chip>
          <Chip
            icon="information"
            style={{ margin: 4 }}
            onPress={() => console.log("Pressed")}
          >
            Busy
          </Chip>
          <Chip
            icon="information"
            style={{ margin: 4 }}
            onPress={() => console.log("Pressed")}
          >
            Influencer
          </Chip>
          <Chip
            icon="information"
            style={{ margin: 4 }}
            onPress={() => console.log("Pressed")}
          >
            Family
          </Chip>
          <Chip
            icon="information"
            style={{ margin: 4 }}
            onPress={() => console.log("Pressed")}
          >
            Video creator
          </Chip>
          <Chip
            icon="information"
            style={{ margin: 4 }}
            onPress={() => console.log("Pressed")}
          >
            Entrepreneur
          </Chip>
          <Chip
            icon="information"
            style={{ margin: 4 }}
            onPress={() => console.log("Pressed")}
          >
            Attitude
          </Chip>
          <Chip
            icon="information"
            style={{ margin: 4 }}
            onPress={() => console.log("Pressed")}
          >
            Example Chip
          </Chip>
        </View>
      </View>

      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            padding: 5,
          }}
        >
          <Text
            style={{
              color: "gray",
              alignSelf: "flex-start",
              fontFamily: "Dosis_400Regular",
              fontSize: 18,
            }}
          >
            Dashboard
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.6} style={{ margin: 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(245, 66, 93, 0.4)",
              width: "80%",
              borderRadius: 10,
              padding: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "60%",
              }}
            >
              <TabBarIcon name="privacy" size={40} color="#ff0026" />
              <Text
                style={{
                  color: "#ff0026",
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: "Dosis_700Bold",
                }}
              >
                Privacy
              </Text>
            </View>

            <TabBarIcon name="right" color="#ff0026" size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={{ margin: 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(18, 153, 83, 0.4)",
              width: "80%",
              borderRadius: 10,
              padding: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "60%",
              }}
            >
              <TabBarIcon name="payments" size={40} color="#129953" />
              <Text
                style={{
                  color: "#129953",
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: "Dosis_700Bold",
                }}
              >
                Payments
              </Text>
            </View>

            <TabBarIcon name="right" color="#129953" size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={{ margin: 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(0, 123, 255, 0.4)",
              width: "80%",
              borderRadius: 10,
              padding: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "60%",
              }}
            >
              <TabBarIcon name="settings" size={40} color="#007bff" />
              <Text
                style={{
                  color: "#007bff",
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: "Dosis_700Bold",
                }}
              >
                Settings
              </Text>
            </View>

            <TabBarIcon name="right" color="#007bff" size={30} />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            padding: 5,
          }}
        >
          <Text
            style={{
              color: "gray",
              alignSelf: "flex-start",
              fontFamily: "Dosis_400Regular",
              fontSize: 18,
            }}
          >
            My account
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            padding: 5,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => {
              setVisible(true);
            }}
          >
            <Text
              style={{
                color: "#ff0026",
                fontFamily: "Dosis_500Medium",
                fontSize: 25,
                alignSelf: "flex-start",
              }}
            >
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <LogOutCard visibleProp={visible}/> */}
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{ backgroundColor: "royalblue", borderRadius: 20 }}
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TabBarIcon name="logout" color="#FFFFFF" size={30} />
          </View>

          <Dialog.Title
            style={{
              fontFamily: "Dosis_700Bold",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Log out
          </Dialog.Title>
          <Dialog.Content>
            <Text
              style={{
                fontFamily: "Dosis_400Regular",
                color: "#FFFFFF",
                textAlign: "center",
                fontSize: 17,
              }}
            >
              Are you sure!.
            </Text>
            <Text
              style={{
                fontFamily: "Dosis_400Regular",
                color: "#FFFFFF",
                textAlign: "center",
                fontSize: 17,
              }}
            >
              You are going to log out from current account...
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              style={{ backgroundColor: "white", borderRadius: 10 }}
              onPress={() => {
                console.log("Cancel");
                setVisible(false);
              }}
            >
              <Text style={{ color: "#000000" }}>Cancel</Text>
            </Button>
            <Button
              style={{ backgroundColor: "red", borderRadius: 10 }}
              onPress={logOutUser}
            >
              <Text style={{ color: "#FFFFFF" }}>Log out!</Text>
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  myProfileImg: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "whitesmoke",
    padding: 10,
  },
});
