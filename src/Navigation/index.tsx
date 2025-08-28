import React, {lazy, useContext, Suspense} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../Providers/AuthProvider';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Header} from '../Components';
import {createDrawerNavigator} from '@react-navigation/drawer';

const HomeScreen = lazy(() => import('../Screens/Home'));
const LoginScreen = lazy(() => import('../Screens/Login'));
const SignUpScreen = lazy(() => import('../Screens/SignUp'));
const GuestScreen = lazy(() => import('../Screens/Guest'));
const Tab2Screen = lazy(() => import('../Screens/Tab2'));
const ProfileScreen = lazy(() => import('../Screens/Profile'));
const SampleScreen = lazy(() => import('../Screens/Sample'));
const SettingsScreen = lazy(() => import('../Screens/Settings'));
const ListScreen = lazy(() => import('../Screens/List'));
const MemoCallbackScreen = lazy(() => import('../Screens/MemoCallback'));

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
      <Tab.Screen name="Tab2" component={Tab2Screen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
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
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {width: 300},
      }}>
      <Drawer.Screen name="Main" component={AppStack} />
      <Drawer.Screen name="List" component={ListScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Sample" component={SampleScreen} />
      <Stack.Screen name="MemoCallback" component={MemoCallbackScreen} />
    </Drawer.Navigator>
  );
}

function GuestStack() {
  return (
    <Stack.Navigator
      initialRouteName="GuestWelcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="GuestWelcome" component={GuestScreen} />
    </Stack.Navigator>
  );
}

const Navigator = () => {
  const {user, guest} = useContext(AuthContext);
  console.log(user);

  return (
    <NavigationContainer>
      <Suspense fallback={null}>
        {user ? <AppDrawer /> : guest ? <GuestStack /> : <AuthStack />}
      </Suspense>
    </NavigationContainer>
  );
};

export default Navigator;
