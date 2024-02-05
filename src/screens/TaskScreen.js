import React from 'react';
import {ScrollView} from 'react-native';
import { Div, Text } from 'react-native-magnus';
import Header from '../components/global/header';

const TaskScreen = () => {
  
  return(
    <ScrollView>
      <Div>
        <Header />
        <Div mt={-15}>
          <Text>test</Text>
        </Div>
      </Div>

      <Div>
        <Text>Task List</Text>
      </Div>
    </ScrollView>
  )  
};

export default TaskScreen;