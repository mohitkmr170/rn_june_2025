import {lazy} from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeScreen = lazy(() => import('../Screens/Home'));
const LoginScreen = lazy(() => import('../Screens/Login'));
const SignUpScreen = lazy(() => import('../Screens/SignUp'));

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Login: {
      screen: LoginScreen,
    },
    SignUp: {
      screen: SignUpScreen,
    },
    Home: {
      screen: HomeScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
