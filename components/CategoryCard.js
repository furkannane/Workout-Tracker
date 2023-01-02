import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';

const CategoryCard = ({img,text,navigation,screen}) => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
  return (
    <TouchableOpacity style={{ height:width*4/10,width:width*4/10,backgroundColor:themeColor,borderWidth:2,borderColor:detailColor}} onPress={()=>navigation.navigate(screen)}>  

        <View style={{ flex:3,alignItems:"center",justifyContent:"center"}}>
        <Image style={{ height:"90%", width:"80%",}} 
        source={{ uri:img}} />
        </View>

        <View style={{ flex:1 ,alignItems:"center"}}>
        <Text style={{ color:detailColor,fontSize:15,fontWeight:"bold"}}>{text}</Text>
        </View>

    </TouchableOpacity>
  )
}

export default CategoryCard