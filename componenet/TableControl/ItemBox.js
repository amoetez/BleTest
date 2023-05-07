import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Animated,
    Pressable,
} from 'react-native';
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import EvilIcons from "react-native-vector-icons/EvilIcons";


const ItemBox = (props) => {
    const leftSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <Pressable onPress={props.handleDelete} activeOpacity={0.6}>
                <View style={styles.deleteBox}>
                    <Animated.Text style={{ transform: [{ scale: scale }] }}>
                        <EvilIcons name='trash' size={70} color="#5F7045"/>
                    </Animated.Text>
                </View>
            </Pressable>
        );
    };
    return (
        <GestureHandlerRootView>
            <Swipeable renderLeftActions={leftSwipe}>
                <View style={styles.icon}>
                    <Text style={styles.txt}>{props.data.item.text}</Text>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    );
};

export default ItemBox;

const styles = StyleSheet.create({
    deleteBox: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 45,
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