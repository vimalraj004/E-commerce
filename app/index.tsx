import { Text, View } from "react-native";
import {useFonts} from "expo-font"

export default function Index() {
  const [fontsLoaded] = useFonts({
     'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  })
  if(!fontsLoaded) return null;
  return (
   
        <View className="flex-1 border-red-600 items-center justify-center ">
      <Text className="text-4xl font-bold text-blue-500">
        Welcome to VJ MART
      </Text>
    </View>


  );
}
