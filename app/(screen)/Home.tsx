import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Showallproducts from "../components/ShowProducts";

const Home = () => {
  return (
    <SafeAreaView className="border border-red-500 border-[2px] h-[100%] W-[100%]">
      <View className="border border-green-400 border-[2px] h-[8%] w-[100%] flex flex-row ">
        <View className="border border-blue-400 border-[2px] h-[100%] w-[15%] flex justify-center items-center cursor-pointer">
          <TouchableOpacity>
            <FontAwesome5 name="hamburger" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View className="border border-purple-400 border-[2px] flex-1 flex justify-center items-center">
          <Text>Home page</Text>
        </View>
        <View className="border border-brown-400 border-[2px] h-[100%] w-[15%]">
          <TouchableOpacity>
            <View className="border border-red-500 border-[2px] h-[70%] w-[70%]  rounded-full m-[10px] flex justify-center items-center cursor-pointer"></View>
          </TouchableOpacity>
        </View>
      </View>
      <View className="border border-red-500 border-[2px] h-[8%] w-[100%] flex justify-center items-center">
        <Text className="text-xl"> My Life My Rules My Style</Text>
      </View>
      <View className="border border-red-500 border-[2px] h-[8%] w-[100%] flex flex-row justify-evenly items-center">
        <FontAwesome5 name="search" size={24} color="black" />
        <TextInput
          placeholder="Search "
          className="border-[2px] rounded-lg h-[70%] w-[60%] text-[18px] pl-5 pr-5 "
        />
        <TouchableOpacity className="h-[70%] w-[20%] border-[2px] rounded-xl bg-cyan-950 justify-center items-center ">
          <Text className="text-white text-[15px] font-bold">Search</Text>
        </TouchableOpacity>
      </View>
      <View className="border border-red-500 border-[2px] h-[8%] w-[100%] flex flex-row justify-evenly items-center">
        <TouchableOpacity className="h-[70%] w-[25%] border-[2px] rounded-3xl bg-cyan-950 justify-center items-center ">
          <Text className="text-white text-[15px] font-bold">Formals</Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-[70%] w-[25%] border-[2px] rounded-3xl bg-cyan-950 justify-center items-center ">
          <Text className="text-white text-[15px] font-bold">Casuals</Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-[70%] w-[25%] border-[2px] rounded-3xl bg-cyan-950 justify-center items-center ">
          <Text className="text-white text-[15px] font-bold">Blazers</Text>
        </TouchableOpacity>
      </View>
    <View className='border-[2px] border-purple-500 h-[100%] w-[100%] '>
              <Showallproducts />

    </View >
      
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
