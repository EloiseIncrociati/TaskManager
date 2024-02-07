import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Div, Image, Text } from 'react-native-magnus';

const Header = () => {
  return(
    <LinearGradient 
      colors={['#6b5e8c','#9c84c4','#6b5e8c']} 
      start={{x:0,y:0}} 
      end={{x:1,y:0}} 
      style={{borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}
    >
      <Div  w={'100%'} roundedBottom='xl' alignItems='center'>
        {/*Header we'll call to every screen*/}
        <Image h={170} w={270}
            source={require('../../assets/images/header.png')}
        /> 
      </Div>
    </LinearGradient>
  )  
};

export default Header;