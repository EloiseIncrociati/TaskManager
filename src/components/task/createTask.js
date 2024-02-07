import React, {createRef, useState} from 'react';
import { Alert, TextInput, ChildComponent } from 'react-native';
import { Div, Button, Icon, Dropdown, Text } from 'react-native-magnus';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/taskSlice';
import CreateCategory from './CreateCategory';

const CreateTask = () => {
  //dropdown declaration 
  const dropdownRef = createRef();
  //set value user entered
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState(undefined);
  const [childData, setChildData] = useState(null);
  const dispatch = useDispatch();

  // Callback function to receive data from the child component
  const handleChildData = (data) => {
    setChildData(data);
  };
  //function submit a new task
  const onSubmitTask = () => {
    //if no data
    if (todo.trim().length === 0) {
      Alert.alert("You need to enter a task");
      setTodo("");
      return;
    }

    //to avoid a non-serializable value error, we transform our data 
    console.log('ICI:', childData);
    const category = {
      color: childData.color,
      id: childData.id,
      name: childData.name,
    };
    //use addTask function from our redux file taskSlice
    dispatch(
      addTask({
        task: todo,
        desc: desc,
        category: category,
      })
    );
    setTodo("");
    setDesc(undefined);
    //close drowpdown
    dropdownRef.current.close()
  };


  return(
    <Div alignItems='flex-end' justifyContent='flex-end'> 
      {/*Add Button */}
      <Button onPress={() => dropdownRef.current.open()} bg="#9287af" borderWidth={3} borderColor="#433d58" h={50} w={50} rounded="circle">
          <Icon name="plus" fontFamily='AntDesign' color="white" fontSize={20} />
      </Button>  
      {/*Dropdown to enter title*/}
      <Dropdown
        ref={dropdownRef}
        title={
          <Text fontFamily='HoneyJelly' fontSize="xl" mx="xl" color="white" pb="md">
            Create a new task
          </Text>
        }
        w={'90%'}
        mt="md"
        pb="2xl"
        showSwipeIndicator={true}
        roundedTop="xl"
        style={{backgroundColor: '#9287af'}}
        h={'70%'}
      >
        <Div alignItems='center' justifyContent='center'>
          <TextInput
            style={{
              borderColor: "#433d58",
              borderWidth: 1,
              padding: 10,
              margin: 10,
              width: "90%",
              borderRadius: 5,
              fontFamily:'HoneyJelly'
            }}
            placeholder="Add new task"
            onChangeText={setTodo}
            value={todo}
          />
          <TextInput
            style={{
              fontFamily:'HoneyJelly',
              borderColor: "#433d58",
              borderWidth: 1,
              padding: 10,
              margin: 10,
              width: "90%",
              height: 100,
              borderRadius: 5,
            }}
            placeholder="Add new description"
            onChangeText={setDesc}
            value={desc}
          />
          <Div h={'45%'}>
            <CreateCategory onDataReceived={handleChildData}/>  
          </Div>

          <Div alignItems='center' justifyContent='center'>
            {/*Submit Button */}
            <Dropdown.Option onPress={onSubmitTask}
              fontFamily='HoneyJelly'
              mt="lg"
              ml="md"
              px="xl"
              py="lg"
              bg="#433d58"
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