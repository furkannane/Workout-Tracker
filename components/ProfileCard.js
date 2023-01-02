import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';

const ProfileCard = ({profile}) => {

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

  return (
    <View style={{ margin:10, borderLeftColor:specialColor,borderLeftWidth:2,flexDirection:"row",alignItems:"center"}}>

    <View style={{ marginLeft:10}}>
    <Image style={{ height:height/11,width:height/11,borderRadius:50,borderWidth:2,borderColor:detailColor}}  source={{ uri:profile.image}} />
    </View>

    <View style={{ marginLeft:20 }}>
    <Text style={{ color:detailColor,fontSize:15,fontWeight:"bold"}}>{profile.user.username}</Text>
    <Text style={{ color:detailColor,fontSize:11,fontStyle:"italic"}}>{profile.title}</Text>
    
    

    </View>

    </View>
  )
}

export default ProfileCard