//use Dropdown to choose category
import React, {createRef, useState} from 'react';
import { Alert, TextInput } from 'react-native';
import { Div, Button, Icon, Dropdown, Text } from 'react-native-magnus';
import { useDispatch } from 'react-redux';

const CreateCategory = () => {

  return(
    <Div m={35} > 
        <Text>Choose your category</Text>
    </Div>
  )  
};

export default CreateCategory;