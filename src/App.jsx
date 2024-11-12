import * as React from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screen/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { adaptNavigationTheme } from 'react-native-paper';
import {
  MD3LightTheme,
  MD3DarkTheme,
} from 'react-native-paper';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const Stack = createNativeStackNavigator();

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...LightTheme.colors,
    ...MD3LightTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...MD3DarkTheme.colors,
  },
};

function App() {
  const colorScheme = useColorScheme();

  const paperTheme = colorScheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider>
       <NavigationContainer theme={paperTheme}>
       <Stack.Navigator
       screenOptions={{
        headerTitleStyle: {fontWeight: 'bold', alignItems: 'center'},
        headerTitleAlign: 'center',
        orientation: 'portrait',
      }}
      initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Welcome'}}
          />
       </Stack.Navigator>
       </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

