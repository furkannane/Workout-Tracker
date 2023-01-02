import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import WorkoutCard from '../components/WorkoutCard';

const Workouts = ({workouts,navigation}) => {

    if(!workouts){
        return(
        <View>
        </View>
        )
    }
  return (
    <View>
      {workouts.map((item)=><WorkoutCard navigation={navigation} workout={item} key={item.id}></WorkoutCard>)}
    </View>
  )
}

export default Workouts