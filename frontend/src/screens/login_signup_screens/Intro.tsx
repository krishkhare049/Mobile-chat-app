import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Link } from "@react-navigation/native";
// import { RootStackParamList } from "../../App";
import { RootStackParamList } from "../../MainComponent";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Surface } from "react-native-paper";

type IntroProps = NativeStackScreenProps<RootStackParamList, "Intro">;

export default function Intro({ navigation }: IntroProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <StatusBar backgroundColor={"#fdbe00"} barStyle={"light-content"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View
          style={{
            backgroundColor: "#fdbe00",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.img}
            source={require("../../assets/smile.jpg")}
          />

          <Surface style={styles.loginInputView} elevation={5}>
            <View style={{ alignItems: "flex-start" }}>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: "600",
                  color: "#193088",
                  marginLeft: 30,
                  fontFamily: "Dosis_600SemiBold",
                }}
              >
                Welcome to
              </Text>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: "900",
                  color: "#fdbe00",
                  marginLeft: 30,
                  fontFamily: "Dosis_700Bold",
                }}
              >
                Masher
              </Text>
            </View>

            <Text
              style={{
                color: "#193088",
                fontSize: 16,
                marginBottom: 25,
                marginLeft: 20,
                fontFamily: "Dosis_600SemiBold",
              }}
            >
              "Connect, chat – welcome to your go-to messaging platform!"
            </Text>

            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                // marginBottom: 100,
                // marginBottom: 50,
              }}
            >
              {/* <TextInput
                inputMode="tel"
                placeholder="Your mobile no."
                style={styles.phoneInputBar}
                cursorColor={"#193088"}
                caretHidden={!isFocused}
                onFocus={() => {
                  setIsFocused(true);
                }}
              /> */}
              {/* <TextInput
                inputMode="email"
                placeholder="Your email"
                style={styles.phoneInputBar}
                cursorColor={"#193088"}
                caretHidden={!isFocused}
                onFocus={() => {
                  setIsFocused(true);
                }}
              /> */}

              {/* <CustomButton name="Get OTP" bgColor="#fdbe00" pressedColor="orange" onClick={()=>{navigation.push('AuthenticateOTP')}} customStyle={{}}/> */}
              <CustomButton
                name="Login"
                bgColor="#fdbe00"
                borRadius={25}
                pressedColor="orange"
                onClick={() => {
                  navigation.push("Login");
                }}
                customStyle={{ width: 200, borderRadius: 100, padding: 10 }}
              />

              {/* <Button title="Hide bar" onPress={hideNavigation} /> */}
            </View>

            <View
              style={{
                marginVertical: 30,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "#193088",
                  fontSize: 16,
                  // marginBottom: 25,
                  // marginLeft: 20,
                  fontFamily: "Dosis_600SemiBold",
                }}
              >
                Don't have an account,
              </Text>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{ padding: 5 }}
                onPress={() => {
                  navigation.push("Signup");
                }}
              >
                <Text
                  style={{
                    color: "#193088",
                    fontSize: 19,
                    // marginBottom: 25,
                    // marginLeft: 5,
                    fontFamily: "Dosis_700Bold",
                  }}
                >
                  Create new
                </Text>
              </TouchableOpacity>
            </View>
          </Surface>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  loginInputView: {
    backgroundColor: "#FFFFFF",
    // backgroundColor: "red",
    borderTopLeftRadius: 130,
    // borderTopRightRadius: 30,
    paddingTop: 20,
    paddingBottom: 10,
    // borderBottomColor: "white",
    // borderLeftColor: "white",
    // borderRightColor: "white",
    // borderTopColor: "whitesmoke",
    // borderWidth: 3,
    paddingHorizontal: 50,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  phoneInputBar: {
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
    fontFamily: "Dosis_400Regular",
  },
  img: {
    width: 350,
    height: 350,
  },
});
