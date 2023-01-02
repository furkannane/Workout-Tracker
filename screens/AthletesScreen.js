import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import TextInfo from '../components/TextInfo';
import ProfileCard from '../components/ProfileCard';
import Header from '../components/Header';

const AthletesScreen = ({navigation}) => {

const [data,setData] = useState("")
  const axios = require('axios').default
  const apiName = "https://tryexample.loca.lt"

  useEffect(()=>{
    axios.get(apiName+"/api/profiles")
    .then((r)=>{
      setData(r.data)
      console.log("Profiles list is ready")
    })
    .catch(function (error) {
      console.log(error);
    })

  },[])

  if(data==""){
    return(
    <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>
    </ScrollView>
    )
}

  return (
    <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>

    <Header navigation={navigation} />

    <TextInfo text="All Athletes"></TextInfo>

    {data.map(item => <ProfileCard key={item.id} profile={item} />)}

    </ScrollView>
  )
}

export default AthletesScreen