import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  RefreshControl,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useRef, useState, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// import { RootStackParamList } from "../App";
import { RootStackParamList } from "../MainComponent";
import { axiosInstance } from "../utilities/axiosInstance";

import { useScrollToTop } from "@react-navigation/native";

import MessagesCardElement from "../components/MessagesCardElement";
import PressableIcon from "../components/PressableIcon";
import axios from "axios";
import { string } from "yup";
import NoConversations from "../components/NoConversations";
// import { StatusBar } from "expo-status-bar";

type ChatProps = NativeStackScreenProps<RootStackParamList, "Chats">;

const data = [
  {
    conversationId: "9lkjfs30ru",
    otherParticipantName: "Riya Gupta",
    otherParticipant: "fdkjslfjewkjkl",
    lastMessage: "see you tomorrow",
    imageUrl:
      "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

type conversationProps = {
  conversations: any;
  full_name: string;
  _id: string;
  profile_image_filename: any;
  otherParticipantProfileImage: string;
  lastUpdated: string;
  otherParticipantId: string;
  conversationFieldElementId: string;
  conversationId: string;
  otherParticipantName: string;
  lastMessage: string;
  imageUrl: string;
};

// Response sample-
// [
//   {
//     _id: "6734383c1118c4e77c614cd4",
//     conversations: {
//       _id: "6736dd43ce74a547b35579e0",
//       conversationId: "6736dd43ce74a547b35579dd",
//       createdAt: "2024-11-15T05:33:55.946Z",
//       lastMessage: "Hey",
//       lastUpdated: "2024-11-15T05:33:55.938Z",
//       otherParticipant: "6734a0ddae228530d3da294b",
//     },
//     userConversations: {
//       __v: 0,
//       _id: "6736dd43ce74a547b35579dd",
//       createdAt: "2024-11-15T05:33:55.930Z",
//       messageIds: [Array],
//       participants: [Array],
//       updatedAt: "2024-11-15T05:33:55.930Z",
//     },
//   },
//   {
//     _id: "673439306753481edabf3d93",
//     conversations: {
//       _id: "6734a0ddae228530d3da294d",
//       conversationId: "6734a0ddae228530d3da294b",
//       createdAt: "2024-11-13T12:51:41.555Z",
//       lastMessage: "Hi Riya 😊",
//       lastUpdated: "2024-11-13T12:51:41.548Z",
//       otherParticipant: "673439306753481edabf3d93",
//     },
//     full_name: "Krish Khare 2",
//     profile_image_filename: { filename: "default_profile_image" },
//     userConversations: {
//       __v: 0,
//       _id: "6734a0ddae228530d3da294b",
//       createdAt: "2024-11-13T12:51:41.545Z",
//       messageIds: [Array],
//       participants: [Array],
//       updatedAt: "2024-11-13T14:02:01.997Z",
//     },
//   },
// ];

export default function Chats({ navigation }: ChatProps) {
  const [conversationsData, setconversationsData] = useState<
    conversationProps[]
  >([]);
  const [jsonData, setJsonData] = useState(null);
  const [loadingChats, setLoadingChats] = useState(true);

  const skip = useRef(0);

  const loadConversations = () => {
    // console.log(skip.current)
    axiosInstance
      .get("/api/users/getUserConversations/" + skip.current, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setconversationsData(response.data);

        setLoadingChats(false);
      })
      .catch((error) => {
        console.log("Error" + error);
        setLoadingChats(false)

      });
  };

  useEffect(() => {
    // Load conversations-
    loadConversations();
  }, []);

  const refreshData = () => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos/")
    //   .then((response) => {
    //     setJsonData(response.data);
    //   });

    loadConversations();
    console.log(conversationsData.length);
  };

  // useEffect(() => {
  //   // axios.get('https://jsonplaceholder.typicode.com/todos/').then((response)=>{
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos/2")
  //     .then((response) => {
  //       setJsonData(response.data);
  //     });
  // }, []);

  const ScrollRef = useRef(null);

  // The expected native behavior of scrollable components is to respond to events from navigation that will scroll to top when tapping on the active tab as you would expect from native tab bars.
  // In order to achieve it we export useScrollToTop which accept ref to scrollable component (e,g. ScrollView or FlatList).
  useScrollToTop(ScrollRef);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refreshData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
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

            {loadingChats && (
              <ActivityIndicator
                size={50}
                color={"#000000"}
                style={{ margin: 10 }}
              />
            )}

            {conversationsData.length !== 0 ? (
              // conversationId: userChatConversations[0].conversations._id,
              // otherParticipantId: userChatConversations[0].conversations.otherParticipant,
              // lastUpdated: userChatConversations[0].conversations.lastUpdated,
              // lastMessage: userChatConversations[0].conversations.lastMessage,
              // conversationFieldElementId: userChatConversations[0].conversations._id,
              // otherParticipantName: otherUser.full_name,
              // otherParticipantProfileImage: otherUser.profile_image_filename
              <FlatList
                // data={conversationsData}
                data={conversationsData}
                renderItem={({ item }) => (
                  <MessagesCardElement
                    conversationId={item.conversations.conversationId}
                    otherParticipantId={item.conversations.otherParticipant}
                    otherParticipantName={item.full_name}
                    lastMessage={item.conversations.lastMessage}
                    lastUpdated={item.conversations.lastUpdated}
                    conversationFieldElementId={item._id}
                    imageUrl={item.profile_image_filename.filename}
                    onClick={() =>
                      navigation.push("MessagingScreen", {
                        conversationId: item.conversations.conversationId,
                        otherParticipantId: item.conversations.otherParticipant,
                        otherParticipantName: item.full_name,
                        imageUrl: item.profile_image_filename.filename,
                      })
                    }
                  />
                )}
                // keyExtractor={item => item.id}
                initialNumToRender={10}
                // keyExtractor={(item) => item.conversationId.toString()} // Ensure to return a string
                keyExtractor={(item) => item._id} // Ensure to return a string
                scrollEnabled={false}
              />
            ) : (
              <NoConversations />
            )}

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
