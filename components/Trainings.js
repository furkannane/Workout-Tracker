import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import TrainingCard from './TrainingCard';

const Trainings = ({trainings,navigation}) => {
    if(!trainings){
        return(
        <View>
        </View>
        )
    }
  return (
    <View>
      {trainings.map((item)=><TrainingCard navigation={navigation} training={item} key={item.id} />)}
    </View>
  )
}

export default Trainings