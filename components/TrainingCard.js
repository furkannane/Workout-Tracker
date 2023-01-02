import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import { Feather,FontAwesome } from '@expo/vector-icons';

const TrainingCard = ({training,navigation}) => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    let calorie = 0
    let target = training.workout.exercises[0].target

    for(let i=0;i<training.workout.exercises.length;i++)
    {
        calorie = calorie + training.workout.exercises[i].calorie
    }
  return (

    <TouchableOpacity style={{ height:height/9,marginLeft:15,marginRight:15,margin:5,borderRadius:5,borderWidth:2,borderColor:specialColor,
    backgroundColor:backgroundColor,alignItems:"center",flexDirection:"row" }} onPress={()=>navigation.navigate("Popular Workout Details Screen",{workout:training.workout})} >

    <View style={{ margin:10}}>
    <Image style={{ height:height/11,width:height/11}}  source={{ uri:training.workout.image_s}} />
    </View>

    <View style={{ flex:1}}>
    <View style={{ flexDirection:"row" }}>
    <Text style={{ color:detailColor,fontSize:15,fontWeight:"bold",flex:1}}>{training.workout.name} - Day {training.day}</Text>
    <View style={{ flexDirection:"row", alignItems:"center" }}>
    <FontAwesome name="star" size={24} color="gold" />
    <Text style={{ color:detailColor,fontSize:15,fontWeight:"bold",marginRight:10,marginLeft:5}}>{training.performance}</Text>
    </View>
    
    </View>
    
    <Text style={{ color:detailColor,fontSize:11,}}>- {calorie*10} calorie</Text>
    <Text style={{ color:detailColor,fontSize:11,}}>- {target}</Text>
    </View>

    </TouchableOpacity>

  )
}

export default TrainingCard