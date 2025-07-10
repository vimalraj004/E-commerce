import { Animated, Easing, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';


const AnimatedStarRatings = ({ratting}:{ratting:number}) => {
    const star =[1,2,3,4,5]
    const renderstart = (index:number)=>{
       
        let filled = index < Math.floor(ratting)
        let halffilled = ratting % 1 !== 0 && Math.ceil(ratting) === index +1
         let scale = new Animated.Value(filled || halffilled ?0:1)
        if(filled || halffilled){
            Animated.timing(scale,{
                toValue:1,
                duration:400,
                useNativeDriver:true,
                easing:Easing.bounce
            }).start()

        }
        return(
            <Animated.View
            key={index}
            style={{
                transform:[{scale}],
                marginHorizontal:4
            }}>
                {filled?(
                      <FontAwesome name="star" size={20} color="#facc15" />
                ):halffilled?(
                     <FontAwesome name="star-half-full" size={20} color="#facc15" />
                ):(
                     <FontAwesome name="star-o" size={20} color="#facc14"  />
                )}

            </Animated.View>

        )
    }
  return (
    <View className='flex flex-row justify-center items-center'>
     {star.map((index)=>renderstart(index))}
    </View>
  )
}

export default AnimatedStarRatings

const styles = StyleSheet.create({})