import { View, Text, Image, Pressable } from 'react-native'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ItemBox from './ItemBox'

const Sbtn = ({ heightList ,deleteItem}) => {
    
    return (
        <View style={{ width: "30%", paddingLeft: 20, marginTop: 20 }}>
            <Pressable>
                
            </Pressable>
            <FlatList alwaysBounceVertical={false} data={heightList}
                renderItem={(itemData) => {
                    return <ItemBox data={itemData
                    } handleDelete={() => deleteItem(itemData.index)} />;
                }}/>
        </View>
    )
}
export default Sbtn;
const styles = StyleSheet.create({
    seperatorLine: {
        height: 1,
        backgroundColor: 'black',
      },
    txt: {
        alignItems: "center",
        justifyContent: "center",
        color: "#5F7045",
        fontWeight: "bold",
        fontSize: 18
    },
    icon: {
        height: 55,
        width: 70,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 45,
        borderColor: '#5F7045',
        borderWidth: 2,
    },
});