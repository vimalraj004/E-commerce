import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
const data = [
  { id: '1', title: 'Item One' },
  { id: '2', title: 'Item Two' },
  { id: '3', title: 'Item Three' },
   { id: '4', title: 'Item four' },
     { id: '5', title: 'Item One' },
  { id: '6', title: 'Item Two' },
  { id: '7', title: 'Item Three' },
   { id: '8', title: 'Item four' },
     { id: '9', title: 'Item One' },
  { id: '10', title: 'Item Two' },
  { id: '11', title: 'Item Three' },
   { id: '12', title: 'Item four' },
     { id: '13', title: 'Item One' },
  { id: '14', title: 'Item Two' },
  { id: '15', title: 'Item Three' },
   { id: '16', title: 'Item four' },
     { id: '17', title: 'Item One' },
  { id: '18', title: 'Item Two' },
  { id: '19', title: 'Item Three' },
   { id: '20', title: 'Item four' },
];
const Showallproducts = () => {
  return (
    <FlatList 
    data={data}
    numColumns={2}
  showsVerticalScrollIndicator={false}
    columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 10 }} // optional styling
    contentContainerStyle={{ paddingVertical: 10 }} // optional padding
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
      <View className='border-[2px] border-blue-500 h-[250px] w-[48%%]  items-center rounded-lg mb-[10px]'>
          <Text>{item.id}</Text>
      </View>
    )}/>
  )
}

export default Showallproducts

const styles = StyleSheet.create({})