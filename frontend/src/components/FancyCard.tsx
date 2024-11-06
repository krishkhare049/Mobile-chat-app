import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function FancyCard() {
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
        Fancy Cards
      </Text>
      <View style={styles.fancyContainer}>
        {/* <Image source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        height: 100,
        width: 100
      }}/> */}
        <Image
          style={styles.img1}
          source={require("../assets/pexels-prateekkatyal-7389639.jpg")}
        />

        <View>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink city, Jaipur</Text>
          <Text style={styles.cardDesc}>
            This is Hawa Mahal of Rajasthan. Visit here. I will visit here very
            soon for my marriage with Riya
          </Text>
          <Text style={styles.cardFooter}>200 days left</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  fancyContainer: {
    backgroundColor: "black",
    padding: 5,
    // marginVertical: 2
    margin: 2,
    borderRadius: 10,
  },
  img1: {
    width: "100%",
    // height: 'auto'
    height: 300,
    // backgroundColor: '#000000',
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 21,
    color: "#FFFFFF",
    // backgroundColor: "whitesmoke",
    // paddingHorizontal: 5,
    borderRadius: 5,
    margin: 10,
    // width: 150,
    // textAlign: "center",
    fontWeight: "900",
  },
  cardLabel: {
    color: "#FFFFFF",
    // textAlign: "center",
    fontSize: 15,
    margin: 15,
  },
  cardDesc: {
    color: "#FFFFFF",
    // textAlign: "center",
    fontSize: 16,
    margin: 15,
  },
  cardFooter: {
    color: "#FFFFFF",
    // textAlign: "center",
    fontSize: 14,
    margin: 15,
  },
});
