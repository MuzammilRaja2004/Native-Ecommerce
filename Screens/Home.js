import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";

import { HomeData, CardData } from "./HomeData";
import Searchbar from "./Searchbar";
import Product from "./Product";

const Home = ({ navigation }) => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={true}>

      {/* Get Search bar From Screens Folder In SearchBar.js */}
        <Searchbar />

        {/* Create Categorise Section */}
        <View style={{ marginTop: 30, flexDirection: "row" }}>
          <View>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: "#00cd8f" }}
            >
              Categorise
            </Text>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              {HomeData.map((item, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity
                      // activeOpacity={0.9}
                      onPress={() => navigation.navigate('Product')}
                    >
                      <View >
                        <Image
                          source={item.image}
                          
                          style={{
                            height: 50,
                            width: 50,
                            marginLeft: 30,
                            marginBottom: 10,
                          }}
                          
                        />
                      </View>

                      <View style={{ marginLeft: 30 }}>
                        <Text>{item.text}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        </View>


        {/* High Rated Products */}
        <View style={{ marginTop: 30, flexDirection: "row" }}>
          <View>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: "#00cd8f" }}
            >
              High Rate Products
            </Text>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 20,
                  justifyContent: "space-between",
                }}
              >
                {CardData.map((items, index) => {
                  return (
                    <View
                      key={index}
                      style={[styles.helloo, styles[`hello${index}`]]}
                    >
                    <View>
                      <Image
                        source={items.image}
                        style={{
                          width: 380,
                          height: 250,
                          resizeMode: "contain",
                        }}
                      />

                      <View>
                        <Text style={{color:'white',fontSize:30, textTransform:'capitalize',marginLeft:20,marginBottom:10,}}>{items.text}</Text>
                      </View>
                    </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  helloo: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginRight: 10,
    borderRadius: 10,
    marginLeft:10,
    marginBottom:10,
  },
  hello3: {
    marginRight: -10,
  },
  images:{
    backgroundColor:'#00b761',
  }
});
