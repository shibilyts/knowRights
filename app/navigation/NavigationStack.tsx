import * as React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {navigationRef} from './NavigationService';

import Home from 'app/screens/Home';

import ThemeController from '../components/ThemeController';
import {StatusBar} from 'react-native';
import {ILoginState} from 'app/models/reducers/login';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const homeOptions = {
  title: 'Home',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => <ThemeController />,
};

interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator>
    <Stack.Screen name="Home" component={Home} options={homeOptions} />
  </LoggedInStack.Navigator>
);

const App: React.FC<IProps> = (props: IProps) => {
  const {theme} = props;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Home"
          component={LoggedInNavigator}
          options={homeOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
