import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from "react-native";
import React from "react";

export default function ActionCard() {

    // Use string not String-
    const openWebsite = (websiteLink: string) =>{
        Linking.openURL(websiteLink)
    }

  return (
    <>
      <Text
        style={{
          fontSize: 20,
          color: "#000000",
          backgroundColor: "whitesmoke",
          paddingHorizontal: 5,
          borderRadius: 5,
          margin: 15,
          width: 150,
          textAlign: "center",
          fontWeight: "900",
          fontFamily: 'Dosis_600SemiBold'
        }}
      >
        ActionCard
      </Text>

        <View style={styles.actionCardContainer}>

            <Text style={{margin: 5, fontSize: 19, textAlign: 'center', fontWeight: '600'}}>What's new in...</Text>
            <Image style={styles.mansionImg} source={{
                uri: 'https://images.pexels.com/photos/87378/pexels-photo-87378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }}/>

            <View>

                <Text style={{fontSize: 18, padding: 5}}>This is my future mansion</Text>
                <Text style={{fontSize: 16, padding: 5}}>I will buy such a huge mansion after becoming multi millionaire very soon.</Text>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btns} onPress={()=>openWebsite('https://www.pexels.com/photo/beige-painted-concrete-building-87378/')}>
                        <Text style={styles.btnText}>Visit image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btns} onPress={()=> openWebsite('https://khareindustries.com')}>
                        <Text style={styles.btnText}>Visit khare industries</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>


    </>
  );
}

const styles = StyleSheet.create({
    actionCardContainer:{
        padding: 5,
        backgroundColor: 'lightgreen'
    },
    mansionImg:{
        height: 300
    },
    btnContainer:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      // backgroundColor: 'red',
      padding: 5,
      margin: 5
    },
    btns:{
      backgroundColor: 'whitesmoke',
      borderRadius: 5,
      padding: 5,
    },
    btnText:{
      fontWeight: '500',
      fontSize: 16
    }
});
