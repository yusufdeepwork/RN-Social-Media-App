import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
      <Button title="Click here" onPress={() => alert('Button Clicked')} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
