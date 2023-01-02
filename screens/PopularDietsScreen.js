import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import Header from '../components/Header';
import Diets from '../components/Diets';
import TextInfo from '../components/TextInfo';

const PopularDietsScreen = ({navigation}) => {
    const [data,setData] = useState("")
    const axios = require('axios').default
    const apiName = "https://tryexample.loca.lt"
  
    useEffect(()=>{
      axios.get(apiName+"/api/diets")
      .then((r)=>{
        setData(r.data)
        console.log("Diet list is ready")
      })
      .catch(function (error) {
        console.log(error);
      })
  
    },[])
  
    return (
      <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>
  
      <Header navigation={navigation} />

      <TextInfo text="Popular Diets"></TextInfo>
  
      <Diets diets={data} navigation={navigation} />
  
      </ScrollView>
    )
}

export default PopularDietsScreen