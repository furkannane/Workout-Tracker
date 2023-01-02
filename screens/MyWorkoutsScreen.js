import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import Header from '../components/Header';
import Workouts from '../components/Workouts';
import TextInfo from '../components/TextInfo';

const MyWorkoutsScreen = ({navigation}) => {
    const [data,setData] = useState("")
    const axios = require('axios').default
    const apiName = "https://tryexample.loca.lt"
    const headers = {'Authorization': `Token ddeccd23a6aaf36a0e45eb55b97d57df146440be`};
  
    useEffect(()=>{
      axios.get(apiName+"/api/my-workouts",{headers})
      .then((r)=>{
        setData(r.data)
        console.log("My workout list is ready")
      })
      .catch(function (error) {
        console.log(error);
      })
  
    },[])
  
    return (
      <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>
  
      <Header navigation={navigation} />

      <TextInfo text="My Workouts" />
  
      <Workouts workouts={data} navigation={navigation} />
  
      </ScrollView>
    )
}

export default MyWorkoutsScreen