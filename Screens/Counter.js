import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";


const CounterTwo = ({counter,count}) => {
  return (
    <View style={styles.counter2}>
      <View style={styles.inner_view2}>
        <View>
          <TouchableOpacity onPress={() => counter(count - 1)} activeOpacity={0.9}>
            <Text  style={[
                      styles.text2,
                      styles.counttext2,
                    ]}> - </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[
                      styles.text2,
                      styles.counter2,
                    ]}>
       
            {count}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => counter(count + 1)} activeOpacity={0.9}>
            <Text  style={[
                      styles.text2,
                      styles.counttext2,
                    ]}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};




const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.counter}>
      <View style={styles.inner_view}>
        <View>
          <TouchableOpacity onPress={() => setCount(count - 1)} activeOpacity={0.9}>
            <Text  style={[
                      styles.text,
                      styles.counttext,
                    ]}> - </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[
                      styles.text,
                      styles.counter,
                    ]}>
       
            {count}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => setCount(count + 1)} activeOpacity={0.9}>
            <Text  style={[
                      styles.text,
                      styles.counttext,
                    ]}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export {CounterTwo,Counter};

const styles = StyleSheet.create({
  inner_view: {
    display: "flex",
    flexDirection: "row",
    // marginTop:20,
    marginBottom:10,
  },
  text: {
    fontSize: 18,
    color:'black'
 
  },
  counttext:{
    backgroundColor:'#FBEFE7',
    borderRadius:5,
  },
  counter:{
    marginLeft:10,
    marginRight:10,
    color:'white'
  },
  inner_view2: {
    display: "flex",
    flexDirection: 'column',
    // marginTop:20,
    marginBottom:10,
  },
  text2: {
    fontSize: 20,
    color:'black'
    
  },
  counttext2:{
    backgroundColor:'#00cd85',
    borderRadius:25,
    textAlign:'center',
    color:'white',
  },
  counter2:{
    marginLeft:10,
    marginRight:10,
    color:'black'
  },
});
