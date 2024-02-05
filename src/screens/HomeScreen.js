import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Div, Text, Image, Radio } from 'react-native-magnus';
import { useFonts } from 'expo-font';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
    const [fontsLoaded] = useFonts({
      'HoneyJelly': require('../assets/fonts/Honey-Jelly.otf'),
    });
    //useNavigation
    const navigation = useNavigation();
  
    //redirection useEffect
    useEffect(() => {
      setTimeout(() => {
          navigation.navigate('Task');
      }, 2500);
    }, []);
  
    return (
        <LinearGradient colors={['#AEE6FE', '#78C8EA', '#1487B8']} style={{height: '100%', justifyContent: 'center'}}>
          <Div alignItems='center' justifyContent='center'>
            <Image h={200} w={200} m={10}
              source={require('../assets/images/homeclipboard.png')}
            />
            </Div>
            <Div alignItems='center' justifyContent='center' mt={50}>
              <Text fontSize={50}
                fontFamily='HoneyJelly'
                fontWeight="bold"
                color="#544D66"
                letterSpacing={2}
                mt="lg">Task </Text>
              <Text fontSize={50}
                fontFamily='HoneyJelly'
                fontWeight="bold"
                color="#544D66"
                letterSpacing={2}
                mt="lg"> Manager</Text>
              <StatusBar style="auto" />
              <Div mt={25}>
                <Radio value={5} loading />
              </Div>
          </Div>
        </LinearGradient>
    );
  }

export default HomeScreen;