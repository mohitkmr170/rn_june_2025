import {Text, TextInput, View, Button as Pressable} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import {Button} from '../../Components';
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from '@react-native-firebase/auth';

type FormData = {
  email: string;
  fullName: string;
  password: string;
};

const SignUpScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const userCreds = await createUserWithEmailAndPassword(
        getAuth(),
        data?.email,
        data?.password,
      );
      if (userCreds) {
        await updateProfile(userCreds?.user, {
          displayName: data?.fullName,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.parentContainer}>
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
          name="fullName"
          rules={{
            required: 'Full name is required!',
          }}
          render={({field: {onChange, value}}) => {
            return (
              <TextInput
                style={styles.inputContainer}
                onChangeText={onChange}
                value={value}
                autoCapitalize={'words'}
                placeholder="Full Name"
              />
            );
          }}
        />
        {errors.fullName?.message && (
          <Text style={styles.error}>{errors.fullName.message}</Text>
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
      <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
      <Pressable
        title="Login"
        onPress={() => navigation.goBack()}
        color={'#000000'}
      />
    </View>
  );
};

export default SignUpScreen;
