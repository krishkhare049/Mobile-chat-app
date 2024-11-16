import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TabBarIcon from "./TabBarIcon";

type SearchListElementProps = {
  name: string;
  profileImageUrl: string;
//   lastMsg: string;

  onClick: ()=> void;
//   bgColor: string | undefined;
//   pressedColor: string | 'black';
//   customStyle: object | undefined;
};

export default function SearchListElement({
  name,
  profileImageUrl,
//   lastMsg,
  onClick
//   bgColor,
//   pressedColor,
//   customStyle
}: SearchListElementProps) {


    const [pressed, setPressed] = useState(false);
  
  
    const handleLongPress = () => {
  
      setPressed(true);
  
    };
  
  
    const handlePressOut = () => {
  
      setPressed(false);
  
    };

  return (
    <Pressable
    android_ripple={{color: 'whitesmoke'}}
    //   onPress={onClick}
      // style={({ pressed }) => [
      style={
        {
          // borderWidth: 2,
          // width: 100,
          // padding: 5,
          // borderRadius: 10,
        //   ...customStyle,
        justifyContent: 'center',
        //   backgroundColor: pressed ? 'orange' : 'white',
          // borderColor: pressed ? 'whitesmoke' : 'whitesmoke',
          // backgroundColor: 'white',
          borderColor: 'whitesmoke',
          // borderTopWidth: 2,
          borderBottomWidth: 2,
          // transform: pressed ? [{scale: 0.98}]: []

        }
        
      // ]}
      }
      onPress={onClick}
      // onLongPress={()=>{console.log('Long press')}}
      onLongPress={handleLongPress}

      onPressOut={handlePressOut}
    >
      <View style={styles.searchItems}>

        <View style={styles.profileImgView}>

        {profileImageUrl !== 'default_profile_image' ? 
        <Image
        style={styles.profileImg}
        source={{
          uri: profileImageUrl,
        }}
        defaultSource={require('../assets/skeletonLoadingPlaceholder.gif')}
        />
        : 
        <TabBarIcon name="defaultProfileIcon" size={30} color="#193088" />
        }

        </View>

        {/* <Image
          style={styles.contactsImg}
          source={{
            uri: profileImageUrl,
          }}
          defaultSource={require('../assets/skeletonLoadingPlaceholder.gif')}
        /> */}

        <View style={styles.nameOccDiv}>
          <Text style={styles.name}>{name}</Text>
          {/* <Text style={styles.lastMsg} numberOfLines={1}>{lastMsg}</Text> */}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  searchItems: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fdbe00",
    width: '100%',
    // backgroundColor: "#FFFFFF",
    margin: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  nameOccDiv: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 20,
    fontFamily: "Dosis_400Regular",
  },
  name: {
    fontSize: 18,
    // fontWeight: "900",
    // fontWeight: "600",
    // color: "#FFFFFF",
    fontFamily: "Dosis_600SemiBold",
  },
  lastMsg: {
    fontSize: 14,
    // color: "#FFFFFF",
    color: "gray",
    fontFamily: "Dosis_400Regular",
    width: '80%'
  },

  profileImgView: {
    width: 45,
    height: 45,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "whitesmoke",
    backgroundColor: "#fdbe00",

    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImg: {

  },
});
