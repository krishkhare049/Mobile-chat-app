import { StyleSheet, Text, View, SafeAreaView, Button, ScrollView, FlatList } from "react-native";
import React, { useRef } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../App";
import { RootStackParamList } from "../MainComponent";

import { useNavigation, useScrollToTop } from "@react-navigation/native";
// import Notifications from "./Notifications";

// const Tab = createBottomTabNavigator();
// const RootTab = createBottomTabNavigator<RootStackParamList>();
// const RootTab = createMaterialTopTabNavigator<RootStackParamList>();

type NotificationsProps = NativeStackScreenProps<
  RootStackParamList,
  "Notifications"
>;

// If we do not use navigation props then we can use hook
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Home from "./Home";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Notes from "./Notes";


// Sample notifications data

const notifications = [

  { id: '1', message: 'Your order has been shipped!', time: '2 hours ago' },

  { id: '2', message: 'New message from John Doe', time: '3 hours ago' },

  { id: '3', message: 'Your password has been changed successfully', time: '1 day ago' },

  { id: '4', message: 'Reminder: Meeting at 3 PM', time: '2 days ago' },

  { id: '5', message: 'New comment on your post', time: '3 days ago' },

];

// export default function Notifications({route, navigation}: NotificationsProps) {
export default function Notifications({ route, navigation }: NotificationsProps) {
  // const { userId, message } = route;

  // or
  // const navigation =
  //   useNavigation<
  //     NativeStackNavigationProp<RootStackParamList, "Notifications">
  //   >();

  const ScrollRef = useRef(null);

  // The expected native behavior of scrollable components is to respond to events from navigation that will scroll to top when tapping on the active tab as you would expect from native tab bars.
  // In order to achieve it we export useScrollToTop which accept ref to scrollable component (e,g. ScrollView or FlatList).
  useScrollToTop(ScrollRef);

  const renderItem = ({ item }: { item: { message: string; time: string } }) => (

    <View style={styles.notificationItem}>

      <Text style={styles.message}>{item.message}</Text>

      <Text style={styles.time}>{item.time}</Text>

    </View>

  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {/* <Text style={{ fontSize: 30, fontWeight: 700 }}>Notifications</Text> */}

        {/* <ScrollView showsVerticalScrollIndicator={false} ref={ScrollRef}> */}
        <FlatList

data={notifications}

renderItem={renderItem}

keyExtractor={(item) => item.id}

/>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,

    padding: 16,

    backgroundColor: '#f9f9f9',

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 16,

  },

  notificationItem: {

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#ccc',

  },

  message: {

    fontSize: 16,

  },

  time: {

    fontSize: 12,

    color: 'gray',

  },
});
