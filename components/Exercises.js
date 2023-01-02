import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import ExerciseCard from '../components/ExerciseCard';

const Exercises = ({exercises,navigation}) => {

    if(!exercises){
        return(
        <View>
        </View>
        )
    }
  return (
    <View>
      {exercises.map((item)=><ExerciseCard navigation={navigation} exercise={item} key={item.id}></ExerciseCard>)}
    </View>
  )
}

export default Exercises