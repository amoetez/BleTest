import { StyleSheet,Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const Input = (props) => {
    return (
        <>
            <Text style={styles.text}>
                {props.qst}
            </Text>
            <TextInput style={styles.textinput}
                placeholder='Write...'
                placeholderTextColor='#798C5B' />
        </>
    )
}
export default Input;
const styles = StyleSheet.create({
    text: {
        paddingLeft: 15,
        fontSize: 15,
        fontWeight: "bold",
        color: '#5F7045'
      },
    textinput: {
        borderRadius: 13,
        fontSize: 15,
        color: '#5F7045',
        paddingHorizontal: 15,
        width: "100%",
        backgroundColor: "rgb(220,220,220)",
        height: 45,
        marginVertical: 8,
        opacity: 0.5
    }
});