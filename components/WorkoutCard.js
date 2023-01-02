import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';

const WorkoutCard = ({workout,navigation}) => {
    
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    let calorie = 0
    let target = workout.exercises[0].target

    for(let i=0;i<workout.exercises.length;i++)
    {
        calorie = calorie + workout.exercises[i].calorie
    }
  return (

    <TouchableOpacity style={{ height:height/9,marginLeft:15,marginRight:15,margin:5,borderRadius:5,borderWidth:2,borderColor:specialColor,
    backgroundColor:backgroundColor,alignItems:"center",flexDirection:"row" }} onPress={()=>navigation.navigate("Popular Workout Details Screen",{workout:workout})} >

    <View style={{ margin:10}}>
    <Image style={{ height:height/11,width:height/11}}  source={{ uri:workout.image_s}} />
    </View>

    <View style={{ }}>
    <Text style={{ color:detailColor,fontSize:15,fontWeight:"bold"}}>{workout.name}</Text>
    <Text style={{ color:detailColor,fontSize:11,}}>- {calorie*10} cal/10 rep</Text>
    <Text style={{ color:detailColor,fontSize:11,}}>- {target}</Text>
    </View>

    </TouchableOpacity>

  )
}

export default WorkoutCard