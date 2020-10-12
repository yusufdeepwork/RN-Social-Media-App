import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="go to details screen"
        onPress={() => {
          navigation.navigate('details');
        }}
      />
    </View>
  );
};

const DetailScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
      <Button
        title="go to details screen...again"
        onPress={() => {
          navigation.push('Details');
        }}
      />
      <Button
        title="go to Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />

      <Button
        title="Go To Firs Screen"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer
      screenOptions={{
        headerStyle: {
          backgroundColor: '009387',
        },
        headerTintColo: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Overview'}}
      />
      <Stack.Screen name="Details" component={DetailScreen} />
    </NavigationContainer>
  );
}
