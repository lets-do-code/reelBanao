/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import "react-native-gesture-handler"
import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { withAuthenticator } from "aws-amplify-react-native"
import RootNavigation from "./src/navigation";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { createUser } from "./src/graphql/mutations"
import { getUser } from "./src/graphql/queries";
import AuthContext from "./src/Context/AuthProvider";


const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
];


const getRandomImage = () => {
  return randomImages[Math.floor(Math.random() * randomImages.length)]
};

function App(): JSX.Element {

  const { userImage, setUserImage, userName, setUserName } = useContext(AuthContext);

  useEffect(() => {

    const fetchUser = async () => {
      //get currently authenticated user

      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      console.log(userInfo)

      if (!userInfo) {
        return;
      }


      // check if the user exists in database
      const getUserResponse = await API.graphql(
        graphqlOperation(
          getUser,
          {
            id: userInfo.attributes.sub
          }
        )
      )


      if (getUserResponse.data.getUser) {
        setUserName(getUserResponse.data.getUser.username)
        setUserImage(getUserResponse.data.getUser.imageUri)

        return;
      }

      // if it's a new user,create a new one

      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        imageUri: getRandomImage(),
      }

      await API.graphql(
        graphqlOperation(
          createUser,
          {
            input: newUser
          }
        )
      )
    }
    fetchUser();
  }, [])

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
