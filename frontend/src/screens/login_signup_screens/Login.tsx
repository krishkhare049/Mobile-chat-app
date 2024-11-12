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
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Link } from "@react-navigation/native";
// import { RootStackParamList } from "../../App";
import { RootStackParamList } from "../../MainComponent";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Surface } from "react-native-paper";
import axios from "axios";

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

const env = process.env.NODE_ENV;
let API_URL = process.env.EXPO_PUBLIC_API_URL;

// if(env==='development' && Platform.OS === 'android'){
//   API_URL = 'http://10.0.2.2:5000'
// }

import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../loggedSlice";


export default function Login({ navigation }: LoginProps) {
  const dispatch = useDispatch();

  const [isFocused, setIsFocused] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [clickedOnLogin, setClickedOnLogin] = useState(false);

  const loginAccount = () => {
    axios
      .post(
        // "http://localhost:5000/createAccount",
        // API_URL + "/logInToAccount",
        API_URL + "/api/auth/login",
        {
          login_email: loginEmail,
          login_password: loginPassword,
        },
        { withCredentials: true }
      )

      .then((response) => {
        console.log(response.data)
        if (response.data === "user_not_found") {
          console.log("No user found with these credentials. Invalid email and password!");

          setClickedOnLogin(false)

          // Swal.fire({
          //   title: "Email is taken already!",

          //   text: "Try again with different email. If you are the user of this email, please login...",

          //   icon: "error",
          // });
        } 
        else if (response.data.message === "logged_in_successfully") {

          // setLog(true);
          // setToken(response.data.token)
          SecureStore.setItemAsync("secure_token", response.data.token);
          setClickedOnLogin(false)
          // navigation.popToTop()
          
          dispatch(setLoggedIn())


        }
        else{

        }
      })

      .catch((error) => console.log("Error" + error));
  };

  return (
    <>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />

      {/* <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}> */}
      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }} keyboardShouldPersistTaps='handled'>
        {/* <Surface style={styles.loginInputView} elevation={5}> */}

        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            // marginBottom: 100,
            //   marginBottom: 50,
            marginTop: 100,
          }}
        >

<Image
            style={styles.img}
            source={require("../../assets/smile.jpg")}
          />


          <Text
            style={{ color: "#193088", fontFamily: "Dosis_700Bold", fontSize: 26, marginBottom: 30, }}
          >
            Login to your account
          </Text>
          <Text
            style={{ fontFamily: "Dosis_400Regular", fontSize: 16, margin: 5 }}
          >
            Enter your email address
          </Text>
          <TextInput
            inputMode="email"
            placeholder="Your email !"
            style={styles.inputBar}
            cursorColor={"#193088"}
            caretHidden={!isFocused}
            onFocus={() => {
              setIsFocused(true);
            }}
            value={loginEmail}
            onChangeText={setLoginEmail}
          />

          <Text
            style={{ fontFamily: "Dosis_400Regular", fontSize: 16, margin: 5 }}
          >
            Enter your password
          </Text>
          <TextInput
            inputMode="text"
            placeholder="Your password !"
            style={styles.inputBar}
            cursorColor={"#193088"}
            caretHidden={!isFocused}
            onFocus={() => {
              setIsFocused(true);
            }}
            value={loginPassword}
            onChangeText={setLoginPassword}
          />

          {/* <CustomButton name="Get OTP" bgColor="#fdbe00" pressedColor="orange" onClick={()=>{navigation.push('AuthenticateOTP')}} customStyle={{}}/> */}
          {clickedOnLogin ? (
            <ActivityIndicator
              size={50}
              color={"#193088"}
              style={{ marginTop: 10 }}
            />
          ) : (
            <CustomButton
              name="Log In"
              bgColor="#193088"
              borRadius={10}
              pressedColor="#142666"
              onClick={() => {
                // storage.set('logsave', 'Marc')
                loginAccount();
                // navigation.push("AddDetailsOnFirstTime");
                setClickedOnLogin(true);
              }}
              // customStyle={{ backgroundColor: "#193088", marginTop: 10 }}
              customStyle={{ backgroundColor: "#193088" }}
            />
          )}

          {/* <Button title="Hide bar" onPress={hideNavigation} /> */}
        </View>
        {/* </Surface> */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  loginInputView: {
    backgroundColor: "#FFFFFF",
    // backgroundColor: "red",
    //   borderTopLeftRadius: 130,
    // borderTopRightRadius: 30,
    paddingTop: 10,
    paddingBottom: 10,
    // borderBottomColor: "white",
    // borderLeftColor: "white",
    // borderRightColor: "white",
    // borderTopColor: "whitesmoke",
    // borderWidth: 3,
    paddingHorizontal: 50,
    //   position: "absolute",
    //   bottom: 110,
    width: "100%",
  },
  inputBar: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 15,
    backgroundColor: "whitesmoke",
    borderWidth: 2,
    borderColor: "whitesmoke",
    width: 250,
    color: "#193088",
    marginHorizontal: "auto",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "Dosis_400Regular",
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
});
