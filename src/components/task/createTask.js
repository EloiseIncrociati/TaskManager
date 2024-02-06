import React, {createRef, useState} from 'react';
import { Alert, TextInput } from 'react-native';
import { Div, Button, Icon, Dropdown, Text } from 'react-native-magnus';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/taskSlice';

const CreateTask = () => {
  //dropdown declaration 
  const dropdownRef = createRef();
  //set value user entered
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  //function submit a new task
  const onSubmitTask = () => {
    //if no data
    if (todo.trim().length === 0) {
      Alert.alert("You need to enter a task");
      setTodo("");
      return;
    }
    //use addTask function from our redux file taskSlice
    dispatch(
      addTask({
        task: todo,
      })
    );
    setTodo("");
    //close drowpdown
    dropdownRef.current.close()
  };


  return(
    <Div alignItems='flex-end' justifyContent='flex-end'> 
      {/*Add Button */}
      <Button onPress={() => dropdownRef.current.open()} bg="blue500" h={40} w={40} rounded="circle">
          <Icon name="plus" fontFamily='AntDesign' color="white" />
      </Button>  
      {/*Dropdown to enter title*/}
      <Dropdown
        ref={dropdownRef}
        title={
          <Text mx="xl" color="gray500" pb="md">
            Create a new task
          </Text>
        }
        w={'90%'}
        mt="md"
        pb="2xl"
        showSwipeIndicator={true}
        roundedTop="xl">
        <Div alignItems='center' justifyContent='center'>
          <TextInput
            style={{
              borderColor: "gray",
              borderWidth: 1,
              padding: 10,
              margin: 10,
              width: "90%",
              borderRadius: 5,
            }}
            placeholder="Add todo"
            onChangeText={setTodo}
            value={todo}
          />
          <Div alignItems='center' justifyContent='center'>
            {/*Submit Button */}
            <Dropdown.Option onPress={onSubmitTask}
                mt="lg"
                ml="md"
                px="xl"
                py="lg"
                bg="blue500"
                rounded="circle"
                color="white"
                shadow={2}
                w={'35%'}
                prefix={
                  <Icon name="checkcircle" mr={15} color="white" fontSize="xl" />
                }
            >
              Submit
            </Dropdown.Option>
          </Div>
        </Div>
      </Dropdown>
    </Div>
  )  
};

export default CreateTask;