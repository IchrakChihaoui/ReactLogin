import { View, Text,Button,StyleSheet } from 'react-native'
import React from 'react'


const CustumButton = ({title}) => {
  return (
    <View  style={styles.btn} >
        <Button  title={title}></Button>
    </View>
  )
}
const styles=StyleSheet.create({
    btn:{
        top:70,
        paddingVertical:10
        
    }
})

export default CustumButton