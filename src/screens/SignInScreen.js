import { View, Text ,Image,StyleSheet,useWindowDimensions} from 'react-native'
import React, {useState}from 'react'
import logo from '../../assets/images/logo.jpg'
import CustumInputs from '../components/custumInputs';
import CusumButton from '../components/CusumButton/CustumButton';

const SignInscreen = () => {
  const[username, setUsername]=useState('');
  const[password, setPassword]=useState('');
  const {height}=useWindowDimensions();
  return (
    <View style={styles.root}>
  <Image source={logo} style={[styles .logo , {height:height*0.3}]} resizeMode='contain'/>
  <CustumInputs placeholder="Username" value={username} setValue={setUsername}/>
  <CustumInputs placeholder="password" value={password} setValue={setPassword} secureTextEntry={true}/>
  <CusumButton title='Login'></CusumButton>
  <CusumButton title='Register'></CusumButton>

    </View>
  )
}
const styles = StyleSheet.create({

  root:{
    alignItems:'center',
    padding:20
  },
logo: {
  width:'100%',
  maxWidth:300,
  maxHeight :200,
  
}
});

export default SignInscreen