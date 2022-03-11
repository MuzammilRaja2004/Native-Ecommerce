import React, { useEffect, useState, useContext } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

// This Links Get My Screens Folder
import Searchbar from "./Searchbar";
import AddToCart from "./AddToCart";
import ProductsView from "./ProductsView";

// This Links Get My Firebase Folder
import { db } from "../Firebase/Config";

// This Links Get My File App.js
import { User } from "../App";

// This Links Get From Firebase
import {
  collection,
  onSnapshot,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

const Product = ({ navigation }) => {
  // Create State
  const [product, setProduct] = useState([]);

  const userData = useContext(User);

  // Get Function From Firebase For Get Products In Firebase Database
  useEffect(() => {
    onSnapshot(collection(db, "Products"), (querySnapshot) => {
      setProduct([]);
      querySnapshot.forEach((doc) => {
        let data = { ...doc.data(), id: doc.id };
        setProduct((val) => [...val, data]);
      });
    });
  }, []);

  // This Function Work Doing onPress
  // This Function Create For Add To Cart User Id
  const addToCart = (id) => {
    // This Function Get From Firebase
    const docRef = doc(db, "users", userData.id);
    if (userData.cart.includes(id)) {
      updateDoc(docRef, {
        cart: arrayRemove(id),
      });
    } else {
      updateDoc(docRef, {
        cart: arrayUnion(id),
      });
    }
  };

  return (
    <View>
      <ScrollView>
        <Searchbar />

        <View>
          {product.map((items, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.95}
                onPress={() =>
                  navigation.navigate("ProductsView", { data: items.id })
                }
              >
                <View key={index} style={styles.productsContainer}>
                  <View
                    style={[
                      styles.innerProducts,
                      styles[`innerProducts${index}`],
                    ]}
                  >
                    <View>
                      <Image
                        style={{
                          width: 200,
                          height: 150,
                          resizeMode: "contain",
                        }}
                        source={{
                          uri: items.image,
                        }}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#1d1b27",
                          marginTop: 15,
                        }}
                      >
                        {items.model}
                      </Text>
                      <Text style={{ fontSize: 17, color: "#1d1b27" }}>
                        {items.brand}
                      </Text>

                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 17,
                            color: "#1d1b27",
                            marginRight: 10,
                          }}
                        >
                          {items.price}
                        </Text>

                        <TouchableOpacity
                          onPress={() => addToCart(items.id)}
                          style={{
                            backgroundColor: "#00cd85",
                            padding: 6,
                            borderRadius: 3,
                          }}
                        >
                          {userData.cart.includes(items.id) ? (
                            <Text style={{ fontSize: 15, color: "#ffffff" }}>
                              Remove Cart
                            </Text>
                          ) : (
                            <Text>Add To Cart</Text>
                          )}
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
export default Product;

const styles = StyleSheet.create({
  innerProducts: {
    backgroundColor: "#ffffff",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  innerProducts3: {
    marginBottom: "30%",
  },
});
