import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import Header from '../components/Header';
import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
import Exercises from '../components/Exercises';


const PopularWorkoutDetailsScreen = ({route,navigation}) => {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const workout = route.params.workout

  let calorie = 0
  let target = workout.exercises[0].target

  for(let i=0;i<workout.exercises.length;i++)
  {
      calorie = calorie + workout.exercises[i].calorie
  }

  return (
    <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>

    <Header navigation={navigation} />

    <Image style={{ height:width,width:width }} source={{ uri:workout.image_l}} />

    <View style={{ margin:5 }}>

    <View style={{ marginLeft:10,flexDirection:"row"}}>
    <AntDesign name="notification" size={24} color={specialColor} />
    <Text style={{ fontWeight:"bold",fontSize:20,color:detailColor,marginLeft:10 }}>{workout.name}</Text>
    </View>
    
    <View style={{ margin:10,borderBottomColor:detailColor,borderBottomWidth:2,padding:5 }}>
    <View style={{ flexDirection:"row", }}>
    <AntDesign name="calculator" size={20} color={specialColor} />
    <Text style={{ fontWeight:"bold",marginRight:10,color:detailColor,marginLeft:5  }}>{calorie*10} cal/10 rep</Text>
    </View>
    <View style={{ flexDirection:"row", }}>
    <MaterialCommunityIcons name="target" size={20} color={specialColor} />
    <Text style={{ fontWeight:"bold",marginRight:10,color:detailColor,marginLeft:5  }}>{target}</Text>
    </View>
    <View style={{ flexDirection:"row", }}>
    <MaterialCommunityIcons name="human" size={20} color={specialColor} />
    <Text style={{ fontWeight:"bold",marginRight:10,color:detailColor,marginLeft:5  }}>{workout.user.username}</Text>
    </View>
    
    
    </View>
    

    </View>

    
    <Text style={{ margin:10,color:detailColor }}>{workout.description}</Text>

    <Exercises exercises={workout.exercises} navigation={navigation} />


    </ScrollView>
  )
}

export default PopularWorkoutDetailsScreen