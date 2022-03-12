import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Product from "../Screens/Product";
import AddToCart from "../Screens/AddToCart";
import AddProducts from "../Admin/AddProducts";

import ProductsView from "../Screens/ProductsView";
import SignUp from "../Screens/SignUp";
import OrderForm from "../Screens/OrderForm";
import UserOrder from "../Admin/UserOrder";
import OrderView from "../Admin/OrderView";
import Profile from '../Screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { User } from "../App";

const userOrderViewStack = createNativeStackNavigator();
const userViewOrders = () => {
  return (
    <userOrderViewStack.Navigator>
      <userOrderViewStack.Screen name="UserOrder" component={UserOrder} />
      <userOrderViewStack.Screen name="OrderView" component={OrderView} />
    </userOrderViewStack.Navigator>
  );
};

const viewOrderStack = createNativeStackNavigator();
const viewOrders = () => {
  return (
    <viewOrderStack.Navigator>
      <viewOrderStack.Screen name="Product" component={Product}
        options={{
          headerShown: false,
        }} />
      <viewOrderStack.Screen name="OrderForm" component={OrderForm} />
    </viewOrderStack.Navigator>
  );
};
const OrderStack = createNativeStackNavigator();
const Orders = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="AddToCart" component={AddToCart} />
      <OrderStack.Screen name="OrderForm" component={OrderForm} />
    </OrderStack.Navigator>
  );
};

const SettingsStack = createNativeStackNavigator();
const Settings = () => {
  return (
    <SettingsStack.Navigator initialRouteName="viewOrders">
      <SettingsStack.Screen
        name="viewOrders"
        component={viewOrders}
        options={{
          headerShown: false,
        }}
      />
      <SettingsStack.Screen
        name="ProductsView"
        component={ProductsView}
        options={{
          headerShown: false,
        }}
      />
    </SettingsStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  const user = useContext(User);

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
              return <Ionicons name={iconName} color={color} size={size} />
            }
            else if (route.name === 'Products') {
              iconName = focused ? 'grid' : 'grid-outline';
              return <Ionicons name={iconName} color={color} size={size} />
            }
            else if (route.name === 'Add To Cart') {
              iconName = focused ? 'basket' : 'basket-outline';
              return <Ionicons name={iconName} color={color} size={size} />
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
              return <Ionicons name={iconName} color={color} size={size} />
            }
            else if (route.name === 'Add Products') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
              return <Ionicons name={iconName} color={color} size={size} />
            }
            else if (route.name === 'Orders') {
              iconName = focused ? 'md-basket' : 'md-basket-outline';
              return <Ionicons name={iconName} color={color} size={size} />
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00cd8f',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {!!user.admin & (
          <>
            <Tab.Screen name="Home" component={Home}
              options={{
                headersShown: false,
              }}
            />
            <Tab.Screen
              name="Products"
              component={Settings}
              options={{
                headersShown: false,
              }}
            />
            <Tab.Screen
              name="Add To Cart"
              component={Orders}
              options={{
                headersShown: false,
              }}
            />
          </>
        )}
        {user.admin & (
          <>
            <Tab.Screen name="Add Products" component={AddProducts} />
            <Tab.Screen name="Orders" component={userViewOrders}
              options={{
                headersShown: false,
              }} />
            <Tab.Screen name="Profile" component={Profile} />
          </>
        )}
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});

// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "../Screens/Home";
// import Product from "../Screens/Product";
// import AddToCart from "../Screens/AddToCart";
// import AddProducts from "../Admin/AddProducts";

// const Tab = createBottomTabNavigator();
// const BottomNavigation = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Product" component={Product} />
//       <Tab.Screen name="AddToCart" component={AddToCart} />
//       <Tab.Screen name="AddProducts" component={AddProducts} />
//     </Tab.Navigator>
//   );
// };

// export default BottomNavigation;

// const styles = StyleSheet.create({});