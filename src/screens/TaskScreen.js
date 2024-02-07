import React, {useState} from 'react';
import {FlatList, ImageBackground, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import { Button, Div, Text, Icon, Checkbox, Modal } from 'react-native-magnus';
import Header from '../components/global/Header';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import CreateTask from '../components/task/CreateTask';
import { SafeAreaView } from 'react-native-safe-area-context';

const TaskScreen = () => {
  //checkbox status
  const [isSelected, setSelection] = useState(false);
  //open modal to see description if exist
  const [visible, setVisible] = useState(false);
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
      <TouchableOpacity onPress={() => item.description !== undefined ? setVisible(true):setVisible(false)}>
        <Modal isVisible={visible} h={'50%'}>
          <Div flex={1} mx={25} mt={55}>
            <Text fontFamily='HoneyJelly' fontSize="2xl" color="#433d58">Catégorie</Text>
          </Div>
          <Div flex={1} m={25}>
            <Text fontFamily='HoneyJelly' fontSize="2xl" color="#433d58">{item.name}</Text>
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
              onPress={() => {
                setVisible(false);
              }}
            >
              Close Modal
            </Button>
          </Div>
        </Modal>

        <Div row alignItems='center' justifyContent='center' bg={item.checked === true ? 'gray300' : 'gray100'} m={10} rounded="lg">
          <Div flex={1}>
          <Checkbox disabled={false} value={isSelected} onValueChange={setSelection} activeColor="green500" ml={15}/>
          </Div>
          <Div flex={4}>
            <Text fontFamily='HoneyJelly' fontSize="2xl" color="#433d58">{item.name}</Text>
          </Div>
          <Div flex={1}>
            <Button bg='red600' my={10} h={40} w={40} rounded="circle" onPress={() => onDelete(item.id)} justifyContent='space-between'>
              <Icon name='delete' fontFamily='AntDesign' fontSize={15} color='white' bg='red600' h={30} w={30} rounded='circle' />
            </Button>
          </Div>
        </Div>      
      </TouchableOpacity>
    )
  }
  
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