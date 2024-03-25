import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

// import {Screens} from '@/styles';

const SettingsScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}): React.JSX.Element => {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
