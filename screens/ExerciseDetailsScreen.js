import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import Header from '../components/Header';
import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';


const ExerciseDetailsScreen = ({route,navigation}) => {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const exercise = route.params.exercise

  return (
    <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>

    <Header navigation={navigation} />

    <Image style={{ height:width,width:width }} source={{ uri:exercise.image_l}} />

    <View style={{ margin:5 }}>

    <View style={{ marginLeft:10,flexDirection:"row"}}>
    <AntDesign name="notification" size={24} color={specialColor} />
    <Text style={{ fontWeight:"bold",fontSize:20,color:detailColor,marginLeft:10 }}>{exercise.name}</Text>
    </View>
    
    <View style={{ flexDirection:"row",margin:10,borderBottomColor:detailColor,borderBottomWidth:2,padding:5 }}>
    <AntDesign name="calculator" size={20} color={specialColor} />
    <Text style={{ fontWeight:"bold",marginRight:10,color:detailColor,marginLeft:5  }}>{exercise.calorie} cal/rep</Text>
    <MaterialCommunityIcons name="target" size={20} color={specialColor} />
    <Text style={{ fontWeight:"bold",marginRight:10,color:detailColor,marginLeft:5  }}>{exercise.target}</Text>
    </View>
    

    </View>

    
    <Text style={{ margin:10,color:detailColor }}>{exercise.description}</Text>


    </ScrollView>
  )
}

export default ExerciseDetailsScreen