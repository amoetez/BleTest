import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import LikeButton from "./LikeButton";

const Article = ({ title, desc }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleBox}><Text style={styles.title}>{title}</Text></View>
      <View style={styles.mini}>
       <Image source={require("../../images/img1.jpg")} style={styles.image} />
       <Text style={styles.desc}>{desc}</Text>
    
      </View>
    </ScrollView>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginHorizontal: 20,
    padding: 0,
    borderWidth: 0,
    borderRadius:25,
    backgroundColor:'#9db67a',
    elevation:20,
    shadowColor:'black',
    shadowOffset: {width: -2, height: 4},
  },
   mini:{
    backgroundColor:'white',
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    borderRadius:20,
  },
 
  image: {
    height: 374,
    alignSelf:'center',
    width: 374,
    paddingLeft:0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,


  },
  titleBox:{
  
    borderWidth:0,
    padding:0,
    borderRadius:20,
    borderColor:'#5F7045',
    margin:5,
    width:'45%',
    alignSelf:'center',
  },
  title: {
    fontSize: 28,
    marginHorizontal: 20,
    color:'white',
    borderRadius:1,
    borderColor:'black',
    fontWeight:'bold'
  },
  desc: {
    margin: 20,
    fontSize:18,
  },
  like: {
    color: "white",
    width: 30,
    borderRadius: 15,
  },
});
