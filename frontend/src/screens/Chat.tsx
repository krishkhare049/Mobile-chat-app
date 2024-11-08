import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  RefreshControl,
  FlatList,
} from "react-native";
import React, { useCallback, useRef, useState, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// import { RootStackParamList } from "../App";
import { RootStackParamList } from "../MainComponent";


import { useScrollToTop } from "@react-navigation/native";

import MessagesCardElement from "../components/MessagesCardElement";
import PressableIcon from "../components/PressableIcon";
import axios from "axios";
// import { StatusBar } from "expo-status-bar";

type ChatProps = NativeStackScreenProps<RootStackParamList, "Chats">;

const data = [
  {
    id: 1,
    name: "Name",
    lastMsg: "last message",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    name: "Name",
    lastMsg: "last message",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    name: "Name",
    lastMsg: "last message",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    name: "Name",
    lastMsg: "last message",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    name: "Name",
    lastMsg: "last message",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    name: "Name",
    lastMsg: "last message",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    name: "Name",
    lastMsg: "last message",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    name: "Name",
    lastMsg: "last message",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    name: "Name",
    lastMsg: "last message",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    name: "Name",
    lastMsg: "last message",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    name: "Name",
    lastMsg: "last message",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    name: "Name",
    lastMsg: "last message",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    name: "Name",
    lastMsg: "last message",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    name: "Name",
    lastMsg: "last message",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  // {
  //   id: 2,
  //   name: "Riya Gupta",
  //   lastMsg: "see you tomorrow",
  //   imageUrl:
  //     "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  // },
  // {
  //   id: 3,
  //   name: "Riya Gupta",
  //   lastMsg: "see you tomorrow",
  //   imageUrl:
  //     "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  // },
  // {
  //   id: 4,
  //   name: "Riya Gupta",
  //   lastMsg: "see you tomorrow",
  //   imageUrl:
  //     "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  // },
  // {
  //   id: 5,
  //   name: "Riya Gupta",
  //   lastMsg: "see you tomorrow",
  //   imageUrl:
  //     "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  // },
  // {
  //   id: 6,
  //   name: "Riya Gupta",
  //   lastMsg: "see you tomorrow",
  //   imageUrl:
  //     "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  // },
  // {
  //   id: 7,
  //   name: "Riya Gupta",
  //   lastMsg: "see you tomorrow",
  //   imageUrl:
  //     "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  // },
  {
    id: 8,
    name: "Riya Gupta",
    lastMsg: "see you tomorrow",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

export default function Chats({ navigation }: ChatProps) {
  const [jsonData, setJsonData] = useState(null);

  const refreshData = () =>{
    axios
    .get("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => {
      setJsonData(response.data);
    });
  }

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/todos/').then((response)=>{
    axios
      .get("https://jsonplaceholder.typicode.com/todos/2")
      .then((response) => {
        setJsonData(response.data);
      });
  }, []);

  const ScrollRef = useRef(null);

  // The expected native behavior of scrollable components is to respond to events from navigation that will scroll to top when tapping on the active tab as you would expect from native tab bars.
  // In order to achieve it we export useScrollToTop which accept ref to scrollable component (e,g. ScrollView or FlatList).
  useScrollToTop(ScrollRef);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refreshData()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View
            style={{
              // flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              // position: "relative",
              // top: 0,
              // left: 0,
              // paddingVertical: 10,
              paddingVertical: 7,
              paddingRight: 10,
              backgroundColor: "#fdbe00",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0,
                marginLeft: 10,
              }}
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={require("../assets/smileIcon.jpg")}
              />
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 600,
                  color: "white",
                  // marginLeft: 20,
                  fontFamily: "Dosis_700Bold",
                }}
              >
                {/* Chats */}
                Masher
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: 100,
                justifyContent: "space-evenly",
              }}
            >
              {/* <Pressable onPress={()=>{navigation.push('Search')}} >
                <TabBarIcon
                  name={"search"}
                  // color={focused ? "#fdbe00" : "gainsboro"}
                  color={"white"}
                  size={30}
                />
              </Pressable> */}
              {/* <Pressable onPress={()=>{navigation.push('Notifications')}}>
                <TabBarIcon
                  name={"notifications"}
                  // color={focused ? "#fdbe00" : "gainsboro"}
                  color={"white"}
                  size={30}
                />
              </Pressable> */}
              <PressableIcon
                iconName="search"
                iconSize={30}
                iconColor="white"
                onClick={() => {
                  navigation.push("Search");
                }}
              />
              <PressableIcon
                iconName="notifications"
                iconSize={30}
                iconColor="white"
                onClick={() => {
                  navigation.push("Notifications");
                }}
              />
            </View>
          </View>
          {/* <Text style={{fontSize: 30, fontWeight: 700}}>Home</Text> */}

          <ScrollView
            showsVerticalScrollIndicator={false}
            ref={ScrollRef}
            refreshControl={
              <RefreshControl
                progressBackgroundColor={"white"}
                colors={["#fdbe00", "orange", "black"]}
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
          >
            {/* <ContactList />
            <ContactList />
            <ContactList />
            <ContactList />
            <ContactList /> */}

            {/* <MessagesCardElement name="Name" lastMsg="Last msg..." imageUrl="https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" onClick={()=>{navigation.push('MessagingScreen')}} /> */}

            <FlatList
              data={data}
              renderItem={({item}) => <MessagesCardElement name={item.name} lastMsg={item.lastMsg} imageUrl={item.imageUrl} onClick={()=> navigation.push('MessagingScreen')}/>}
              // keyExtractor={item => item.id}
              initialNumToRender={10}
              keyExtractor={(item) => item.id.toString()} // Ensure to return a string
              scrollEnabled={false}
              />
            <FlatList
              data={jsonData}
              renderItem={({ item }) => (
                <View
                  style={{
                    borderBottomWidth: 1,
                    // height: 300,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    style={{ width: "100%", height: 300 }}
                    source={{
                      uri: "https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    }}
                    // defaultSource={require("../assets/skeletonLoadingPlaceholder.gif")}
                    loadingIndicatorSource={require("../assets/icon.png")}
                  />
                  <Text>User id: {item.userId}</Text>
                  <Text>Title: {item.title}</Text>
                  <Text>Is completed: {item.completed.toString()}</Text>
                </View>
              )}
              // keyExtractor={item => item.id}
              initialNumToRender={10}
              keyExtractor={(item) => item.id.toString()} // Ensure to return a string
              scrollEnabled={false}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
