import { StyleSheet, Text, View , TextInput, ActivityIndicator, FlatList, Image,ScrollView, Button, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Dimensions } from 'react-native';
import { backgroundColor,themeColor,detailColor,specialColor} from '../constants';
import { FontAwesome5,AntDesign } from '@expo/vector-icons';

const Header = ({navigation}) => {
  return (
    <View style={{ marginBottom:20 }}>

        <View style={{ flexDirection:"row", alignItems:"center", margin:10,marginLeft:20}}>

            <TouchableOpacity style={{ }} >
            <Image style={{ height:60, width:60, borderRadius:10, borderWidth:2,borderColor:specialColor}} 
            source={{ uri:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/257482688/original/7e5e0b321c1228293ba95b77b408126bd68c9011/design-sports-teams-gym-and-fitness-logo-or-business.png"}} />
            </TouchableOpacity>

            
            <View style={{ flex:1 ,alignItems:"center"}}>
            <Text style={{ color:detailColor,fontSize:23,fontWeight:"bold"}}>Workout Tracker</Text>
            </View>

            <TouchableOpacity style={{ marginRight:20,marginLeft:10,borderWidth:2,borderColor:specialColor,borderRadius:10,padding:4}}>
            <FontAwesome5 name="list" size={20} color={detailColor} />
            </TouchableOpacity>
        
        </View>

        <View style={{ flexDirection:"row", alignItems:"center", margin:10,marginLeft:20}}>
        
            <TouchableOpacity style={{ flex:1,alignItems:"center", justifyContent:"center",flexDirection:"row"  }} onPress={()=>navigation.navigate("Athletes Screen")}>
            <Text style={{ color:detailColor,borderBottomColor:specialColor,borderBottomWidth:2 }}>Athletes </Text>
            <AntDesign name="down" size={12} color={detailColor} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex:1,alignItems:"center", justifyContent:"center",flexDirection:"row"  }} onPress={()=>navigation.navigate("My Workouts Screen")} >
            <Text style={{ color:detailColor,borderBottomColor:specialColor,borderBottomWidth:2 }}>My Workouts</Text>
            <AntDesign name="down" size={12} color={detailColor} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex:1,alignItems:"center", justifyContent:"center" ,flexDirection:"row" }} onPress={()=>navigation.navigate("My Diets Screen")} >
            <Text style={{ color:detailColor,borderBottomColor:specialColor,borderBottomWidth:2 }}>My Diets </Text>
            <AntDesign name="down" size={12} color={detailColor} />
            </TouchableOpacity>

        </View>

    </View>
  )
}

export default Header