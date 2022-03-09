import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import React, { useState, useContext } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../Components/State/index";
import { User } from "../App";
// This Link Get From My Fireabse Folder
import { auth, db } from "../Firebase/Config";

// This Link Get From Firebase
import { doc, addDoc, collection, Timestamp } from "firebase/firestore";
const orderForm = () => {
  const dispatch = useDispatch();
  const { placeOrder } = bindActionCreators(actionCreators, dispatch);
  const order = useSelector((state) => state.orderReducer);
  console.log(order);
  
  const user = useContext(User);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const { quantity ,id } = order;
  const NextBtn = () => {
    addDoc(collection(db, "orders"), {
      Timestamp: Date.now(),
      address,
      city,
      number,
      quantity,
      productId: id,
      orderBy: user.id,
      orderStatus: "pending",
    }).then(() => {
      Alert.alert("Order SuccessFully");
      setAddress("");
    setCity("");
    setNumber("");
    })
    .catch((err)=>{
      Alert.alert(err);
    })
  };
  
  
  

  return (
    <ScrollView>
      <View style={styles.main_view}>
        <View style={styles.inputs_view}>
          <View style={styles.first_input}>
            <Text style={styles.first_input_text}>Address</Text>
            <TextInput
              style={styles.input_one}
              placeholder="Enter your Address"
              onChangeText={(text) => setAddress(text)}
            />
          </View>

          <View style={styles.secound_input}>
            <Text style={styles.secound_input_text}>City</Text>
            <TextInput
              style={styles.input_one}
              placeholder="Enter your City"
              keyboardType="email-address"
              onChangeText={(text) => setCity(text)}
            />
          </View>

          <View style={styles.third_input}>
            <Text style={styles.third_input_text}>Number</Text>
            <TextInput
              style={styles.input_one}
              placeholder="Enter your Number"
              keyboardType="number-pad"
              onChangeText={(text) => setNumber(text)}
            />
          </View>

          <View style={styles.button_view}>
            <TouchableOpacity
              style={styles.Next_button}
              onPress={() => NextBtn()}
            >
              <Text style={styles.button_text}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default orderForm;

const styles = StyleSheet.create({
  // Inner Main View
  inputs_view: {
    marginTop: 40,
  },
  text_head_one: {
    fontSize: 28,
  },
  text_pera_one: {
    fontSize: 17,
    marginTop: 5,
  },

  // First View Styling
  first_input_text: {
    marginBottom: 15,
    fontSize: 18,
  },
  input_one: {
    // borderWidth: 1,
    backgroundColor: "white",
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
  Next_button: {
    alignItems: "center",
    backgroundColor: "#fe9000",
    padding: 10,
    marginTop: 30,
  },
});
