import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Div, Text, Checkbox, Button, Icon, Modal } from 'react-native-magnus';
import { useDispatch } from 'react-redux';

const TaskList = ({ item, onDelete }) => {
  const [isVisible, setIsVisible] = useState(false);
  //checkbox status
  const [isChecked, setIsChecked] = useState(false);
  //const [isChecked, setIsChecked] = useState(item.checked);
  const dispatch = useDispatch();
  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <TouchableOpacity onPress={() => item.description !== undefined ? openModal() : closeModal()}>
        <Div row alignItems='center' justifyContent='center' bg={isChecked ? 'gray300' : 'gray100'} m={10} rounded="lg">
        <Div flex={1}>
            <Checkbox disabled={false} value={isChecked} onValueChange={!isChecked} activeColor="green500" ml={15} />
        </Div>
        {item.description ? 
          <Icon name='eye' fontFamily='AntDesign' fontSize={25} color={item.category.color} mr={15} />
        :
          <Text/>
        }
        <Div flex={4}>
            <Text fontFamily='HoneyJelly' fontSize="2xl" color="#433d58">{item.name}</Text>
        </Div>
        <Div flex={1}>
            <Button bg='red600' my={10} h={40} w={40} rounded="circle" onPress={() => onDelete()} justifyContent='space-between'>
            <Icon name='delete' fontFamily='AntDesign' fontSize={15} color='white' bg='red600' h={30} w={30} rounded='circle' />
            </Button>
        </Div>
        <Modal isVisible={isVisible} h={'50%'}>
            <Div flex={1} mx={25} mt={55}>
              <Text fontFamily='HoneyJelly' fontSize="4xl" color="#433d58">Category : </Text>
              <Text fontFamily='HoneyJelly' fontSize="2xl" color={item.category.color}>{item.category.name}</Text>
            </Div>
            <Div flex={1} m={25}>
              <Text fontFamily='HoneyJelly' fontSize="4xl" color="#433d58">Title : </Text>
              <Text fontFamily='HoneyJelly' fontSize="2xl" color="#433d58">{item.name}</Text>
            </Div>
            <Div flex={3} m={25}>
              <Text fontFamily='HoneyJelly' fontSize="4xl" color="#433d58">Description : </Text>
              <Text fontFamily='HoneyJelly' fontSize="2xl" color="#433d58">{item.description}</Text>
            </Div>
            <Div flex={2} alignItems='center' justifyContent='center' ml={'30%'}>
              <Button
                mt="lg"
                ml="md"
                px="xl"
                py="lg"
                bg="#433d58"
                rounded="circle"
                color="white"
                shadow={2}
                prefix={<Icon name="closecircle" mr="sm" color="white"/>}
                onPress={closeModal}
              >
                Close Modal
              </Button>
            </Div>
          </Modal>
        </Div>      
      </TouchableOpacity>
  );
};

export default TaskList;