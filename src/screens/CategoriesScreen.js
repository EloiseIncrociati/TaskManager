import React from 'react';
import {ScrollView} from 'react-native';
import { Div, Text } from 'react-native-magnus';
import Header from '../components/global/Header';
import CreateCategory from '../components/task/CreateCategory';

const CategoriesScreen = () => {
  //will add categories to our task list if we have time : deadline 08 february
  return(
    <>
      <ScrollView>
        <Div>
          <Header />
        </Div>
        <Div mt={25}>
          <Text>Create category</Text>
        </Div>

      </ScrollView>      
      <Div alignItems='flex-end' justifyContent='flex-end' m={20}> 
        <CreateCategory />
      </Div>
    </>
  )  
};

export default CategoriesScreen;