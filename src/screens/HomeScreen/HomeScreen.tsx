import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

// import {Screens} from '@/styles';

const HomeScreen = (): React.JSX.Element => {
  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
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

export default HomeScreen;
