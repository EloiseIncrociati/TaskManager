import React from 'react';
import { Div, Image, Text } from 'react-native-magnus';

const Header = () => {
  return(
    <Div h={170} w={'100%'} bg='#9388B0' roundedBottom='xl' alignItems='center' flexDir='column-reverse'>
      {/*Header we'll call to every screen*/}
      <Text fontSize={20} mb={10}
                fontFamily='HoneyJelly'
                fontWeight="bold"
                >Task Manager</Text>
      <Image h={100} w={100} mb={10}
          source={require('../../assets/images/user.png')}
      />
    </Div>
  )  
};

export default Header;