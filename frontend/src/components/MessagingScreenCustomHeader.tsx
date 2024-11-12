import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import TabBarIcon from "./TabBarIcon";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../MainComponent";

export default function MessagingScreenCustomHeader({
  name,
  imageUrl,
}: {
  name: string;
  imageUrl: string;
}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Home">>();

  return (
    <View
      style={{
        // flex: 1,
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
        // position: "relative",
        // top: 0,
        // left: 0,
        // paddingLeft: 15,
        paddingVertical: 5,
        // backgroundColor: "#fdbe00",
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 5,
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
            backgroundColor: pressed
              ? "rgba(255, 255, 255, 0.3)"
              : "transparent",
            borderRadius: 100,
            padding: 5,
            marginLeft: 10

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

      <Image
        style={styles.img}
        source={{
          uri: imageUrl,
        }}
      />

      <Text
        style={{
          fontSize: 22,
          fontWeight: 600,
          color: "white",
          marginLeft: 15,
          fontFamily: "Dosis_700Bold",
          // backgroundColor: 'red',
        }}
        
      >
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    marginLeft: 10

  },
});
