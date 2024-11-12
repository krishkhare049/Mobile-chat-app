import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MessagingScreenCustomHeader from "../components/MessagingScreenCustomHeader";
import { Surface, TextInput } from "react-native-paper";
import Message from "../components/Message";
import TabBarIcon from "../components/TabBarIcon";
import axios from "axios";
import { RootStackParamList } from "../MainComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

let API_URL = process.env.EXPO_PUBLIC_API_URL;

type MessagingScreenProps = NativeStackScreenProps<RootStackParamList, "MessagingScreen">;

// export default function MessagingScreen({conversationId, otherParticipant}: {conversationId: string, otherParticipant: string}) {
export default function MessagingScreen({route}: MessagingScreenProps) {

  const { conversationId, otherParticipant } =  route.params || { conversationId: '', otherParticipant: '' };


// export default function MessagingScreen() {
  const messages = [
    { text: "Hi! Krish", isSender: true },
    { text: "Hello! How are you?", isSender: false },
    { text: "I'm good, thanks! And you?", isSender: true },
    { text: "Doing well! Just working on some projects.", isSender: false },
    { text: "Sounds great! Let me know if you need help.", isSender: true },
    {
      text: "I appreciate it! I might need some input on my coding.",
      isSender: false,
    },
    { text: "Of course! What are you working on?", isSender: true },
    { text: "I'm building a React Native app.", isSender: false },
    {
      text: "That sounds exciting! What features are you planning to implement?",
      isSender: true,
    },

    {
      text: "I want to include a chat feature and a user authentication system.",
      isSender: false,
    },

    {
      text: "Both are essential! Have you thought about the backend?",
      isSender: true,
    },

    { text: "Yes, I'm considering using Firebase for that.", isSender: false },

    {
      text: "Great choice! Firebase simplifies a lot of things.",
      isSender: true,
    },

    {
      text: "Exactly! I'm looking forward to getting it all set up.",
      isSender: false,
    },

    { text: "Let me know if you need any help along the way!", isSender: true },

    { text: "Will do! I'm also exploring some UI libraries.", isSender: false },

    { text: "Which ones are you considering?", isSender: true },

    {
      text: "I'm looking at NativeBase and React Native Paper.",
      isSender: false,
    },

    {
      text: "Both are excellent choices. They have great components!",
      isSender: true,
    },

    { text: "Yeah, I like how customizable they are.", isSender: false },

    { text: "Customization is key for a unique look.", isSender: true },

    { text: "Absolutely! I want my app to stand out.", isSender: false },

    { text: "Have you thought about the color scheme?", isSender: true },

    { text: "I'm leaning towards a dark mode theme.", isSender: false },

    {
      text: "Dark mode is very popular! It’s easy on the eyes.",
      isSender: true,
    },

    { text: "Exactly! Plus, it looks sleek.", isSender: false },

    {
      text: "What about the app's name? Have you decided yet?",
      isSender: true,
    },

    { text: "Not yet! I'm still brainstorming ideas.", isSender: false },

    { text: "Want to share some of your ideas?", isSender: true },

    {
      text: "Sure! I was thinking of 'ChatConnect' or 'TalkSpace'.",
      isSender: false,
    },

    { text: "Both sound good! I like 'ChatConnect'.", isSender: true },

    { text: "Thanks! I might go with that one.", isSender: false },

    { text: "Do you have a timeline for the project?", isSender: true },

    { text: "I'm hoping to have a prototype in a month.", isSender: false },

    { text: "That’s a solid timeline! Are you working alone?", isSender: true },

    {
      text: "Yes, for now. But I might bring in a designer later.",
      isSender: false,
    },

    {
      text: "Collaborating with a designer can really elevate your app.",
      isSender: true,
    },

    { text: "I agree! A good UI/UX is crucial.", isSender: false },

    { text: "Have you started coding yet?", isSender: true },

    { text: "Not yet, but I plan to start this weekend.", isSender: false },

    {
      text: "Awesome! Let me know if you run into any issues.",
      isSender: true,
    },

    {
      text: "Will do! I might need help with state management.",
      isSender: false,
    },

    { text: "Are you considering Redux or Context API?", isSender: true },

    {
      text: "I'm leaning towards Context API for simplicity.",
      isSender: false,
    },

    { text: "Good choice! It's great for smaller apps.", isSender: true },

    {
      text: "Exactly! I want to keep things straightforward.",
      isSender: false,
    },

    { text: "Have you set up your development environment?", isSender: true },

    {
      text: "Yes, I have everything installed and ready to go.",
      isSender: false,
    },

    { text: "Perfect! You’re all set to start coding.", isSender: true },

    { text: "I’m excited to dive in!", isSender: false },

    { text: "What’s the first feature you plan to implement?", isSender: true },

    {
      text: "I think I'll start with the user authentication.",
      isSender: false,
    },

    {
      text: "That’s a great starting point! It’s fundamental.",
      isSender: true,
    },

    {
      text: "Yes, I want to ensure security from the beginning.",
      isSender: false,
    },

    { text: "Have you looked into Firebase Authentication?", isSender: true },

    { text: "Yes, it looks straightforward to set up.", isSender: false },

    {
      text: "It really is! They have excellent documentation.",
      isSender: true,
    },

    { text: "I’ll definitely refer to that as I go along.", isSender: false },

    {
      text: "What about testing? Do you have a plan for that?",
      isSender: true,
    },

    { text: "I plan to write unit tests for my components.", isSender: false },

    {
      text: "Good idea! Testing is crucial for maintaining quality.",
      isSender: true,
    },

    { text: "Absolutely! I want to catch bugs early.", isSender: false },

    { text: "Have you used Jest for testing before?", isSender: true },

    { text: "No, but I've heard good things about it.", isSender: false },

    { text: "It's a solid choice for React Native apps.", isSender: true },

    {
      text: "I’ll give it a try! Thanks for the recommendation.",
      isSender: false,
    },

    {
      text: "No problem! Do you have any other features in mind?",
      isSender: true,
    },

    { text: "Yes, I want to implement push notifications.", isSender: false },

    {
      text: "That’s a great feature! It helps keep users engaged.",
      isSender: true,
    },

    {
      text: "Exactly! I'm thinking of using Firebase Cloud Messaging.",
      isSender: false,
    },

    { text: "Perfect! It integrates well with Firebase.", isSender: true },

    { text: "I’m glad I chose Firebase for my backend!", isSender: false },

    {
      text: "You’re making good progress! Anything else on your list?",
      isSender: true,
    },

    {
      text: "I also want to add a profile management feature.",
      isSender: false,
    },

    {
      text: "That’s important! Users love customizing their profiles.",
      isSender: true,
    },

    {
      text: "Yes, I want to allow them to upload profile pictures.",
      isSender: false,
    },

    {
      text: "Great idea! Just make sure to handle image uploads securely.",
      isSender: true,
    },

    { text: "Absolutely! Security is a top priority.", isSender: false },

    {
      text: "Have you thought about how you’ll handle data storage?",
      isSender: true,
    },

    { text: "I plan to use Firestore for that.", isSender: false },

    { text: "Firestore is perfect for real-time data needs.", isSender: true },

    { text: "I like that it scales well with the app.", isSender: false },

    { text: "Exactly! You’re on the right track.", isSender: true },

    { text: "Thanks for your support! It means a lot.", isSender: false },

    {
      text: "Anytime! I’m excited to see your app come to life.",
      isSender: true,
    },

    { text: "I’ll keep you updated on my progress!", isSender: false },

    { text: "Looking forward to it! Let’s catch up soon.", isSender: true },

    { text: "Definitely! Talk to you later!", isSender: false },
  ];

  const [text, setText] = useState("");

  const [messagesData, setMessagesData] = useState([])

  const skip = useRef(0);

  const loadConversationMessages = () =>{
    axios
    .get("/api/conversations/getConversationAllMessages/" + conversationId + '/' + skip)
    .then((response) => {
      setMessagesData(response.data);
    })
    .catch((error) => console.log("Error" + error));
  }

  useEffect(()=>{
    // Load conversation messages-
    loadConversationMessages();
  })


  const sendMessage = () =>{
    axios
    .post(
      // "http://localhost:5000/createAccount",
      // API_URL + "/logInToAccount",
      API_URL + "/api/messages/addMessage",
      {
        receiver: otherParticipant,
        message: text
      },
      { withCredentials: true }
    )

    .then((response) => {
      console.log(response.data)
      if (response.data === "message_added_successfully") {
        console.log('Message added')
      }
      else{

      }
    })
    .catch((error) => console.log("Error" + error));

  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fdbe00" }}>
      <MessagingScreenCustomHeader
        name="@krishkhare"
        imageUrl="https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      />

      <Surface
        elevation={5}
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          marginTop: 62,
          overflow: "hidden",
        }}
      >
        <ScrollView keyboardShouldPersistTaps="handled" style={{}}>
          <View style={styles.messagesContainer}>
            {/* <Message message="Hi! Krish" isSender={true} />
        <Message message="I am multimillionaire" isSender={false} />
        <Message message="Hello" isSender={true} />
        <Message message="Kaisi ho" isSender={false} />
        <Message message="Hello!" isSender={true} /> */}
            {messages.map((msg, index) => (
              <Message key={index} message={msg.text} isSender={msg.isSender} />
            ))}
          </View>
        </ScrollView>
      </Surface>

      <Surface
        elevation={5}
        style={{
          // height: 80,
          // width: 80,
          alignItems: "center",
          // justifyContent: "space-around",
          justifyContent: "center",
          backgroundColor: "white",
          // backgroundColor: '#fdbe00',
          flexDirection: "row",
          width: "100%",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          bottom: 0,
        }}
      >
        {/* <TextInput
          style={styles.inputBar}
          underlineStyle={{}}
          value={text}
          onChangeText={(text) => setText(text)}
          // label="Your text..."
          label={
            // return (
            <Text style={{ color: "royalblue" }}>Your text...</Text>
            // )
          }
          placeholderTextColor={"gainsboro"}
          outlineStyle={{
            borderColor: "gainsboro",
            borderWidth: 1,
            // borderRadius: 25,
            // backgroundColor: '#fdbe00'
          }}
          mode="outlined"
          cursorColor="royalblue"
          right={
            <TextInput.Icon
              icon={"send"}
              color={"royalblue"}
              onPress={() => {}}
            />
          }
        /> */}

        {/* <TextInput
          inputMode="text"
          placeholder="Your Message..."
          style={styles.inputBar}
          cursorColor={"#193088"}
          // caretHidden={}
          onFocus={() => {
            // setIsFocused(true);
          }}
        /> */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            // justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.4}
            style={{
              backgroundColor: "whitesmoke",
              padding: 12,
              borderRadius: 50,
              // borderTopRightRadius: 35,
              // borderBottomRightRadius: 35,
            }}
          >
            <TabBarIcon name="mic" size={25} color="#193088" />
          </TouchableOpacity>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={styles.inputBar}
              underlineStyle={{ display: "none" }}
              value={text}
              onChangeText={(text) => setText(text)}
              // label="Your text..."
              label={
                // return (
                <Text
                  style={{
                    color: "gray",
                    // backgroundColor: "whitesmoke",
                    // borderRadius: 20,
                    // padding: 2,
                    textAlign: "center",
                  }}
                >
                  Your Message...
                </Text>
                // )
              }
              placeholderTextColor={"gainsboro"}
              outlineStyle={{
                // borderColor: "gainsboro",
                borderWidth: 0,
                borderRadius: 25,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                // backgroundColor: '#fdbe00'
                // height: '100%'
                margin: 0,
                padding: 0,
              }}
              mode="outlined"
              cursorColor="royalblue"
              //   right={
              //     // <TextInput.Icon
              //     //   icon={"mic-circle-sharp"}
              //     //   color={"#193088"}
              //     //   onPress={() => {}}
              //     // />
              //     <TabBarIcon name='send' size={25} color="red"/>
              //   }
            />

            <TouchableOpacity
              activeOpacity={0.4}
              style={{
                backgroundColor: "whitesmoke",
                padding: 12,
                borderTopRightRadius: 35,
                borderBottomRightRadius: 35,
              }}
            >
              <TabBarIcon name="smileO" size={25} color="#193088" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.4}
            style={{
              backgroundColor: "#193088",
              padding: 8,
              borderRadius: 100,
            }}
            onPress={sendMessage}
          >
            <TabBarIcon name="send" size={25} color="white" />
          </TouchableOpacity>
        </View>

        {/* <Button> */}
        {/* </Button> */}
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBar: {
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    borderRadius: 45,
    backgroundColor: "whitesmoke",
    // borderWidth: 2,
    // borderColor: "whitesmoke",
    // width: '70%',
    width: "100%",
    maxWidth: 210,
    color: "#193088",
    // marginHorizontal: "auto",
    fontSize: 16,
    marginBottom: 5,
    // textAlign: "center",
    // marginTop: 5,
    fontFamily: "Dosis_500Medium",
  },
  messagesContainer: {
    paddingVertical: 70,
    paddingTop: 10,
    // height: "90%",
  },
});
