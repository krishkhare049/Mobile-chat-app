import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

type SearchListElementProps = {
  name: string;
  imageUrl: string;
//   lastMsg: string;

//   onClick: ()=> void;
//   bgColor: string | undefined;
//   pressedColor: string | 'black';
//   customStyle: object | undefined;
};

export default function SearchListElement({
  name,
  imageUrl,
//   lastMsg,
//   onClick
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
          borderTopWidth: 2,
          // transform: pressed ? [{scale: 0.98}]: []

        }
        
      // ]}
      }
      // onLongPress={()=>{console.log('Long press')}}
      onLongPress={handleLongPress}

      onPressOut={handlePressOut}
    >
      <View style={styles.contactsItems}>
        <Image
          style={styles.contactsImg}
          source={{
            uri: imageUrl,
          }}
          defaultSource={require('../assets/skeletonLoadingPlaceholder.gif')}
        />

        <View style={styles.nameOccDiv}>
          <Text style={styles.name}>{name}</Text>
          {/* <Text style={styles.lastMsg} numberOfLines={1}>{lastMsg}</Text> */}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contactsItems: {
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
  contactsImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
});
