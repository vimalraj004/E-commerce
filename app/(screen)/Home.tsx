import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Showallproducts from "../components/ShowProducts";
import ShowOptions from "../components/ShowOptions";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
const Home = () => {
  const [searchIcon, setSearchIcon] = useState(false);
  return (
    <SafeAreaView className=" border-[2px] h-[100%] W-[100%]">
      <View className=" border-[2px] h-[8%] w-[100%] flex flex-row ">
        <View className=" border-[2px] h-[100%] w-[15%] flex justify-center items-center cursor-pointer">
          <TouchableOpacity>
            <FontAwesome5 name="hamburger" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View className=" border-[2px] flex-1 flex justify-center items-center">
          <Text>Home page</Text>
        </View>
        <View className=" border-[2px] h-[100%] w-[15%]">
          <TouchableOpacity>
            <View className=" border-[2px] h-[70%] w-[70%]  rounded-full m-[10px] flex justify-center items-center "></View>
          </TouchableOpacity>
        </View>
      </View>

      <View className=" border-[2px] h-[8%] w-[100%] flex flex-row justify-center items-center  ">
        <View
          className={` h-[100%] ${searchIcon?"w-[95%]":"w-[10%]"}   flex flex-row justify-between items-center absolute left-5 transition-all duration-[1000ms] ease-in-out `}
        >
          <TouchableOpacity onPress={() => setSearchIcon(!searchIcon)} >
            <FontAwesome5 name="search" size={24} color="black" />
          </TouchableOpacity>
          {searchIcon && (
            <>
              <TextInput
                placeholder="Search"
                className="border-[2px] rounded-lg h-[70%] w-[60%] text-[18px] pl-5 pr-5 "
              />
              <TouchableOpacity className="h-[70%] w-[20%] border-[2px] rounded-xl bg-cyan-950 justify-center items-center">
                <Text className="text-white text-[15px] font-bold">Search</Text>
              </TouchableOpacity>
              {/* <AntDesign name="doubleleft" size={24} color="black" /> */}
            </>
          )}
        </View>
          {!searchIcon && (
            <Text className="text-xl"> My Life My Rules My Style</Text>
          )}
      </View>

      <View className="border-[2px] h-[8%] w-[100%] ">
        <ShowOptions />
      </View>
      <View className="h-[78.7%] w-[100%] overflow-hidden  border-[2px] ">
        <Showallproducts />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
