import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Dialog } from 'react-native-paper';
import TabBarIcon from './TabBarIcon';

// export default function LogOutCard({visibleProp}: {visibleProp: boolean}) {
  // const [visible, setVisible] = useState(visibleProp);
export default function LogOutCard() {
    const [visible, setVisible] = useState(true);

    const hideDialog = () => setVisible(false);
    console.log('rendered again')
  return (
<>
  <Dialog visible={visible} onDismiss={hideDialog} style={{backgroundColor: 'royalblue', borderRadius: 20}}>
        {/* <Dialog.Icon icon="alert" /> */}

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
          <Button style={{backgroundColor: 'red', borderRadius: 10}} onPress={() => {console.log('Log out user'); setVisible(false)}}><Text style={{color: '#FFFFFF'}}>Log out!</Text></Button>
        </Dialog.Actions>
      </Dialog>
</>
  )
}

const styles = StyleSheet.create({})