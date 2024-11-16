import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
} from "react-native";
import React, { useRef, useState } from "react";
import { Surface } from "react-native-paper";
import TabBarIcon from "../components/TabBarIcon";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../App";
import { RootStackParamList } from "../MainComponent";
import SearchListElement from "../components/SearchListElement";
import axios from "axios";
import MessagingScreen from "./MessagingScreen";
import { axiosInstance } from "../utilities/axiosInstance"

// Sample data array

// const data = [
//   { id: 1, title: "Item 1" },

//   { id: 2, title: "Item 2" },

//   { id: 3, title: "Item 3" },

//   { id: 4, title: "Item 4" },

//   { id: 5, title: "Item 5" },
// ];

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

type SearchProps = NativeStackScreenProps<RootStackParamList, "Search">;

type searchResultsProps = {
  _id: string;
  full_name: string;
  profile_image_filename: {filename: string};
  user_email: string;
};

export default function Search({ navigation }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // const [searchResults, setSearchResults] = useState(data);
  const [searchResults, setSearchResults] = useState<
  searchResultsProps[]
>([])

  const handleSearch = (text: string) => {
    setSearchQuery(text);

    // const filteredData = data.filter((item) =>
    //   // item.title.toLowerCase().includes(text.toLowerCase())
    //   item.name.toLowerCase().includes(text.toLowerCase())
    // );

    // setSearchResults(filteredData);

    performSearch();
  };

  // const skip = useRef(0);
  const performSearch = () => {

    const query = searchQuery.trim() || 'default'

    console.log('searchQuery::::::::::::::::::::::::::::::::::::::')
    console.log(searchQuery)

    if(query === 'default'){
      setSearchResults([])
      return;
    }
    axiosInstance
      .get("/api/users/searchUserByName/" +
          // searchQuery,
          query,
          // +
          // "/" +
          // skip.current,
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data);
        setSearchResults(response.data);
      })
      // .catch((error) => console.log("Error" + error));
  };

  return (
    <>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <Surface
        elevation={3}
        style={{
          // flex: 1,
          flexDirection: "row",
          // justifyContent: "center",
          justifyContent: "space-evenly",
          alignItems: "center",
          // position: "relative",
          // top: 0,
          // left: 0,
          // paddingLeft: 20,
          paddingVertical: 5,
          // backgroundColor: "#fdbe00",
          backgroundColor: "white",
          zIndex: 2,
          // paddingHorizontal: 10
        }}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [
            {
              // borderWidth: 2,
              // width: 100,
              // padding: 5,
              // borderRadius: 10,
              //   ...customStyle,
              backgroundColor: pressed ? "whitesmoke" : "white",
              borderRadius: 100,
              padding: 5,
            },
          ]}
        >
          <TabBarIcon
            name={"arrowLeft"}
            // color={focused ? "#fdbe00" : "gainsboro"}
            // color={"white"}
            color={"#193088"}
            size={35}
          />
        </Pressable>

        <TextInput
          style={styles.inputBar}
          placeholder="Search friends, people, contacts..."
          value={searchQuery}
          onChangeText={handleSearch}
          cursorColor={"#193088"}
        />
        {/* <TextInput
            style={styles.inputBar}
            underlineStyle={{ display: "none" }}
            value={searchQuery}
            onChangeText={handleSearch}
            // label="Your text..."
            label={
              // return (
              <Text
                style={{
                  // color: "gray",
                  color: "white",
                  backgroundColor: "#fdbe00",
                  // borderRadius: 20,
                  // padding: 2,
                  textAlign: "center",

                }}
              >Search friends, people, contacts</Text>
              // )
            }
            placeholderTextColor={"gainsboro"}
            outlineStyle={{
              // borderColor: "gainsboro",
              borderWidth: 0,
              borderRadius: 25,
              // borderTopRightRadius: 0,
              // borderBottomRightRadius: 0,
              // backgroundColor: '#fdbe00'
              // height: '100%'
              margin: 0,
              padding: 0
            }}
            mode="outlined"
            cursorColor="white"
            //   right={
            //     // <TextInput.Icon
            //     //   icon={"mic-circle-sharp"}
            //     //   color={"#193088"}
            //     //   onPress={() => {}}
            //     // />
            //     <TabBarIcon name='send' size={25} color="red"/>
            //   }
          /> */}
      </Surface>

      <View style={styles.container}>
        <FlatList
          data={searchResults}
          renderItem={({ item }) => (
            <SearchListElement
              name={item.full_name}
              profileImageUrl={item.profile_image_filename.filename}
              onClick={() => {
                navigation.push("MessagingScreen", {
                  conversationId: 'find_through_page_using_otherParticipant',
                  otherParticipantId: item._id,
                  otherParticipantName: item.full_name,
                  imageUrl: item.profile_image_filename.filename
                });
              }}
            />
          )}
          // keyExtractor={(item) => item.id.toString()}
          // keyExtractor={(item) => item._id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
    backgroundColor: "white",
    // marginTop: 10
    zIndex: 1,
  },
  inputBar: {
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    // borderRadius: 45,
    // backgroundColor: "whitesmoke",
    backgroundColor: "white",
    // backgroundColor: "transparent",
    // borderWidth: 2,
    borderBottomWidth: 1,
    // paddingVertical: 5,
    padding: 10,
    // borderColor: "white",
    borderColor: "gainsboro",
    width: "70%",
    // width: "100%",
    // maxWidth: 270,
    color: "#193088",
    // marginHorizontal: "auto",
    fontSize: 18,
    marginBottom: 5,
    // textAlign: "center",
    // marginTop: 5,
    fontFamily: "Dosis_500Medium",
  },
  // item: {
  //   padding: 10,
  //   borderBottomWidth: 1,
  //   borderBottomColor: "#ccc",
  // },
});
