Task Manager

A simple task management application built with React Native.
Table of Contents

    Introduction
    Features
    Installation
    Usage
    Screenshots
    Technologies
    Contributing
    License

Introduction

The Task Manager App is a mobile application developed with React Native in a few days. It allows users to create, edit, delete, and organize their tasks efficiently.
Features

    Task Creation: Create new tasks with a title, description, and category. You can check the task to validate it.
    Task View : View of all tasks listed, or view details by clicking on tasks with description (didnt work if no description) 
    Task Deletion: Remove unwanted tasks from your list.
    Category Management: Tasks are filtered by categories to easily see them

Installation

    Clone the repository:

    	git clone https://github.com/your-username/task-management-app.git

    Navigate to the project directory:
 
	cd task-management-app

    Install dependencies:
	npm install

    Run the application:
	npx react-native run-android # For Android
	(having no mac computer, this app was build for android only, can add ios configuration later)

Usage

    Launch the application on your mobile device or emulator.
    Create a new task by providing a title, description, and choosing category.
    Manage your tasks using the available options (check, delete).
    Enjoy a simple and effective task management experience!

Screenshots
![01homescreen](https://github.com/EloiseIncrociati/TaskManager/assets/60602575/0767c89a-7d68-45c3-ba89-8fb24c2109c4)
![02TaskScreen](https://github.com/EloiseIncrociati/TaskManager/assets/60602575/5461224a-e4ed-4c0e-be98-8c1edc3ba46b)
![03AddingTask](https://github.com/EloiseIncrociati/TaskManager/assets/60602575/d798946a-317f-434c-b9eb-860e2fc9d673)
![04ViewDescription](https://github.com/EloiseIncrociati/TaskManager/assets/60602575/19f89239-9867-47b4-94c0-04ce23e53e20)
![05TaskList](https://github.com/EloiseIncrociati/TaskManager/assets/60602575/b832f21e-3551-4bcc-ba40-dadfa4e1257a)

Technologies

    React Native
    expo
    Redux / Redux Toolkit
    React Navigation
    React Native Magnus

Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Follow the contributing guidelines.

We can add a category management, to personalize our own categories.
We can add the data persistence by using Async Storage and redux-persist with the following code : 
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage for React Native
import taskReducer from './taskSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Use AsyncStorage for React Native
  whitelist: ['tasks'], // Specify the reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, taskReducer);

const store = configureStore({
  reducer: {
    tasks: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export { store, persistor };
