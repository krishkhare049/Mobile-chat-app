import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FlatCards() {
  return (
    <>
      <Text
        style={{
          fontSize: 20,
          color: "#000000",
          backgroundColor: "whitesmoke",
          paddingHorizontal: 5,
          borderRadius: 5,
          margin: 15,
          width: 100,
          textAlign: 'center',
          fontWeight: '900'
        }}
      >
        FlatCards
      </Text>
      <View style={styles.container}>
        <View style={[styles.flitems, { backgroundColor: "red" }]}><Text style={styles.flitext}>Red</Text></View>
        <View style={[styles.flitems, { backgroundColor: "blue" }]}><Text style={styles.flitext}>Blue</Text></View>
        <View style={[styles.flitems, { backgroundColor: "yellow" }]}><Text style={styles.flitext}>Yellow</Text></View>
        <View style={[styles.flitems, { backgroundColor: "green" }]}><Text style={styles.flitext}>Green</Text></View>
        {/* <View style={[styles.flitems, { backgroundColor: "black" }]}><Text style={styles.flitext}>Black</Text></View> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 100,
    backgroundColor: "whitesmoke",
    padding: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "auto",
  },
  flitems: {
    height: 100,
    // width: 100,
    width: '20%',
    // borderWidth: 2,
    margin: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flitext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
