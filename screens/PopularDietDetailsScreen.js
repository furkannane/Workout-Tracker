import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import Header from '../components/Header';
import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
import Foods from '../components/Foods';

const PopularDietDetailsScreen = ({route,navigation}) => {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const diet = route.params.diet

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
    <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>

    <Header navigation={navigation} />

    <Image style={{ height:width,width:width }} source={{ uri:diet.image_l}} />

    <View style={{ margin:5 }}>

    <View style={{ marginLeft:10,flexDirection:"row"}}>
    <AntDesign name="notification" size={24} color={specialColor} />
    <Text style={{ fontWeight:"bold",fontSize:20,color:detailColor,marginLeft:10 }}>{diet.name}</Text>
    </View>
    
    <View style={{ margin:10,borderBottomColor:detailColor,borderBottomWidth:2,padding:5 }}>
        
    <View style={{ flexDirection:"row" }}>
    <AntDesign name="calculator" size={20} color={specialColor} />
    <Text style={{ fontWeight:"bold",marginRight:10,color:detailColor,marginLeft:5  }}>{calorie} cal per meal</Text>
    </View>
    <View style={{ flexDirection:"row" }}>
    <MaterialCommunityIcons name="target" size={20} color={specialColor} />
    <Text style={{ fontWeight:"bold",marginRight:10,color:detailColor,marginLeft:5  }}>Carb: {carb}g, Protein: {protein}g, Fat: {fat}g</Text>
    </View>
    <View style={{ flexDirection:"row", }}>
    <MaterialCommunityIcons name="human" size={20} color={specialColor} />
    <Text style={{ fontWeight:"bold",marginRight:10,color:detailColor,marginLeft:5  }}>{diet.user.username}</Text>
    </View>
    </View>


    </View>

    
    <Text style={{ margin:10,color:detailColor }}>{diet.description}</Text>

    <Foods foods={diet.foods} navigation={navigation} />


    </ScrollView>
  )
}

export default PopularDietDetailsScreen