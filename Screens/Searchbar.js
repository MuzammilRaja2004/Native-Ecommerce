import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
// Get Link From React Native Vector Icon
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Searchbar = () => {
  {
    /* Create Searchbar */
  }
  return (
    <View>
      <View style={{ marginTop: 5, flexDirection: "row" }}>
        <View style={styles.searchContainer}>
          <FontAwesome
            name="search"
            size={18}
            color="black"
            style={{ marginLeft: 20, marginRight: 15 }}
          />
          <TextInput placeholder="Search" />
        </View>

        <View style={styles.sortBtn}>
          <MaterialCommunityIcons name="sort-variant" size={30} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  searchContainer: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    fontSize: 20,
    color: "#000",
    flex: 1,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d1b27",
    borderRadius: 5,
  },
});
