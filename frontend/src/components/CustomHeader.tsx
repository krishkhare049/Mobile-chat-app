import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import TabBarIcon from "./TabBarIcon";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../MainComponent";
import { Surface } from "react-native-paper";

export default function CustomHeader({ name }: { name: string }) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Home">>();

  return (
    <Surface
    elevation={4}
      style={{
        // flex: 1,
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
        // position: "relative",
        // top: 0,
        // left: 0,
        paddingLeft: 20,
        paddingVertical: 5,
        backgroundColor: "#fdbe00",
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
            backgroundColor: pressed ? "rgba(255, 255, 255, 0.3)" : "transparent",
            borderRadius: 100, 
            padding: 5
          },
        ]}
      >
        <TabBarIcon
          name={"arrowLeft"}
          // color={focused ? "#fdbe00" : "gainsboro"}
          color={"white"}
          size={35}
        />
      </Pressable>

      <Text
        style={{
          fontSize: 25,
          fontWeight: 600,
          color: "white",
          marginLeft: 20,
          fontFamily: "Dosis_700Bold",
        }}
      >
        {name}
      </Text>
    </Surface>
  );
}

const styles = StyleSheet.create({});
