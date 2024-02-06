import React, {useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import { Button, Div, Text, Icon, Checkbox } from 'react-native-magnus';
import Header from '../components/global/Header';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import CreateTask from '../components/task/CreateTask';
import { SafeAreaView } from 'react-native-safe-area-context';

const TaskScreen = () => {
  //checkbox status
  const [isSelected, setSelection] = useState(false);
  //action distribution from redux
  const dispatch = useDispatch();
  //using taskSlice
  const todos = useSelector((state) => state.tasks);
  //function to delete a task
  const onDelete = (id) => {
    dispatch(deleteTask({id: id}));
  }

  //render item by checking id 
  const renderItem = ({item}) => {
    return(
      <Div row alignItems='center' justifyContent='center' bg={isSelected ? 'grey100' : 'grey300'} m={10} rounded="lg">
        <Div flex={1}>
        <Checkbox disabled={false} value={isSelected} onValueChange={(newValue) => setSelection(newValue)} activeColor="green500" ml={15}/>
        {console.log('checkbox:', isSelected)}
        </Div>
        <Div flex={4}>
          <Text fontFamily='HoneyJelly' fontSize="lg" color="#262626">{item.name}</Text>
        </Div>
        <Div flex={1}>
          <Button bg='red600' my={10} h={40} w={40} rounded="circle" onPress={() => onDelete(item.id)} justifyContent='space-between'>
            <Icon name='delete' fontFamily='AntDesign' fontSize={15} color='white' bg='red600' h={30} w={30} rounded='circle' />
          </Button>
        </Div>
      </Div>
    )
  }
  
  return(
    <SafeAreaView style={{flex: 1}}>
      <Div>
        <Header />
      </Div>
      <Div mt={25} h={'65%'}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Div>
      <Div alignItems='flex-end' justifyContent='flex-end' m={20}> 
        <CreateTask />
      </Div>
    </SafeAreaView>
  )  
};

export default TaskScreen;