import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';

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

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.parentContainer}>
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
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default LoginScreen;
