import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { options_icons } from '../../constants/allProducts'

const ShowOptions = () => {
  return (
      <FlatList
      data={options_icons}
      numColumns={1}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:15,justifyContent:'space-between'}}
      keyExtractor={(item) => item.id}
      horizontal={true}
      renderItem={({ item }) => (
        <View className=' mr-[50px]'>
          <TouchableOpacity >
             <Image
          source={{ uri: item.images[0] }} 
          style={{height:45,width:50,padding:10}}
          resizeMode='cover'/>
          </TouchableOpacity>
         
          <Text className='pl-[8px]'>{item.title}</Text>
        </View>
      )}
    />
  )
}

export default ShowOptions

const styles = StyleSheet.create({})