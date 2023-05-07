import {  useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';



export const FormTextInput =({multiline,onChangeContent}) =>{
  const [anythingToAdd,setAnythingToAdd] = useState("");
  return (
    
    <View style={{alignItems:'center'}}>
      <TextInput 
       mode="outlined"

       placeholderTextColor="#808080"
       placeholder='Ecrire votre Feedback'
       style={styles.formInput}
       value={anythingToAdd}
       onChangeText={(anythingToAdd)=>{
         setAnythingToAdd(anythingToAdd)
         onChangeContent(anythingToAdd)
       }}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  formInput:{
   height: '100%',
   width: '80%',
 
  },
  
}); 
