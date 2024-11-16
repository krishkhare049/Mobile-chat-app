import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabBarIcon from "./TabBarIcon";
import formatTime from "../utilities/formatDate";

export default function Message({isSender, text, createdAt}: {isSender: boolean, text: string, createdAt: string}) {
  return (
    <View style={[styles.container, isSender ? styles.sender : styles.receiver]}>

    <Text style={styles.text}>{text}</Text>

    {isSender ? (

      // <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>

      <View style={{marginRight: 5}}>
      <TabBarIcon name="check" size={15} color="gray"/>
      </View>
      <Text style={styles.time}>{formatTime(createdAt)}</Text>
      </View>

    ) : (
        <View>
        <Text style={styles.time}>{formatTime(createdAt)}</Text>

        {/* <Image */}
            </View>


    )}


  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    marginHorizontal: 15,
    borderRadius: 40,
    maxWidth: "70%",
    // minWidth: 150
    minWidth: 50
  },

  sender: {
    backgroundColor: "#f7d992",
    alignSelf: "flex-end",
    borderBottomRightRadius: 0
  },

  receiver: {
    backgroundColor: "#F7F7F7",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 0

  },

  text: {
    fontSize: 16,
    color: "black",
  },

  time: {
    fontSize: 12,
    color: "#666",
    // marginTop: 5,
    alignSelf: 'flex-end'
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#666",
    marginRight: 10,
  },
});
