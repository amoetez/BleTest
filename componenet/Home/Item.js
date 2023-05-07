import React from 'react';
import { StyleSheet, View,Image ,Text, Pressable } from 'react-native'

const Item = ({img ,txt,onPress}) => {
  
  return (
    <View style={styles.container}>
     <Pressable onPress={onPress}>
      <Image
       source={img}
       style={styles.imag}
      />
      <Text style={styles.txt}>{txt}</Text>
      </Pressable>
        
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
    container:{
      borderWidth:1,
      borderRadius:20,
      borderColor:'#c0c0c0',
      width:140,
      height:180,
      margin:20,


    },
    imag:{
      width:'100%',
      height:'70%',
      borderTopLeftRadius:20,
      borderTopRightRadius:20

    },
    txt:{
      fontSize:20,
      margin:10,

    }

})