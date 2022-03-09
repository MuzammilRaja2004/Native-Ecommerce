import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

// Get Link From React Native Vector Icon Expo
import { AntDesign } from "@expo/vector-icons";

// This Link Get From My Firebase Folder
import { db } from "../Firebase/Config";

// This Link Get From Firebase
import { doc, onSnapshot } from "firebase/firestore";

// This Link Get From My Screens Folder
import Product from "./Product";
import {Counter} from "./Counter";

import { Button} from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

// import { useSelector, useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../Components/State/index";
const ProductsView = ({ route }) => {
  // Get Data From Routes
  const { data } = route.params;
  // Create State
  const [product, setProduct] = useState({});

  useEffect(() => {
    // This Function Get From Firebase
    onSnapshot(doc(db, "Products", data), (doc) => {
      setProduct(doc.data());
    });
  }, []);
  const navigation = useNavigation();
  const dispatch = useDispatch()
  
  const placeOrder = () => {
    dispatch(actionCreators.placeOrder({id:product.id,quantity:2}))
    navigation.navigate('orderForm')
  };

  return (
    <View style={{ backgroundColor: "#0be881", height: "100%" }}>
      <View style={styles.main_card_view}>
        <View style={styles.icons_view}>
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={() => navigation.navigate("Product")}
          >
            <AntDesign name="arrowleft" size={26} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.product_image}>
          <Image
            source={{
              uri: product.image,
            }}
            style={styles.image}
          />
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={styles.main_text_view}>
          <Text style={{ fontSize: 26, color: "white", fontWeight: "bold" }}>
            {product.brand}
          </Text>
          <Text style={{ fontSize: 18, color: "white" }}>{product.model}</Text>
          <View style={styles.detail}>
            <Text style={{ fontSize: 18, color: "white" }}>
              {product.details}
            </Text>
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 18, color: "white", marginBottom: 10 }}>
            {product.price} rs
          </Text>
          <Text style={{ fontSize: 18, color: "white" }}>
            <Counter />
          </Text>
        </View>
      </View>

      <View style={styles.order_button}>
      <Button
                title="Place Order"
                buttonStyle={{
                  borderColor: 'rgba(78, 116, 289, 1)',
                }}
                type="outline"
                raised
                titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                containerStyle={{
                  width: 190,
                  // marginHorizontal: 50,
                  marginVertical: 10,
                  marginLeft:10
                }}
                onPress={()=>placeOrder()}
              />
      <Button
                title="Add To Cart"
                buttonStyle={{
                  borderColor: 'rgba(78, 116, 289, 1)',
                }}
                type="outline"
                raised
                titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                containerStyle={{
                  width: 190,
                  // marginHorizontal: 50,
                  marginVertical: 10,
                  marginLeft:13,
                }}

                
              />
      </View>
    </View>
  );
};

export default ProductsView;

const styles = StyleSheet.create({
  // Image Styleing
  main_card_view: {
    height: "60%",
    paddingTop: 20,
    backgroundColor: "white",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  icons_view: {
    padding: 15,
  },
  image: {
    resizeMode: "contain",
    height: "85%",
    width: 400,
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },

  // Text Styling
  main_text_view: {
    marginTop: 10,
  },

  // Button View Styling
  order_button:{
    display:"flex",
    flexDirection:"row",
    width:'100%',
  },
});
