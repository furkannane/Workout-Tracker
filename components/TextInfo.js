import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native';
import React, { useState } from 'react'
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';

const TextInfo = ({text,colorDark}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

  return (
    <View style={{ height:height/15, marginLeft:20 }}>
      <Text style={{ fontWeight:'bold', color:"white", fontSize:20 }}>{text}</Text>
    </View>
  )
}

export default TextInfo