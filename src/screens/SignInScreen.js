import { View, Text ,Image,StyleSheet,useWindowDimensions} from 'react-native'
import React, {useState}from 'react'
import logo from '../../assets/images/logo.jpg'
import CustumInputs from '../components/custumInputs';
import CusumButton from '../components/CusumButton/CustumButton';

const SignInscreen = () => {
  const[username, setUsername]=useState('');
  const[password, setPassword]=useState('');
  const {height}=useWindowDimensions();
  const onSignInPressed =()=>{
    console.warn('sign in');
    
  };
  const onforgetpasswordPressed=()=>{
    console.warn('forget password')
  }
  const signInWidhFacebook=()=>{
    console.warn('sign in with facebook')

  };
  const signInWidhGoogle=()=>{
    console.warn('sign in with google')

  };
  const signInWidhApple=()=>{
    console.warn('sign in with Apple')

  };



  return (
    <View style={styles.root}>
  <Image source={logo} style={[styles .logo , {height:height*0.3}]} resizeMode='contain'/>
  <CustumInputs placeholder="Username" value={username} setValue={setUsername}/>
  <CustumInputs placeholder="password" value={password} setValue={setPassword} secureTextEntry={true}/>
  <CusumButton  text="sign in " onPress={onSignInPressed} />
  <CusumButton  text="forget password " onPress={onforgetpasswordPressed} type="TERITARY"/>
  <CusumButton  bgColor="#E7EAF4" fgColor="#4765A9"  text="sign in widh facebook " onPress={signInWidhFacebook} />
  <CusumButton  bgColor='#fae9eA' fgColor='#dd4d44' text="sign in widh google " onPress={signInWidhGoogle} />
  <CusumButton   bgColor='#e3e3e3' fgColor='#363636' text="sign in widh Apple " onPress={signInWidhApple} />
  
 
  

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