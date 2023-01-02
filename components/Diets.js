import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import DietCard from "./DietCard"

const Diets = ({diets,navigation}) => {

    if(!diets){
        return(
        <View>
        </View>
        )
    }
  return (
    <View>
      {diets.map((item)=><DietCard navigation={navigation} diet={item} key={item.id}></DietCard>)}
    </View>
  )
}

export default Diets