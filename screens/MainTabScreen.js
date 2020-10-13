import * as React from 'react';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const MainTabScreen = () => (
    );

const HomeStackScreen = ({navigation}) => {
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColo: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            options={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </HomeStack.Navigator>;
};
const DetailsStackScreen = ({navigation}) => {
  <DetailsStack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColo: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen name="Details" component={DetailScreen} />
    options= options=
    {{
      title: 'Overview',
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="#009387"
          options={() => {
            navigation.openDrawer();
          }}
        />
      ),
    }}
  </DetailsStack>;
};
