//use Dropdown to choose category
import React, {createRef, useState} from 'react';
import { Alert, TextInput } from 'react-native';
import { Div, Button, Icon, Dropdown, Text } from 'react-native-magnus';
import { useDispatch } from 'react-redux';

const CreateCategory = () => {

  return(
    <Div mx={25} my={5} > 
        <Text>Create Category</Text>
    </Div>
  )  
};

export default CreateCategory;