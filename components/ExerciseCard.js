import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';

const ExerciseCard = ({exercise,navigation}) => {
    
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

  return (

    <TouchableOpacity style={{ height:height/9,marginLeft:15,marginRight:15,margin:5,borderRadius:5,borderWidth:2,borderColor:specialColor,
    backgroundColor:backgroundColor,alignItems:"center",flexDirection:"row" }} onPress={()=>navigation.navigate("Exercise Details Screen",{exercise:exercise})} >

    <View style={{ margin:10}}>
    <Image style={{ height:height/11,width:height/11}}  source={{ uri:exercise.image_s}} />
    </View>

    <View style={{ }}>
    <Text style={{ color:detailColor,fontSize:15,fontWeight:"bold"}}>{exercise.name}</Text>
    <Text style={{ color:detailColor,fontSize:11,}}>- {exercise.calorie} cal/rep</Text>
    <Text style={{ color:detailColor,fontSize:11,}}>- {exercise.target}</Text>
    </View>

    </TouchableOpacity>

  )
}

export default ExerciseCard