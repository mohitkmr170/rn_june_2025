import React, {lazy, useContext, Suspense} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../Providers/AuthProvider';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Header} from '../Components';

const HomeScreen = lazy(() => import('../Screens/Home'));
const LoginScreen = lazy(() => import('../Screens/Login'));
const SignUpScreen = lazy(() => import('../Screens/SignUp'));
const GuestWelcomeScreen = lazy(() => import('../Screens/GuestWelcomeScreen'));
const Tab2 = lazy(() => import('../Screens/Tab2'));
const Tab3 = lazy(() => import('../Screens/Tab3'));
const SampleScreen = lazy(() => import('../Screens/SampleScreen'));

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  GuestWelcome: undefined;
};

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#5b4bac'}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tab2" component={Tab2} />
      <Tab.Screen name="Tab3" component={Tab3} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

const CustomHeader = (props: any) => <Header {...props} />;

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        header: CustomHeader,
      }}>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="Sample" component={SampleScreen} />
    </Stack.Navigator>
  );
}

function GuestStack() {
  return (
    <Stack.Navigator
      initialRouteName="GuestWelcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="GuestWelcome" component={GuestWelcomeScreen} />
    </Stack.Navigator>
  );
}

const Navigator = () => {
  const {user, guest} = useContext(AuthContext);
  console.log(user);

  return (
    <NavigationContainer>
      <Suspense fallback={null}>
        {user ? <AppStack /> : guest ? <GuestStack /> : <AuthStack />}
      </Suspense>
    </NavigationContainer>
  );
};

export default Navigator;
