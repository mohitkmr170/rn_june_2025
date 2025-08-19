import {Text, TextInput, View, Button as Pressable} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import {Button} from '../../Components';
import {getAuth, signInWithEmailAndPassword} from '@react-native-firebase/auth';
import {useContext} from 'react';
import {AuthContext} from '../../Providers/AuthProvider';

type FormData = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();
  const {setGuest} = useContext(AuthContext);

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const userCreds = await signInWithEmailAndPassword(
        getAuth(),
        data.email,
        data.password,
      );
      return userCreds?.user;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.parentContainer}>
      <Pressable title="Continue as Guest" onPress={() => setGuest(true)} />
      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email is required!',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          }}
          render={({field: {onChange, value}}) => {
            return (
              <TextInput
                style={styles.inputContainer}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                autoCapitalize={'none'}
                placeholder="Email"
              />
            );
          }}
        />
        {errors.email?.message && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required!',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
          render={({field: {onChange, value}}) => {
            return (
              <TextInput
                style={styles.inputContainer}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                autoCapitalize={'none'}
                placeholder="Password"
                secureTextEntry
              />
            );
          }}
        />
        {errors.password?.message && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}
      </View>
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
      <Button
        title="SignUp"
        onPress={() => (navigation as any).navigate('SignUp')}
      />
    </View>
  );
};

export default LoginScreen;
