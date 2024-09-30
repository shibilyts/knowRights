import * as React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {navigationRef} from './NavigationService';

import Home from 'app/screens/Home';

import ThemeController from '../components/ThemeController';
import {StatusBar} from 'react-native';
import {ILoginState} from 'app/models/reducers/login';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import DetailsPage from '../screens/DetailsScreen';
import Constitution from '../screens/Constitution';
import PdfScreen from '../screens/PdfScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const LoggedInStack = createStackNavigator();

function MyTabs() {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  return (
    <Tab.Navigator screenOptions={{...homeOptions, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'home'}
              size={focused ? 30 : 25}
              color={isDark ? 'yellow' : undefined}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'magnify'}
              size={focused ? 32 : 27}
              color={isDark ? 'yellow' : undefined}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Constitution"
        component={PdfScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'book'}
              size={focused ? 28 : 23}
              color={isDark ? 'yellow' : undefined}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'nut'}
              size={focused ? 30 : 25}
              color={isDark ? 'yellow' : undefined}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const homeOptions = {
  headerTitle: 'KnowRights',
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
    <Stack.Screen
      name="Home"
      component={MyTabs}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="DetailsPage"
      component={DetailsPage}
      options={{headerTitle: '', headerRight: () => <ThemeController />}}
    />
    <Stack.Screen
      name="PdfScreen"
      component={PdfScreen}
      options={{headerTitle: '', headerRight: () => <ThemeController />}}
    />
  </LoggedInStack.Navigator>
);

const App: React.FC<IProps> = (props: IProps) => {
  const {theme} = props;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.dark ? '#222222' : '#e6d600'}
      />

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
