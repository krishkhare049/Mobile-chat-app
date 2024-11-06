import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";

export default function ContactList() {
  const contacts = [
    // {
    //   uid: 1,
    //   name: "Krish Khare",
    //   occupation: "CEO of Khare Industries",
    //   imageUrl:
    //     "https://images.pexels.com/photos/87378/pexels-photo-87378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // },
    // {
    //   uid: 2,
    //   name: "Riya Khare",
    //   occupation: "Wife of Krish Khare",
    //   imageUrl:
    //     "https://images.pexels.com/photos/28029253/pexels-photo-28029253/free-photo-of-a-bird-is-flying-over-the-ocean-and-rocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    // },
    // {
    //   uid: 3,
    //   name: "Akash Khare",
    //   occupation: "Brother of Krish Khare",
    //   imageUrl:
    //     "https://images.pexels.com/photos/21939604/pexels-photo-21939604/free-photo-of-cars-parked-on-street-in-town.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    // },
    // {
    //   uid: 4,
    //   name: "Jitendra Khare",
    //   occupation: "Father of Krish Khare",
    //   imageUrl:
    //     "https://images.pexels.com/photos/28197211/pexels-photo-28197211/free-photo-of-a-person-riding-a-horse-on-a-dirt-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    // },
    // {
    //   uid: 5,
    //   name: "Prachi Khare",
    //   occupation: "Mother of Krish Khare",
    //   imageUrl:
    //     "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    // },
    {
      uid: 1,
      name: "Name",
      occupation: "Last msg...",
      imageUrl:
        "https://images.pexels.com/photos/87378/pexels-photo-87378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      uid: 2,
      name: "Name",
      occupation: "Last msg...",
      imageUrl:
        "https://images.pexels.com/photos/28029253/pexels-photo-28029253/free-photo-of-a-bird-is-flying-over-the-ocean-and-rocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      uid: 3,
      name: "Name",
      occupation: "Last msg...",
      imageUrl:
        "https://images.pexels.com/photos/21939604/pexels-photo-21939604/free-photo-of-cars-parked-on-street-in-town.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      uid: 4,
      name: "Name",
      occupation: "Last msg...",
      imageUrl:
        "https://images.pexels.com/photos/28197211/pexels-photo-28197211/free-photo-of-a-person-riding-a-horse-on-a-dirt-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      uid: 5,
      name: "Name",
      occupation: "Last msg...",
      imageUrl:
        "https://images.pexels.com/photos/26893131/pexels-photo-26893131/free-photo-of-village-houses-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  return (
    <>

      <View style={styles.contactsContainer}>
        {/* {contacts.map(())} */}
        {/* {contacts.map(({uid, name, occupation, imageUrl}) => { return ()})} */}
        {/* or */}
        {contacts.map(({ uid, name, occupation, imageUrl }) => (
          <TouchableOpacity key={uid}>

          {/* <View key={uid} style={styles.contactsItems}> */}
          <View style={styles.contactsItems}>
            <Image
              style={styles.contactsImg}
              source={{
                uri: imageUrl,
              }}
            />

            <View style={styles.nameOccDiv}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.occupation}>{occupation}</Text>
            </View>
          </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contactsContainer: {
    // backgroundColor: "whitesmoke",
  },
  contactsItems: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fdbe00",

    backgroundColor: "#FFFFFF",
    margin: 1,
    borderRadius: 10,
    padding: 5,
  },
  nameOccDiv: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 20,
    fontFamily: 'Dosis_400Regular'

  },
  name: {
    fontSize: 18,
    // fontWeight: "900",
    // fontWeight: "600",
    // color: "#FFFFFF",
    fontFamily: 'Dosis_600SemiBold'
  },
  occupation: {
    fontSize: 14,
    // color: "#FFFFFF",
    color: 'gray',
    fontFamily: 'Dosis_400Regular'

  },
  contactsImg: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
});
