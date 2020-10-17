import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sign Up Screen</Text>
      <Button title="Click here" onPress={() => alert('Button Clicked')} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
