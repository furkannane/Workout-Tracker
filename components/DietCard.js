import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';

const DietCard = ({diet,navigation}) => {
    
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    let calorie = 0
    let carb = 0
    let fat = 0
    let protein = 0

  for(let i=0;i<diet.foods.length;i++)
  {
      calorie = calorie + diet.foods[i].calorie
      carb = carb + diet.foods[i].carb
      fat = fat + diet.foods[i].fat
      protein = protein + diet.foods[i].protein
  }

  return (

    <TouchableOpacity style={{ height:height/9,marginLeft:15,marginRight:15,margin:5,borderRadius:5,borderWidth:2,borderColor:specialColor,
    backgroundColor:backgroundColor,alignItems:"center",flexDirection:"row" }} onPress={()=>navigation.navigate("Popular Diet Details Screen",{diet:diet})} >

    <View style={{ margin:10}}>
    <Image style={{ height:height/11,width:height/11}}  source={{ uri:diet.image_s}} />
    </View>

    <View style={{ }}>
    <Text style={{ color:detailColor,fontSize:15,fontWeight:"bold"}}>{diet.name}</Text>
    <Text style={{ color:detailColor,fontSize:11,}}>- {calorie} cal per meal</Text>
    <Text style={{ color:detailColor,fontSize:11,}}>- Carb: {carb}g, Protein: {protein}g, Fat: {fat}g</Text>
    </View>

    </TouchableOpacity>

  )
}

export default DietCard