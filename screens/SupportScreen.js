import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Support Screen</Text>
      <Button title="Click here" onPress={() => alert('Button Clicked')} />
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
