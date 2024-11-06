import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput
} from "react-native";
import React, { useRef, useState } from "react";
import CustomButton from "../../components/CustomButton";
//   import { Link } from "@react-navigation/native";
// import { RootStackParamList } from "../../App";
import { RootStackParamList } from "../../MainComponent";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import OTPTextView from "react-native-otp-textinput";

type AuthenticateOTPProps = NativeStackScreenProps<
  RootStackParamList,
  "AuthenticateOTP"
>;

export default function AuthenticateOTP({ navigation }: AuthenticateOTPProps) {
  const [otpInput, setOtpInput] = useState<string>("");

  const input = useRef<OTPTextView>(null);

  const clear = () => input.current?.clear();

  const updateOtpText = () => input.current?.setValue(otpInput);

  const showTextAlert = () => otpInput && Alert.alert(otpInput);
  const handleCellTextChange = async (text: string, i: number) => {
    if (i === 0) {
      const clippedText = await Clipboard.toString();
      if (clippedText.slice(0, 1) === text) {
        input.current?.setValue(clippedText, true);
      }
    }
  };
  

  return (
    <>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        {/* <View style={{ backgroundColor: "#fdbe00", flex: 1 }}> */}
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.OTPInputView}>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: "#193088",
                  textAlign: "center",
                  margin: 20,
                  fontFamily: "Dosis_700Bold",
                }}
              >
                {/* Enter your OTP! */}
                Enter your Password!
              </Text>
            </View>

            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 100,
              }}
            >
              {/* <OTPTextView
                ref={input}
                containerStyle={{ marginBottom: 20 }}
                handleTextChange={setOtpInput}
                tintColor="#193088"
                textInputStyle={{backgroundColor: 'gainsboro', borderRadius: 10}}
                // handleCellTextChange={handleCellTextChange}
                inputCount={6}
                keyboardType="numeric"
              /> */}

              <TextInput
                inputMode="text"
                placeholder="Your password"
                style={styles.phoneInputBar}
                cursorColor={"#193088"}
                // caretHidden={!isFocused}
                // onFocus={() => {
                //   setIsFocused(true);
                // }}
              />

              {/* <Text>{otpInput}</Text> */}

              <CustomButton
                name="Done!"
                bgColor="#fdbe00"
                borRadius={10}
                pressedColor="orange"
                onClick={() => {

                  navigation.push("AddDetailsOnFirstTime");
                }}
                customStyle={{}}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  OTPInputView: {
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
    fontFamily: 'Dosis_400Regular'
  },
});
