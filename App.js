import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

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
        ></Icon.Button>
      ),
    }}
  </DetailsStack>;
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
