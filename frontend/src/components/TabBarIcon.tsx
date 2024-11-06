// import Ionicons from '@expo/vector-icons/Ionicons';
// import { type IconProps } from '@expo/vector-icons/build/createIconSet';
// import { type ComponentProps } from 'react';

// export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
//   return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
// }

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";

import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



// import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TabBarIcon({
  color,
  name,
  size,
}: {
  color: string;
  name: string;
  size: number;
}) {
  switch (name) {
    case "home":
      return (
        <MaterialCommunityIcons name="home-flood" size={size} color={color} />
      );
    // break;
    case "notifications":
      return <Ionicons name="notifications-sharp" size={size} color={color} />;
    // break;
    case "user":
      return (
        <MaterialCommunityIcons
          name="face-man-profile"
          size={size}
          color={color}
        />
      );
    // break;
    case "notes":
      return <MaterialIcons name="notes" size={size} color={color} />;
    // break;
    case "search":
      return <Feather name="search" size={size} color={color} />;
    // break;
    case "chats":
      return <MaterialCommunityIcons name="chat" size={size} color={color} />;
    // break;
    case "arrowLeft":
      return <AntDesign name="arrowleft" size={size} color={color} />;
    case "pencil":
      return <FontAwesome6 name="pencil" size={size} color={color} />;
    case "payments":
      return <MaterialIcons name="payments" size={size} color={color} />;
    case "privacy":
      return <MaterialIcons name="private-connectivity" size={size} color={color} />;
    case "right":
      return <AntDesign name="right" size={size} color={color} />;
    case "settings":
      return <MaterialIcons name="settings-suggest" size={size} color={color} />;
    case "logout":
      return <MaterialIcons name="logout" size={size} color={color} />;
    case "send":
      return <FontAwesome name="send" size={size} color={color} />;
    case "smileO":
      return <FontAwesome name="smile-o" size={size} color={color} />;
    case "mic":
      return <Ionicons name="mic" size={size} color={color} />;
    // break;

    default:
      break;
  }
}

// const styles = StyleSheet.create({});
