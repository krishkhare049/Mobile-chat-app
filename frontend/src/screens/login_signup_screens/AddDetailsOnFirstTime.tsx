// IF user account is created first then show this page else move to navigation directly

import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../../components/CustomButton";
//   import { Link } from "@react-navigation/native";
// import { RootStackParamList } from "../../App";
import { RootStackParamList } from "../../MainComponent";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

// import { MMKV } from 'react-native-mmkv'

// Create and initialise the MMKV instance
// export const storage = new MMKV();

type AddDetailsOnFirstTimeProps = NativeStackScreenProps<
  RootStackParamList,
  "AddDetailsOnFirstTime"
>;

export default function AddDetailsOnFirstTime({
  navigation,
}: AddDetailsOnFirstTimeProps) {

  return (
    <>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        {/* <View style={{ backgroundColor: "#fdbe00", flex: 1 }}> */}
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={styles.img}
            source={require("../../assets/smile.jpg")}
          />

          <View style={styles.SignupInputView}>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: "#193088",
                  textAlign: "center",
                  margin: 10,
                  fontFamily: "Dosis_700Bold",
                }}
              >
                hey! Dear
              </Text>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 100,
              }}
            >

              <TextInput
                inputMode="text"
                placeholder="Your good name!"
                style={styles.nameInputBar}
                cursorColor={"#193088"}
                //   caretHidden={!isFocused}
                //   onFocus={() => {
                //     setIsFocused(true);
                //   }}
              />


              {/* When it will go to top again then user will see home etc tab navigation because there will be token present */}
              <CustomButton
                name="Go!"
                bgColor="#193088"
                borRadius={10}
                pressedColor="#142666"
                onClick={() => {
                  // storage.set('logsave', 'Marc')
                  navigation.popToTop();
                }}
                // customStyle={{ backgroundColor: "#193088", marginTop: 10 }}
                customStyle={{ backgroundColor: "#193088" }}
              />

            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  SignupInputView: {
    width: "100%",
  },
  nameInputBar: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "whitesmoke",
    borderWidth: 2,
    borderColor: "whitesmoke",
    width: 200,
    color: "#193088",
    marginHorizontal: "auto",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Dosis_400Regular",
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
});
