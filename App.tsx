/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import "react-native-gesture-handler"
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { withAuthenticator } from "aws-amplify-react-native"
import RootNavigation from "./src/navigation";



function App(): JSX.Element {

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <RootNavigation />
      </SafeAreaView>
    </>
  );
}


export default withAuthenticator(App);
