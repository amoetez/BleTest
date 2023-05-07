import React from 'react'
import { View ,Image, StyleSheet, Text} from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
       <Image 
       source={{uri:'https://chilift.co/img/ch-ilift-logo-1666213216.jpg'}}
       style={styles.img}
       />
       
    </View>
  )
}

export default Header

const styles= StyleSheet.create({
    container:{
        height:30,
        width:'100%',
        top:15,
        left:15,
        position:'absolute',
        flexDirection:'row',       
    },
    img:{
        alignSelf: 'center',
        marginTop:140,
        marginLeft:27,
        height:100,
        width:300,

    }
})
