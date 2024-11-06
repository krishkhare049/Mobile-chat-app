import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import TabBarIcon from "../components/TabBarIcon";
import { Button, Chip, Dialog, Portal, Surface } from "react-native-paper";

import LogOutCard from "../components/LogOutCard";
import * as SecureStore from "expo-secure-store";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../App";
// import { RootStackParamList } from "../MainComponent";

// import { DrawerParamList } from "./Profile";

// type MeProps = NativeStackScreenProps<RootStackParamList, "Me">;
// type MeProps = NativeStackScreenProps<DrawerParamList, "Me">;

// export default function Me({navigation}: MeProps) {
export default function Me() {

  const [visible, setVisible] = useState(false);

  const hideDialog = () => setVisible(false);

  const logOutUser = () =>{
    console.log('Log out user')
    SecureStore.deleteItemAsync('secure_token')
    setVisible(false)
    // navigation.popToTop()
  }


  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>

      {/* <Surface elevation={4}> */}
      <Surface elevation={5}
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          // marginTop: 20,
          backgroundColor: '#fdbe00',
          // backgroundColor: "#6A5BC2",
          padding: 10,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <Image
          source={require("../assets/pexels-prateekkatyal-7389639.jpg")}
          style={styles.myProfileImg}
        />

        <Text
          style={{
            textAlign: "center",
            fontFamily: "Dosis_700Bold",
            fontSize: 20,
            // backgroundColor: "whitesmoke",
            backgroundColor: "#FFFFFF",
            // width: 100,
            // color: '#fdbe00',
            // margin: "auto",
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 20,
            marginTop: 10,
          }}
        >
          @username
        </Text>
        <TabBarIcon name="pencil" size={20} color="white" />
      </Surface>

      {/* </Surface> */}


      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            padding: 5,
          }}
        >
          <Text
            style={{
              color: "gray",
              alignSelf: "flex-start",
              fontFamily: "Dosis_400Regular",
              fontSize: 18,
            }}
          >
            My Status
          </Text>
        </View>

        <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '80%'}}>
        <Chip avatar={<TabBarIcon name="pencil" size={15} color="purple" />} style={{margin: 4}} onPress={() => console.log('Pressed')}>Living Life</Chip>
        <Chip icon="information" style={{margin: 4}} onPress={() => console.log('Pressed')}>Hey!</Chip>
        <Chip icon="information" style={{margin: 4}} onPress={() => console.log('Pressed')}>Busy</Chip>
        <Chip icon="information" style={{margin: 4}} onPress={() => console.log('Pressed')}>Influencer</Chip>
        <Chip icon="information" style={{margin: 4}} onPress={() => console.log('Pressed')}>Family</Chip>
        <Chip icon="information" style={{margin: 4}} onPress={() => console.log('Pressed')}>Video creator</Chip>
        <Chip icon="information" style={{margin: 4}} onPress={() => console.log('Pressed')}>Entrepreneur</Chip>
        <Chip icon="information" style={{margin: 4}} onPress={() => console.log('Pressed')}>Attitude</Chip>
        <Chip icon="information" style={{margin: 4}} onPress={() => console.log('Pressed')}>Example Chip</Chip>
        </View>
      </View>

      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            padding: 5,
          }}
        >
          <Text
            style={{
              color: "gray",
              alignSelf: "flex-start",
              fontFamily: "Dosis_400Regular",
              fontSize: 18,
            }}
          >
            Dashboard
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.6} style={{ margin: 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(245, 66, 93, 0.4)",
              width: "80%",
              borderRadius: 10,
              padding: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "60%",
              }}
            >
              <TabBarIcon name="privacy" size={40} color="#ff0026" />
              <Text
                style={{
                  color: "#ff0026",
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: "Dosis_700Bold",
                }}
              >
                Privacy
              </Text>
            </View>

            <TabBarIcon name="right" color="#ff0026" size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={{ margin: 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(18, 153, 83, 0.4)",
              width: "80%",
              borderRadius: 10,
              padding: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "60%",
              }}
            >
              <TabBarIcon name="payments" size={40} color="#129953" />
              <Text
                style={{
                  color: "#129953",
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: "Dosis_700Bold",
                }}
              >
                Payments
              </Text>
            </View>

            <TabBarIcon name="right" color="#129953" size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={{ margin: 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(0, 123, 255, 0.4)",
              width: "80%",
              borderRadius: 10,
              padding: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "60%",
              }}
            >
              <TabBarIcon name="settings" size={40} color="#007bff" />
              <Text
                style={{
                  color: "#007bff",
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: "Dosis_700Bold",
                }}
              >
                Settings
              </Text>
            </View>

            <TabBarIcon name="right" color="#007bff" size={30} />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            padding: 5,
          }}
        >
          <Text
            style={{
              color: "gray",
              alignSelf: "flex-start",
              fontFamily: "Dosis_400Regular",
              fontSize: 18,
            }}
          >
            My account
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            padding: 5,
          }}
        >
          <TouchableOpacity activeOpacity={0.4} onPress={()=> {setVisible(true); console.log('k')}}>
            <Text
              style={{
                color: "#ff0026",
                fontFamily: "Dosis_500Medium",
                fontSize: 25,
              alignSelf: "flex-start",

              }}
            >
              Log out
            </Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* <LogOutCard visibleProp={visible}/> */}
      {/* <Portal> */}
      <Dialog visible={visible} onDismiss={hideDialog} style={{backgroundColor: 'royalblue', borderRadius: 20}}>

        <View style={{flexDirection: 'row',justifyContent: 'center'}}>

        <TabBarIcon name="logout" color="#FFFFFF" size={30}/>
        </View>
            
        <Dialog.Title style={{fontFamily: 'Dosis_700Bold', color: '#FFFFFF', textAlign: 'center'}}>Log out</Dialog.Title>
        <Dialog.Content>
          <Text style={{fontFamily: 'Dosis_400Regular', color: '#FFFFFF', textAlign: 'center', fontSize: 17}}>Are you sure!.</Text>
          <Text style={{fontFamily: 'Dosis_400Regular', color: '#FFFFFF', textAlign: 'center', fontSize: 17}}>You are going to log out from current account...</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button style={{backgroundColor: 'white', borderRadius: 10}} onPress={() => {console.log('Cancel'); setVisible(false)}}><Text style={{color: '#000000'}}>Cancel</Text></Button>
          <Button style={{backgroundColor: 'red', borderRadius: 10}} onPress={logOutUser}><Text style={{color: '#FFFFFF'}}>Log out!</Text></Button>
        </Dialog.Actions>
      </Dialog>
    {/* </Portal> */}
    </View>
  );
}

const styles = StyleSheet.create({
  myProfileImg: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "whitesmoke",
    padding: 10,
  },
});


// import React, {useState} from 'react';
// import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

// export default function Me () {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}>
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}>
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//     height: '100%',
//     backgroundColor: 'transparent'
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });
