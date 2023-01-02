import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import MealCard from './MealCard';

const Meals = ({meals,navigation}) => {
  if(!meals){
    return(
    <View>
    </View>
    )
}
return (
<View>
  {meals.map((item)=><MealCard navigation={navigation} meal={item} key={item.id} />)}
</View>
)
}

export default Meals