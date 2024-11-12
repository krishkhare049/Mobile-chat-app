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
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Link } from "@react-navigation/native";
// import { RootStackParamList } from "../../App";
import { RootStackParamList } from "../../MainComponent";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Surface } from "react-native-paper";
import axios from "axios";

import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../loggedSlice";


type SignupProps = NativeStackScreenProps<RootStackParamList, "Signup">;

const env = process.env.NODE_ENV;
let API_URL = process.env.EXPO_PUBLIC_API_URL;

// if(env==='development' && Platform.OS === 'android'){
//   API_URL = 'http://10.0.2.2:5000'
// }

export default function Signup({ navigation }: SignupProps) {

  const dispatch = useDispatch();

  // const [isFocused, setIsFocused] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState("");

  const [clickedOnCreate, setClickedOnCreate] = useState(false);

  // console.log(API_URL)

  const createAccount = () => {
    axios
      .post(
        // "http://localhost:5000/createAccount",
        // API_URL + "/createAccount",
        API_URL + "/api/auth/signup",
        {
          full_name: newName,
          user_email: newEmail,
          user_password: newPassword,
        },
        { withCredentials: true }
      )

      .then((response) => {
        console.log(response.data)
        if (response.data === "account_already_exists") {
          console.log("Account with this email already exists");

          setClickedOnCreate(false)

          // Swal.fire({
          //   title: "Email is taken already!",

          //   text: "Try again with different email. If you are the user of this email, please login...",

          //   icon: "error",
          // });
        } 
        else if (response.data.message === "signed_up_successfully") {

          // setLog(true);
          // setToken(response.data.token)
          SecureStore.setItemAsync("secure_token", response.data.token);
          setClickedOnCreate(false)
          // navigation.popToTop()

          dispatch(setLoggedIn())

        }
        else{

        }
      })

      .catch((error) => console.log("Error" + error));

    // console.log(API_URL)

    // axios.get(`${API_URL}/kk`)
    // // axios.get(`http://192.168.179.88:5000/kk`) // Working
    // // axios.get(`https://jsonplaceholder.typicode.com/todos/`)

    // .then((res) => {

    //   console.log(res.data);

    // })

    // .catch((error) => {

    //   if (axios.isAxiosError(error)) {

    //     console.error('Axios error:', error.message);

    //   } else {

    //     console.error('Unexpected error:', error);

    //   }

    // });
  };

  return (
    <>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />

      <ScrollView
        style={{ flex: 1, backgroundColor: "#FFFFFF" }}
        keyboardShouldPersistTaps="handled"
      >
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
            style={{
              color: "#193088",
              fontFamily: "Dosis_700Bold",
              fontSize: 26,
              marginBottom: 30,
            }}
          >
            Create your account
          </Text>
          <Text
            style={{ fontFamily: "Dosis_400Regular", fontSize: 16, margin: 5 }}
          >
            What's Your good name?
          </Text>
          <TextInput
            inputMode="email"
            placeholder="Your good name !"
            style={styles.inputBar}
            cursorColor={"#193088"}
            //   caretHidden={!isFocused}
            //   onFocus={() => {
            //     setIsFocused(true);
            //   }}
            value={newName}
            onChangeText={setNewName}
          />
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
            //   caretHidden={!isFocused}
            //   onFocus={() => {
            //     setIsFocused(true);
            //   }}
            value={newEmail}
            onChangeText={setNewEmail}
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
            //   caretHidden={!isFocused}
            //   onFocus={() => {
            //     setIsFocused(true);
            //   }}
            value={newPassword}
            onChangeText={setNewPassword}
          />

          {/* <CustomButton name="Get OTP" bgColor="#fdbe00" pressedColor="orange" onClick={()=>{navigation.push('AuthenticateOTP')}} customStyle={{}}/> */}
          {/* <CustomButton
            name="Create"
            bgColor="#193088"
            pressedColor="#142666"
            onClick={() => {
              // storage.set('logsave', 'Marc')
              // createAccount()
              // navigation.push("AddDetailsOnFirstTime");
            }}
            customStyle={{ backgroundColor: "#193088", marginTop: 10 }}
          /> */}

          {clickedOnCreate ? (
            <ActivityIndicator
              size={50}
              color={"#193088"}
              style={{ marginTop: 10 }}
            />
          ) : (
            <CustomButton
              name="Create"
              bgColor="#193088"
              borRadius={10}
              pressedColor="#142666"
              onClick={() => {
                // storage.set('logsave', 'Marc')
                createAccount();
                // navigation.push("AddDetailsOnFirstTime");
                setClickedOnCreate(true);
              }}
              // customStyle={{ backgroundColor: "#193088", marginTop: 10 }}
              customStyle={{ backgroundColor: "#193088"}}
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
  // loginInputView: {
  //   backgroundColor: "#FFFFFF",
  //   // backgroundColor: "red",
  //   //   borderTopLeftRadius: 130,
  //   // borderTopRightRadius: 30,
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   // borderBottomColor: "white",
  //   // borderLeftColor: "white",
  //   // borderRightColor: "white",
  //   // borderTopColor: "whitesmoke",
  //   // borderWidth: 3,
  //   paddingHorizontal: 50,
  //   //   position: "absolute",
  //   //   bottom: 110,
  //   width: "100%",
  // },
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
