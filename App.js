import { StatusBar } from "expo-status-bar";
import React, { createContext, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// This Links Get From Firebase
import { doc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// This Link Get My Firebase Folder In My File Config.js
import {db} from "./Firebase/Config";

// This Link Get My Navigation Folder In My File BottomNavigation.js
import BottomNavigation from "./Navigation/BottomNavigation";

// This Links Get My Screens Folder
import SignIn from "./Screens/Signin";
import SignUp from "./Screens/SignUp";
// import { store } from "./Components/State/store";

import { Provider } from "react-redux";

export const User = createContext();

function App() {
  // Create States
  const [userData, setUserData] = useState({});
  const [status, setStatus] = useState(true);
  const [account, setAccount] = useState(true);
  const [kuxhbi, setKuxhbi] = useState(false);

  useLayoutEffect(() => {
    // This Function Get From Firebase
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        onSnapshot(doc(db, "users", uid), (doc) => {
          let obj = { ...doc.data(), id: doc.id };
          setUserData(obj);
          setStatus(false);
          setKuxhbi(true);
        });
      } else {
        setKuxhbi(true);
      }
    });
  }, []);

  return (
    <>
      {/* <Provider store={store}> */}
        <User.Provider value={userData}>
          {kuxhbi && (
            <>
              {status ? (
                <>
                  {account ? (
                    <SignIn func={() => setAccount(false)} />
                  ) : (
                    <SignUp func={() => setAccount(true)} />
                  )}
                </>
              ) : (
                <BottomNavigation />
              )}
            </>
          )}
        </User.Provider>
      {/* </Provider> */}
    </>
  );
}

const Root = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

export default Root;
