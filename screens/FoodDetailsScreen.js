import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import Header from '../components/Header';
import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';


const FoodDetailsScreen = ({route,navigation}) => {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const food = route.params.food

  return (
    <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>

    <Header navigation={navigation} />

    <Image style={{ height:width,width:width }} source={{ uri:food.image_l}} />

    <View style={{ margin:5 }}>

    <View style={{ marginLeft:10,flexDirection:"row"}}>
    <AntDesign name="notification" size={24} color={specialColor} />
    <Text style={{ fontWeight:"bold",fontSize:20,color:detailColor,marginLeft:10 }}>{food.name}</Text>
    </View>
    
    <View style={{ flexDirection:"row",borderBottomColor:detailColor,borderBottomWidth:2,padding:5 }}>
    <AntDesign name="calculator" size={20} color={specialColor} />
    <Text style={{ fontWeight:"bold",marginRight:10,color:detailColor,marginLeft:5  }}>{food.calorie} cal/100g</Text>
    <MaterialCommunityIcons name="target" size={20} color={specialColor} />
    <Text style={{ fontWeight:"bold",marginRight:10,color:detailColor,marginLeft:5  }}>Carb: {food.carb}g, Protein: {food.protein}g, Fat: {food.fat}g</Text>
    </View>
    

    </View>

    
    <Text style={{ margin:10,color:detailColor }}>{food.description}</Text>


    </ScrollView>
  )
}

export default FoodDetailsScreen