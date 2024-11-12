import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import TabBarIcon from '../components/TabBarIcon'
import Profile from '../screens/Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootStackParamList } from '../MainComponent'
// import LogOutCard from '../components/LogOutCard'

import { socket } from '../socket';


// import * as NavigationBar from 'expo-navigation-bar';

// NavigationBar.setVisibilityAsync('visible')

const BottomTab = createBottomTabNavigator<RootStackParamList>();

export default function SignedInStack() {

  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState('N/A');

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      console.log('connected')
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on('upgrade', (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport('N/A');
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    socket.on('hi', (msg)=>{
      console.log(msg);
    })

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return (
    <>
    {/* <StatusBar barStyle={"light-content"} backgroundColor={"#fdbe00"} /> */}
    <StatusBar barStyle={"light-content"} backgroundColor={"#fdbe00"} />
    {/* // <View style={styles.container}> */}

    {/* <ScrollView keyboardShouldPersistTaps='handled'> */}



    <SafeAreaProvider>
      <NavigationContainer independent={true}>
        {/* <StatusBar style="auto" /> */}
        {/* <Text style={{backgroundColor: '#fdbe00', color: 'white', padding: 5, fontFamily: 'Dosis_700Bold', fontSize: 25, marginLeft: 15, }}>Masher</Text> */}
        {/* <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, title: "Home" }}
        />
        <RootStack.Screen name="Notifications" component={Notifications} options={{headerTitle: 'Notifications'}} />
        <RootStack.Screen name="Profile" component={Profile} />
      </RootStack.Navigator> */}

        {/*  */}

        <BottomTab.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
          
          
        >
          <BottomTab.Screen
            name="Home"
            component={Home}
            // options={{
              options={({ route }) => ({
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={"chats"}
                  color={focused ? "#fdbe00" : "gainsboro"}
                  size={35}
                />
              ),

              tabBarStyle: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                // console.log(routeName)
                if (routeName === 'MessagingScreen' || routeName === 'Search' || routeName === 'Notifications') {
                  return { display: "none" }
                }
                return
              })(route),
              // tabBarShowLabel: false
              // tabBarLabelStyle:{color: 'gainsboro', fontSize: 11},
              tabBarActiveTintColor: "#fdbe00",
              // tabBarStyle:{borderRadius: 100, borderWidth: 2, marginBottom: 5, height: 50},
              // tabBarStyle:{borderRadius: 100, borderColor: 'whitesmoke', borderWidth: 2},
              // tabBarIconStyle: {width: 35, height: 35, backgroundColor: 'red'},
              tabBarActiveBackgroundColor: "whitesmoke",
              tabBarLabelStyle: { fontFamily: "Dosis_600SemiBold" },
            // }}
            })}
          />
          {/* <BottomTab.Screen
            name="Notes"
            component={Notes}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={"notes"}
                  color={focused ? "#fdbe00" : "gainsboro"}
                  size={35}
                />
              ),
              // tabBarShowLabel: false
              tabBarActiveTintColor: "#fdbe00",
              // tabBarStyle:{borderRadius: 100, borderWidth: 2, marginBottom: 5, height: 50},
              // tabBarStyle:{borderRadius: 100, borderColor: 'whitesmoke', borderWidth: 2},
              // tabBarIconStyle: {width: 35, height: 35, backgroundColor: 'red'},
              tabBarActiveBackgroundColor: "whitesmoke",
              tabBarLabelStyle: { fontFamily: "Dosis_600SemiBold" },
            }}
          /> */}
          <BottomTab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={"user"}
                  color={focused ? "#fdbe00" : "gainsboro"}
                  size={35}
                  />
                ),
                // tabBarStyle: {display: 'none'},
              // tabBarShowLabel: false
              // tabBarActiveTintColor: "#193088",
              tabBarActiveTintColor: "#fdbe00",
              // tabBarStyle:{borderRadius: 100, borderWidth: 2, marginBottom: 5, height: 50},
              // tabBarStyle:{borderRadius: 100, borderColor: 'whitesmoke', borderWidth: 2},
              // tabBarIconStyle: {width: 35, height: 35, backgroundColor: 'red'},
              // tabBarActiveBackgroundColor: "purple",
              tabBarActiveBackgroundColor: "whitesmoke",
              tabBarLabelStyle: { fontFamily: "Dosis_600SemiBold" },
            }}
          />
        </BottomTab.Navigator>

        {/* <MaterialBottomTab.Navigator
          initialRouteName="Home"
          // activeColor="#fdbe00"
          activeColor="#193088"
          inactiveColor="#3e2465"
          // barStyle={{ backgroundColor: "red", borderTopColor: 'whitesmoke', borderTopWidth: 1, borderRadius: 900, height: 70, marginHorizontal: 'auto', width: '90%', borderTopLeftRadius: 100 }}
          barStyle={{ borderTopColor: 'whitesmoke', borderTopWidth: 1, backgroundColor: 'white'}}
          shifting={true}
          activeIndicatorStyle={{backgroundColor: 'whitesmoke'}}
        >
          <MaterialBottomTab.Screen
            name="Chats"
            component={Chats}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={"chats"}
                  color={focused ? "#193088" : "#3e2465"}
                  size={24}
                />
              ),
              tabBarBadge: '10',
              
            
            }}
            
          />
          <MaterialBottomTab.Screen
            name="Notes"
            component={Notes}
            options={{
              tabBarLabel: "Notes",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={"notes"}
                  color={focused ? "#193088" : "#3e2465"}
                  size={24}
                />
              ),
            }}
          />
          <MaterialBottomTab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={"user"}
                  color={focused ? "#193088" : "#3e2465"}
                  size={24}
                />
              ),

            }}
          />
        </MaterialBottomTab.Navigator> */}
        {/*  */}

        {/* </View> */}
      </NavigationContainer>
    </SafeAreaProvider>

    {/* </ScrollView> */}

  </>
  )
}

const styles = StyleSheet.create({})