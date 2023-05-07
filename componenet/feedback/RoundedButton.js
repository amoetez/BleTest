import { StyleSheet, Text, TouchableOpacity } from "react-native";
export const RoundedButton = ({ ...props }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onClicked}>
      <Text style={{ fontSize: 20,fontWeight: 'bold',color:'white' }}>
        {props.title}
        </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    
    backgroundColor: "#607045",
    borderRadius: 100,
    alignItems: "center", 
    width: 200,
    height: 50,
    paddingVertical: 8,
    marginTop: 40,
    marginBottom: 5,
  },
});
