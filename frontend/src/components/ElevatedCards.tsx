import { Text, View, ScrollView, StyleSheet } from "react-native";
import React from "react";

export default function ElevatedCards() {
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
          width: 150,
          textAlign: "center",
          fontWeight: "900",
        }}
      >
        Elevated Cards
      </Text>

      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.ecitems}>
            <Text style={styles.ecitext}>Tap</Text>
          </View>
          <View style={styles.ecitems}>
            <Text style={styles.ecitext}>me</Text>
          </View>
          <View style={styles.ecitems}>
            <Text style={styles.ecitext}>to</Text>
          </View>
          <View style={styles.ecitems}>
            <Text style={styles.ecitext}>scroll</Text>
          </View>
          <View style={styles.ecitems}>
            <Text style={styles.ecitext}>more...</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 100,
    // backgroundColor: "whitesmoke",
    padding: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "auto",
  },
  ecitems: {
    height: 100,
    width: 100,
    // width: '20%',
    // borderWidth: 2,
    backgroundColor: "whitesmoke",
    margin: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ecitext: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    // elevation: 4,
    // shadowOffset:{
    //     height: 1,
    //     width: 1
    // },
    // shadowColor: '#000000',
    // shadowOpacity: 0.8s,
    // shadowRadius: 5
  },
});
