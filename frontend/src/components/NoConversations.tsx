import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NoConversations() {
  return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', marginVertical: 150}}>
        {/* <View> */}
        <Image style={{width: 100, height: 100}} source={require("../assets/transparentSmile.png")} />
      <Text style={{fontSize: 30, fontFamily: "Dosis_600SemiBold", marginTop: 20}}>No Conversations</Text>
        {/* </View> */}
    </View>
  )
}

const styles = StyleSheet.create({})