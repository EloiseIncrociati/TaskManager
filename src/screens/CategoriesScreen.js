import React from 'react';
import {ScrollView} from 'react-native';
import { Div, Text } from 'react-native-magnus';
import Header from '../components/global/header';

const CategoriesScreen = () => {
  //will add categories to our task list if we have time : deadline 08 february
  return(
    <ScrollView>
      <Div>
        <Header />
        <Div mt={-15}>
          <Text>test</Text>
        </Div>
      </Div>

      <Div>
        <Text>Categories</Text>
      </Div>
    </ScrollView>
  )  
};

export default CategoriesScreen;