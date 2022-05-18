import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'


const CustumButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
            styles.btn, 
            styles[`btn_${type}`],
            bgColor ? { backgroundColor: bgColor } : {}
            ]} >
            <Text style={[
            styles.text,
            styles[`text_${type}`],
            fgColor ? { color: fgColor } : {}
            ]} >{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    btn: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        top: 60
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    btn_PRIMARY: {
        backgroundColor: '#ff7d7d'
    },

    btn_TERITARY: {
    },

    text_TERITARY: {
        color: 'gray'
    }

})

export default CustumButton