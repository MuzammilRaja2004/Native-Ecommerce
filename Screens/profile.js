import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native';
import React from 'react';


// import { db, storage } from "../Firebase/Config";
// // Get Link From Firebase
// // import { doc, setDoc,Ref } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { getAuth, signOut } from "firebase/auth";

const Profile = () => {
    const LogOut = () => {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            Alert.alert("SignOut SuccessFully");
            window.location.reload(true);
          })
          .catch((error) => {
            console.log(error);
          });
      };
  return (
    <View>
      <TouchableOpacity onPress={LogOut}>
            <Text>LogOut</Text>
          </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
