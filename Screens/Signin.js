import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
// This Link Get From My Screens Folder
import SignUp from "./SignUp";

// This Link Get From Firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn({func }) {

  // Create States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // This Functoon Work Doing On Press
  const SignIn = () => {

    // This Function Get From Firebase
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert("Sign In SuccessFull");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <ScrollView>
      <View style={styles.main_view}>
        <View style={styles.inner_view}>
          <View>
            <Text style={styles.text_head_one}>Sign In</Text>
            <Text style={styles.text_pera_one}>Existing Account</Text>
          </View>

          <View style={styles.inputs_view}>
            <View style={styles.secound_input}>
              <Text style={styles.secound_input_text}>Email</Text>
              <TextInput
                style={styles.input_one}
                placeholder="Enter your Email"
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={styles.third_input}>
              <Text style={styles.third_input_text}>Passowrd</Text>
              <TextInput
                style={styles.input_one}
                placeholder="Enter your Password"
                keyboardType="visible-password"
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            <View style={styles.button_view}>
              <TouchableOpacity
                style={styles.SignIn_button}
                activeOpacity={0.8}
                onPress={() => SignIn()}
              >
                <Text style={styles.button_text}>Sign In</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.link_view}>
              <Text style={styles.text_link}>Create A New Account?</Text>
              <TouchableOpacity onPress={func}>
                <Text style={styles.real_link}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Main View Styling
  main_view: {
    backgroundColor: "#EFF3F6",
    // backgroundColor: "#00cd8f",
    display: "flex",
    flex: 1,
  },
  inner_view: {
    marginTop: 100,
    backgroundColor: "#ffffff",
    display: "flex",
    flex: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  // Inner Main View
  inputs_view: {
    marginTop: 40,
  },
  text_head_one: {
    fontSize: 28,
    color:'#1d1b27',
  },
  text_pera_one: {
    fontSize: 17,
    marginTop: 5,
    color:'#1d1b27',
  },

  // First View Styling
  first_input_text: {
    marginBottom: 15,
    fontSize: 18,
  },
  input_one: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
    color: "#000",
  },

  // Secound View Styling
  secound_input_text: {
    marginBottom: 15,
    fontSize: 18,
  },
  secound_input: {
    marginTop: 40,
  },
  // third View Styling
  third_input_text: {
    marginBottom: 15,
    fontSize: 18,
  },
  third_input: {
    marginTop: 40,
  },

  // Button Styling
  SignIn_button: {
    alignItems: "center",
    backgroundColor: "#00cd8f",
    padding: 10,
    marginTop: 30,
  },

  // Link Styling
  link_view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    // fontSize:20
  },
  button_text: {
    fontSize: 17,
    color:'#ffffff',
  },
});
