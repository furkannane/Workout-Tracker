import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';

const FoodCard = ({food,navigation}) => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

  return (

    <TouchableOpacity style={{ height:height/9,marginLeft:15,marginRight:15,margin:5,borderRadius:5,borderWidth:2,borderColor:specialColor,
    backgroundColor:backgroundColor,alignItems:"center",flexDirection:"row" }} onPress={()=>navigation.navigate("Food Details Screen",{food:food})} >

    <View style={{ margin:10}}>
    <Image style={{ height:height/11,width:height/11}}  source={{ uri:food.image_s}} />
    </View>

    <View style={{ }}>
    <Text style={{ color:detailColor,fontSize:15,fontWeight:"bold"}}>{food.name}</Text>
    <Text style={{ color:detailColor,fontSize:11,}}>- {food.calorie} cal/100g</Text>
    <Text style={{ color:detailColor,fontSize:11,}}>- Carb: {food.carb}g, Protein: {food.protein}g, Fat: {food.fat}g</Text>
    </View>

    </TouchableOpacity>

  )
}

export default FoodCard