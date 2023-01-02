import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import FoodCard from './FoodCard';

const Foods = ({foods,navigation}) => {
    if(!foods){
        return(
        <View>
        </View>
        )
    }
  return (
    <View>
      {foods.map((item)=><FoodCard navigation={navigation} food={item} key={item.id}></FoodCard>)}
    </View>
  )
}

export default Foods