import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light, dark } from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { reduxStore, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Welcome from './src/screens/Authentication/Welcome';
import { ThemeContext } from './src/ThemeContext';

const Stack = createStackNavigator();


export default function App() {
  const themes = { light, dark };

  const [theme, setTheme] = React.useState('dark');
  const currentTheme = themes[theme];

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <React.Fragment>

      <Provider store={reduxStore} >
        <PersistGate persistor={persistor}>
          <IconRegistry icons={EvaIconsPack} />
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ApplicationProvider mapping={mapping} theme={currentTheme}>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                  <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
                </Stack.Navigator>
              </NavigationContainer>
            </ApplicationProvider>
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}