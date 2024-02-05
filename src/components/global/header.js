import React from 'react';
import { Div, Image } from 'react-native-magnus';

const Header = () => {
  return(
    <Div h={150} w={'100%'} bg='#9388B0' alignItems='center' flexDir='column-reverse'>
        <Image h={100} w={100} m={10}
            source={require('../../assets/images/user.png')}
        />
    </Div>
  )  
};

export default Header;