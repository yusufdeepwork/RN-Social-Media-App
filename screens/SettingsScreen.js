import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button title="Click here" onPress={() => alert('Button Clicked')} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
