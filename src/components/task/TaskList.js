import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Div, Text, Checkbox, Button, Icon, Modal } from 'react-native-magnus';
import { useDispatch } from 'react-redux';
import { updateCheckbox } from '../../redux/taskSlice';

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
//   // Update the checkbox state and handle any additional logic
//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };
//   useEffect(() => {
//     console.log('item checked :', item)
//     //update local and redux change
//     setIsChecked(item.checked);
//     dispatch(updateCheckbox({ id: item.id, checked: !isChecked }));
//   }, [item.checked]);

  return (
    <TouchableOpacity onPress={() => item.description !== undefined ? openModal() : closeModal()}>
        <Div row alignItems='center' justifyContent='center' bg={isChecked ? 'gray300' : 'gray100'} m={10} rounded="lg">
        <Div flex={1}>
            <Checkbox disabled={false} value={isChecked} onValueChange={!isChecked} activeColor="green500" ml={15} />
        </Div>
        <Div flex={4}>
            <Text fontFamily='HoneyJelly' fontSize="2xl" color="#433d58">{item.name} {item.id}</Text>
        </Div>
        <Div flex={1}>
            <Button bg='red600' my={10} h={40} w={40} rounded="circle" onPress={() => onDelete()} justifyContent='space-between'>
            <Icon name='delete' fontFamily='AntDesign' fontSize={15} color='white' bg='red600' h={30} w={30} rounded='circle' />
            </Button>
        </Div>
        <Modal isVisible={isVisible} h={'50%'}>
            <Div flex={1} mx={25} mt={55}>
              <Text fontFamily='HoneyJelly' fontSize="2xl" color="#433d58">Catégorie</Text>
            </Div>
            <Div flex={1} m={25}>
              <Text fontFamily='HoneyJelly' fontSize="2xl" color="#433d58">{item.name} - item id: {item.id}</Text>
            </Div>
            <Div flex={3} m={25}>
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