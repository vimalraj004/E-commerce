import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { mens_shirts } from "../../constants/allProducts";
import AnimatedStarRatings from "./AnimatedStarRatings";

const ShowProducts = () => {
  const [liked, setLiked] = useState<{ [key: string]: boolean }>({});
  const toggleLiked = (id: string) => {
    setLiked((preval) => ({
      ...preval,
      [id]: !preval[id],
    }));
  };
  return (
    <FlatList
      data={mens_shirts}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{
        justifyContent: "space-between",
        paddingHorizontal: 10,
      }} // optional styling
      contentContainerStyle={{ paddingVertical: 10 }} // optional padding
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View className="border-[2px] border-blue-500 h-[250px] w-[48%%]  items-center rounded-lg mb-[10px]">
          <View className=" w-[100%] h-[60%]">
            <Image
              source={{ uri: item.images[0] }}
              style={{ height: 145, width: 180, borderRadius: 5 }}
              resizeMode="cover"
            />
            <TouchableOpacity
              className=" absolute right-1 top-1 "
              onPress={() => toggleLiked(item.id)}
            >
              <FontAwesome
                name="heart"
                size={24}
                color={liked[item.id] ? "red" : "black"}
              />
            </TouchableOpacity>
          </View>

          <Text className="text-[15px] font-poppins-semibold text-[#404146] tracking-wide text-center">
            {item.title}
          </Text>
          <View className=" h-[30px] w-[90%] mt-2  ">
            <AnimatedStarRatings ratting={item.rating} />
          </View>
          <Text className="text-[15px]  font-bold font-poppins-semibold text-[#de8934] tracking-wide text-center">
            $ {item.price}
          </Text>
        </View>
      )}
    />
  );
};

export default ShowProducts;

const styles = StyleSheet.create({});
