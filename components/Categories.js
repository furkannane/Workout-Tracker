import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import CategoryCard from './CategoryCard';

const Categories = ({navigation}) => {
  return (
    <View>
      
      <View style={{ flexDirection:"row",margin:10}}>
        <View style={{ flex:1,alignItems:"center",justifyContent:"center" }}>
        <CategoryCard text={"Training Log"} navigation={navigation} img={"https://yourdigilab.com/images/shares/upload/6311d752c95b6.png"} screen={"Training Log Screen"} />
        </View>
        <View style={{ flex:1,alignItems:"center",justifyContent:"center" }}>
        <CategoryCard text={"Meal Log"} navigation={navigation} img={"https://www.pngmart.com/files/8/Plan-PNG-Photos.png"} screen={"Meal Log Screen"}/>
        </View> 
        
      </View>

      <View style={{ flexDirection:"row",margin:10}}>
      <View style={{ flex:1,alignItems:"center",justifyContent:"center" }}>
        <CategoryCard text={"Popular Workouts"} navigation={navigation} img={"https://www.pngarts.com/files/1/Abs-Exercise-PNG-Free-Download.png"} screen={"Popular Workouts Screen"} />
        </View>    
        <View style={{ flex:1,alignItems:"center",justifyContent:"center" }}>
        <CategoryCard text={"Popular Diets"} navigation={navigation} screen={"Popular Diets Screen"} img={"https://www.pngkit.com/png/full/54-547637_food-vitamins-and-minerals.png"} />
        </View>
      </View>

      <View style={{ flexDirection:"row",margin:10}}>
      <View style={{ flex:1,alignItems:"center",justifyContent:"center" }}>
        <CategoryCard text={"Exercise Database"} navigation={navigation} img={"https://pngteam.com/images/exercise-png-1280x721_06a15207_transparent.png"} screen={"Exercises Screen"}/>
        </View> 
      <View style={{ flex:1,alignItems:"center",justifyContent:"center" }}>
        <CategoryCard text={"Food Database"} navigation={navigation} screen={"Foods Screen"} img={"https://static.vecteezy.com/system/resources/previews/012/174/508/original/variety-of-fruits-fruit-dietary-fiber-vegetable-food-health-fresh-fruits-natural-foods-orange-nutrition-free-png.png"} />
        </View>
      </View>

  



    </View>
  )
}

export default Categories