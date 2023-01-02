import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor} from '../constants';
import Header from '../components/Header';
import Categories from '../components/Categories';


const HomeScreen = ({navigation}) => {
  const axios = require('axios').default
  return (
    <ScrollView style={{flex:1, backgroundColor:backgroundColor, marginTop:30}}>

    <Header navigation={navigation} />

    

    <Categories navigation={navigation} />

    </ScrollView>
  )
}

export default HomeScreen