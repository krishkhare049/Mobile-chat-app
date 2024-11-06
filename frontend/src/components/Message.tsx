import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Message({isSender, message}: {isSender: boolean, message: string}) {
  return (
    <View style={[styles.container, isSender ? styles.sender : styles.receiver]}>

    <Text style={styles.text}>{message}</Text>

    {isSender ? (

      <Text style={styles.time}>{new Date().toLocaleTimeString()}</Text>

    ) : (
        <View>
        <Text style={styles.time}>{new Date().toLocaleTimeString()}</Text>

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
    minWidth: 150
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
    marginTop: 5,
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
