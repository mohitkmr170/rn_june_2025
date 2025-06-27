import React, {lazy, useContext, Suspense} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../Providers/AuthProvider';

const HomeScreen = lazy(() => import('../Screens/Home'));
const LoginScreen = lazy(() => import('../Screens/Login'));
const SignUpScreen = lazy(() => import('../Screens/SignUp'));

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

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const Navigator = () => {
  const {user} = useContext(AuthContext);
  console.log(user);

  return (
    <NavigationContainer>
      <Suspense fallback={null}>{user ? <AppStack /> : <AuthStack />}</Suspense>
    </NavigationContainer>
  );
};

export default Navigator;
