import {Pressable, StyleSheet } from "react-native";
import React from "react";
import TabBarIcon from "./TabBarIcon";

type PressableIconProps = {
  iconName: string;
  iconSize: number;
  iconColor: string;

  onClick: () => void;
  //   bgColor: string | undefined;
  //   pressedColor: string | 'black';
  //   customStyle: object | undefined;
};

export default function PressableIcon({
  iconName,
  iconSize,
  iconColor,
  onClick,
}: //   bgColor,
//   pressedColor,
//   customStyle
PressableIconProps) {
  return (
    <Pressable
      onPress={onClick}
      style={({ pressed }) => [
        {
          // borderWidth: 2,
          // width: 100,
          // padding: 5,
          // borderRadius: 10,
          //   ...customStyle,
          justifyContent: "center",
          backgroundColor: pressed ? "rgba(255, 255, 255, 0.3)" : "transparent",
          padding: 5,
        //   borderColor: pressed ? "whitesmoke" : "whitesmoke",
          borderRadius: 100,
          //   borderWidth: 1,
          // transform: pressed ? [{scale: 0.98}]: []
        },
      ]}
      onLongPress={() => {
        console.log("Long press");
      }}
    >
      <TabBarIcon name={iconName} size={iconSize} color={iconColor} />
    </Pressable>
  );
}

const styles = StyleSheet.create({

});
