import React from 'react'
import { View,Text,StyleSheet,Image,ScrollView,Button,TouchableOpacity } from 'react-native'

const LikeButton = () => {
  return (
    <TouchableOpacity onPress={() =>{console.log('liked');}}>
        <View style={styles.container}>
            <Text style={{fontSize:22}}>❤️</Text>
        </View>
    </TouchableOpacity>
  )
}

export default LikeButton

const styles = StyleSheet.create({
    container:{
        height:30,
        width:30,
        justifyContent:'center',
        borderRadius:20,
        backgroundColor:'#ff99ff',
        marginLeft:315,
        marginBottom:5
    }
})