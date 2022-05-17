import { View, Text,TextInput,StyleSheet} from 'react-native'
import React from 'react'

const custumInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
        <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder} style={styles.input} secureTextEntry={secureTextEntry}></TextInput>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'100%',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        top:50,
        paddingHorizontal:10,
        marginVertical:10
 
    },
    input:{}

})

export default custumInput