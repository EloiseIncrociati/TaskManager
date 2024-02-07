import React, { useState } from 'react';
import { CATEGORIES } from '../../data/Categories';
import { Div, Text, Button } from 'react-native-magnus';

const CreateCategory = ({ onDataReceived }) => {
  // Call the callback function with the data to be sent to the parent
  const sendDataToParent = (childData) => {
    onDataReceived(childData);
  };

  return (
    <Div flex={1} alignItems='center' justifyContent='center'>
      <Text fontFamily='HoneyJelly' fontSize={15}>Select a Category</Text>
      <Div>
        {CATEGORIES.map(category => (
          <Button
            w={150}
            mt="lg"
            ml="lg"
            px="xl"
            py="lg"
            fontFamily='HoneyJelly'
            fontSize={20}
            bg={category.color}
            color="white"
            key={category.id}
            onPress={() => sendDataToParent(category)}
          >
            {category.name}
          </Button>
        ))}
      </Div>
    </Div>
  );
};

export default CreateCategory;
