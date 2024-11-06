import {
  Animated,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";

// import * as NavigationBar from "expo-navigation-bar";

//   NavigationBar.setBackgroundColorAsync("#fdbe00");
// NavigationBar.setVisibilityAsync("hidden");

// export default function SplashScreen({onAnimationEnd}: { onAnimationEnd: () => void}) {
export default function SplashScreen() {
  // const opacity = new Animated.Value(1); // Initial opacity

  // useEffect(() => {
  //   Animated.timing(opacity, {
  //     toValue: 0, // Fade out to transparent

  //     duration: 500, // Duration of the animation

  //     useNativeDriver: true, // Use native driver for better performance
  //   }).start(() => {
  //     onAnimationEnd(); // Call the callback function after animation ends
  //   });
  // }, [opacity, onAnimationEnd]);

  return (
    <>
      <StatusBar backgroundColor={"#fdbe00"} barStyle={"light-content"} />
      {/* <Animated.View style={[styles.container, { opacity }]}> */}
        <View
          style={{
            backgroundColor: "#fdbe00",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Image style={styles.img} source={require("../assets/smile.jpg")} />
        </View>
      {/* </Animated.View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#fff',

  },
  img: {
    width: "100%",
    height: 300,
  },
});
