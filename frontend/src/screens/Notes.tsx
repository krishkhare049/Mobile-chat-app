import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useRef } from "react";

import { useScrollToTop } from "@react-navigation/native";

// Components-
import FlatCards from "../components/FlatCards";
import ElevatedCards from "../components/ElevatedCards";
import FancyCard from "../components/FancyCard";
import ActionCard from "../components/ActionCard";
import ContactList from "../components/ContactList";

export default function Notes() {
  const ScrollRef = useRef(null);

  // The expected native behavior of scrollable components is to respond to events from navigation that will scroll to top when tapping on the active tab as you would expect from native tab bars.
  // In order to achieve it we export useScrollToTop which accept ref to scrollable component (e,g. ScrollView or FlatList).
  useScrollToTop(ScrollRef);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          // flex: 1,
          justifyContent: "center",
          // alignItems: "center",
          // position: "relative",
          // top: 0,
          // left: 0,
          paddingVertical: 10,
          backgroundColor: "#fdbe00",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: 600,
            color: "white",
            marginLeft: 20,
            fontFamily: 'Dosis_700Bold'
          }}
        >
          {/* Notes */}
          Masher
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} ref={ScrollRef}>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ActionCard />
          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
