import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import Header from '../components/Header';
import Exercises from '../components/Exercises';
import TextInfo from '../components/TextInfo';

const ExercisesScreen = ({navigation}) => {
  
  const [data,setData] = useState("")
  const axios = require('axios').default
  const apiName = "https://tryexample.loca.lt"

  useEffect(()=>{
    axios.get(apiName+"/api/exercises")
    .then((r)=>{
      setData(r.data)
      console.log("Exercise list is ready")
    })
    .catch(function (error) {
      console.log(error);
    })

  },[])

  return (
    <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>

    <Header navigation={navigation} />

    <TextInfo text="All Exercises"></TextInfo>

    <Exercises exercises={data} navigation={navigation} />

    </ScrollView>
  )
}

export default ExercisesScreen