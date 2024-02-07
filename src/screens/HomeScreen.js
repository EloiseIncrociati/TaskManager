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
      }, 2000);
    }, []);
  
    return (
        <LinearGradient colors={['#4c3e66', '#a78dd9']} style={{height: '100%', justifyContent: 'center'}}>
          <Div alignItems='center' justifyContent='center'>
            <Image h={'70%'} w={'60%'} mt={50}
              source={require('../assets/images/homeclipboard.png')}
            />
            </Div>
            <Div alignItems='center' justifyContent='center' mt={50}>
              <StatusBar style="auto" />
              <Div mt={25}>
                <Radio value={5} loading />
              </Div>
          </Div>
        </LinearGradient>
    );
  }

export default HomeScreen;