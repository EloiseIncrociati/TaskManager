import React from 'react';
import { FlatList, ImageBackground, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import CreateTask from '../components/task/CreateTask';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/global/Header';
import TaskList from '../components/task/TaskList';
import { Div, Text, Checkbox, Button, Icon, Modal } from 'react-native-magnus';

const TaskScreen = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.tasks);

  const onDelete = (id) => {
    dispatch(deleteTask({ id: id }));
  };
  return(
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground 
        source={require('../assets/images/BgTaskManager.png')} 
        resizeMode="cover" 
        style={styles.image}
      >
        <Div>
          <Header />
        </Div>
        {(todos && todos.length > 0) ? (
          <Div mt={25} h={'65%'}>
            <FlatList
              data={todos}
              renderItem={({ item }) => <TaskList item={item} onDelete={() => onDelete(item.id)} />}
              keyExtractor={(item) => item.id.toString()}
            />
          </Div>
        ) : (
          <Div mt={25} h={'65%'} alignItems='center'>
            <Text fontFamily='HoneyJelly' fontSize="2xl" color="white">You have no task here, create one !</Text>
          </Div>
        )}
        <Div alignItems='flex-end' justifyContent='flex-end' m={20}> 
          <CreateTask />
        </Div>
      </ImageBackground>
    </SafeAreaView>
  )  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default TaskScreen;