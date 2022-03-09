import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
// import * as ImagePicker from "expo-image-picker";

import { db, storage } from "../Firebase/Config";
// Get Link From Firebase
// import { doc, setDoc,Ref } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { getAuth, signOut } from "firebase/auth";
// Get Link From Firebase


const AddProducts = () => {
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  // Function Get From Firebase

  const SubmitData = async () => {
    addDoc(collection(db, "Products"), {
      model,
      brand,
      details,
      price,
      image,
    }).then(() => {
      console.log("SuccessFull");
    });

    setModel("");
    setBrand ("");
    setDetails("");
    setPrice("");
    setImage("");
  };

  // Expo Image Picker Code
  // const [image, setImage] = useState(null);
  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 4],
  //     quality: 1,
  //   });

  //   if (!result.cancelled) {
  //     setImage(result.uri);

  //     // / Add Image In Firebase
  //     const uniqueId = new Date().getTime().toString();
  //     const ref = ref(storage, `products_images/${uniqueId}`);
  //     const img = await fetch(result.uri);
  //     const bytes = await img.blob();
  //     await uploadBytes(ref, bytes);

  // Get Function From Firebase
  // uploadBytes(storageRef, product)
  // .then(() => {
  // getDownloadURL(ref(storage, `product_images/${uniqueId}`))
  // .then((url) => {
  // console.log(url);
  // addDoc(collection(db, "product"), {
  // img: url,
  // })
  // .then(() => {
  // alert("then after");
  // })
  // .catch((error) => {
  // alert(error + "Catch AddDoc");
  // });
  // })
  // .catch((error) => {
  // alert(error);
  // });
  // });
  // }

  // // Add Image In Firebase
  // const uniqueId = new Date().getTime().toString();
  // const storageRef = ref(storage, `products_images/${uniqueId}`);
  // // const product = imageref.current.files[0];
  // const product = imageref.current.files[0];

  // // Get Function From Firebase
  // uploadBytes(storageRef, product).then(() => {
  //   getDownloadURL(ref(storage, `product_images/${uniqueId}`))
  //     .then((url) => {
  //       console.log(url);
  //       addDoc(collection(db, "product"), {
  //         img: url,
  //       })
  //         .then(() => {
  //           alert("then after");
  //         })
  //         .catch((error) => {
  //           alert(error + "Catch AddDoc");
  //         });
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // });
  // };

  // Pick Image Using Hardware Access
  // const [image, setImage] = useState(null);
  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [12, 12],
  //     quality: 1,
  //   });

  //   // console.log(result);
  //   // console.log(image);

  //   if (!result.cancelled) {
  //     setImage(result);
  //   }
  // };

//   const SubmitData = () => {
//     console.log(image);


//     const blob =  await new Promise((resolve, reject)=>{
// const xhr = new XMLHttpRequest();
// xhr.onLoad = function(){
// resolve(xhr. response);
// };

// xhr.onerror = function(U) {
// reject(new TypeError( 'Network request failed'));
// }
// xhr.responseType = 'blob';
// xhr.open ("GET', uri, true);
// xhr.send (nul);
//     })
// YOu seconds ROG • Lincmunit Ved changeS
// //     RNFetchBlob.fs.stat(image.uri)
// // .then((stats) => {
// //   console.log(stats);
// // })
// // .catch((err) => {
// //   console.log(err);
// // })

//     // const storageRef = ref(storage, `users/posts`);
//     // uploadBytes(storageRef, image).then(() => {
//     //   getDownloadURL(ref(storage, `users/posts`))
//     //     .then((url) => {
//     //       console.log(url)
//     //     })
//     //     .catch((error) => {
//     //       console.log(error);
//     //     });
//     // });


//   };

//   // Nouman Code

  const LogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        Alert.alert("SignOut SuccessFully");
        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView>
      <View style={styles.main_view}>
        <View style={styles.inner_view}>
          <View>
            <TextInput
              placeholder="Model"
              id="names"
              onChangeText={(text) => setModel(text)}
              style={styles.inputs}
            />
          </View>
          <View>
            <TextInput
              placeholder="Brand"
              id="type"
              onChangeText={(text) => setBrand(text)}
              style={styles.inputs}
            />
          </View>
          <View>
            <TextInput
              placeholder="Detail"
              id="details"
              onChangeText={(text) => setDetails(text)}
              style={styles.inputs}
            />
          </View>
          <View>
            <TextInput
              placeholder="Price"
              id="price"
              onChangeText={(text) => setPrice(text)}
              style={styles.inputs}
            />
          </View>

          {/* Expo Image Picker */}

          {/* <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Button
              title="Pick an image from camera roll"
              onPress={pickImage}
            />
            {image && (
              <Image
                source={{ uri: image.uri }}
                style={{ width: 200, height: 200, marginTop: 10 }}
              />
            )}
          </View> */}

          {/* My Code */}

          <View>
            <TextInput
              placeholder="Url"
              id="Url"
              onChangeText={(text) => setImage(text)}
              style={styles.inputs}
            />
          </View>

          <TouchableOpacity onPress={SubmitData}>
            <Text>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={LogOut}>
            <Text>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddProducts;

const styles = StyleSheet.create({
  main_view: {
    backgroundColor: "#0be881",
    height: "100%",
  },
  inner_view: {
    backgroundColor: "white",
    height: "90%",
    marginTop: "15%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  inputs: {
    backgroundColor: "#ECECEC",
    marginBottom: 20,
    fontSize: 18,
    padding: 6,
    borderRadius: 3,
  },
});
