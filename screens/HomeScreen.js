/* eslint-disable react/display-name */
import * as React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {color} from 'react-native-reanimated';

export default HomeScreen = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar barStyle={ theme.dark ? 'dark-content': 'light-content'}/>
      <Text style={{color: colors.text}}>Home Screen</Text>
      <Button
        title="go to details screen"
        onPress={() => {
          navigation.navigate('details');
        }}
      />
    </View>
  );
};

