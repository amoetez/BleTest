import { View, Text, Pressable } from 'react-native'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const IncDec = ({decreaseNumber,increaseNumber,heightNumber}) => {
    
    return (
        <View style={styles.container}>
            <Pressable onPress={decreaseNumber} style={styles.buttomContainerL}>
                <Text style={styles.TextN}>-</Text>
            </Pressable>
            <View style={styles.numberContainer}>
                <TextInput style={styles.numberText}
                    keyboardType="number-pad">
                    {heightNumber}
                </TextInput>
            </View>
            <Pressable onPress={increaseNumber} style={styles.buttomContainerR}>
                <Text style={styles.TextP}>+</Text>
            </Pressable>
        </View>

    )
}
export default IncDec;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:50
    },
    buttomContainerL: {
        marginVertical: 30,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5F7045',
        width: '20%',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50
    },
    buttomContainerR: {
        marginVertical: 30,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5F7045',
        width: '20%',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50
    },
    TextP: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 30,

    },
    TextN: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 40,

    },
    numberContainer: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#5F7045',
        borderWidth: 2,
        height: 60,
    },
    numberText: {
        textTransform: 'uppercase',
        color: '#5F7045',
        fontSize: 22,
        fontWeight: "bold"
    }

});