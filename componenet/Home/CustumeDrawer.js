import React from 'react'
import { View,StyleSheet, Image,Text,TouchableOpacity } from 'react-native'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'

const CustumeDrawer = (props) => {
  return (
    <View style={styles.container}>
     <DrawerContentScrollView {...props} >
      
       <View  >
       <DrawerItemList   {...props}/>

       </View>
       
     </DrawerContentScrollView>
    </View>
  )
}

export default CustumeDrawer

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
   
})
