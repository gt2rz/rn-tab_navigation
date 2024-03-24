import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View>
          <Text>Hello !!!</Text>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
