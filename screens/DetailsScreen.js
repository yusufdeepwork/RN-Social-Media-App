import * as React from 'react';
import {View, Text, Button} from 'react-native';

export default function DetailScreen({navigation}) {
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
}
