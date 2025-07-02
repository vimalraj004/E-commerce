import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarIconStyle:{
            width:"100%",
            height:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            marginTop:10,
            // borderColor:"green",
            borderWidth:2

        },
        tabBarStyle:{
          backgroundColor:"black",
          borderRadius:50,
          marginHorizontal:20,
          marginBottom:30,
          height:70,
          position:"absolute",
          overflow:"hidden",
          // borderColor:"green",
          borderWidth:5
        }
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={30}
              color={focused ? "red" : "white"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Whishlist"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="heart" size={25} color={focused ? "red" : "white"}/>
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="shopping-cart" size={25} color={focused ? "red" : "white"} />
          ),
        }}
      />

      <Tabs.Screen
        name="Myaccount"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="manage-accounts" size={35} color={focused ? "red" : "white"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
