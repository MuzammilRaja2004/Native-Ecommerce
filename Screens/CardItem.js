import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase/Config";
import { CounterTwo } from "./Counter";
import orderForm from "./orderForm";
import { useNavigation } from '@react-navigation/native';

// import { useSelector, useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../Components/State/index";


const CardItems = ({ id }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");

  useEffect(() => {
    onSnapshot(doc(db, "Products", id), (doc) => {
      setProduct({ ...doc.data(), id: doc.id });
      setImage(doc.data().image);
    });
    // console.log("product id"+id)
  }, []);




  // const [quantity, setQuantity] = useState(1);
  // const placeOrder = () => {
  //   dispatch(actionCreators.placeOrder({id:product.id,quantity}))
  //   navigation.navigate('orderForm')
  // };




const counter = (value) => {
  setQuantity(value);
}

  

  return (
    <>
      {product && (
        <View style={styles.main_view}>
          <View style={styles.tocart_view}>
            <View style={styles.cartimage_view}>
              <Image
                source={{ uri: image }}
                style={{ height: 100, width: 150, resizeMode: "contain" }}
              />
              <View style={styles.carttext_view}>
                <Text style={styles.cart_head}>{product.model}</Text>
                <Text style={styles.cart_text}>{product.price}</Text>
                <TouchableOpacity
                  style={styles.order_btn}
                onPress={()=>placeOrder()}
                >
                  <Text style={{color:'white',fontSize:20,}}>Place Order</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.cartcounter_view}>
              {/* <CounterTwo counter={counter} count={quantity} /> */}
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default CardItems;

const styles = StyleSheet.create({
  tocart_view: {
    backgroundColor: "white",
    height: 110,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    alignItems: "center",
  },
  cartimage_view: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  cart_head: {
    fontSize: 18,
    // marginLeft:-20
  },
  cart_text: {
    fontSize: 20,
  },
  order_btn: {
    backgroundColor:'#00cd85',
    color:'#ffffff',
    textAlign: "center",
    padding: 5,
    width: 125,
    borderRadius: 4,
  },
});
