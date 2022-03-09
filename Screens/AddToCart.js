import { StyleSheet, Text, View } from 'react-native';
import React,{useContext,useState,useEffect} from 'react';
import {User} from '../App';
import CardItem from './CardItem';

;

;

;

const AddToCart = () => {
  const user = useContext(User);

  const [cart, setCart] = useState(user.cart);

  // useEffect(() => {
    
  // }, []);
  



  return (
    <>
    <View>
      {cart.map((item,index)=>{
        return(
          <CardItem id={item}key={index} />
        )
      })}

      {/* <CardItem id='5CDs9AptWBDMZcvKQ3r5'/> */}
    </View>
    </>
  );
};

export default AddToCart;

const styles = StyleSheet.create({});
