import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';

import { useState } from 'react';

import {
  useNavigation,
} from '@react-navigation/native';

import {
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import {
  Controller,
  useForm,
} from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { RootStackParamList } from '../types/navigation';

import Button from '../components/Button';

import { COLORS } from '../constants/colors';

import { saveUser } from '../storage/authStorage';

import {
  loginSchema,
  LoginFormData,
} from '../types/loginForm';

type NavigationProps =
  NativeStackNavigationProp<
    RootStackParamList,
    'Login'
  >;

export default function LoginScreen() {
  const navigation =
    useNavigation<NavigationProps>();

  const [loading, setLoading] =
    useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function handleLogin(
    data: LoginFormData
  ) {
    try {
      setLoading(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      await saveUser({
        email: data.email,
        token: 'token_fake',
      });

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível realizar login'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Care Plus
      </Text>

      <Text style={styles.subtitle}>
        Rede Credenciada
      </Text>

      <Controller
        control={control}
        name="email"
        render={({
          field: { onChange, value },
        }) => (
          <>
            <TextInput
              placeholder="Digite seu e-mail"
              style={styles.input}
              value={value}
              onChangeText={onChange}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {errors.email && (
              <Text style={styles.error}>
                {errors.email.message}
              </Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({
          field: { onChange, value },
        }) => (
          <>
            <TextInput
              placeholder="Digite sua senha"
              style={styles.input}
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />

            {errors.password && (
              <Text style={styles.error}>
                {errors.password.message}
              </Text>
            )}
          </>
        )}
      />

      <Button
        title="Entrar"
        onPress={handleSubmit(handleLogin)}
        loading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: COLORS.background,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
  },

  subtitle: {
    textAlign: 'center',
    color: COLORS.textLight,
    marginBottom: 32,
    marginTop: 8,
  },

  input: {
    backgroundColor: COLORS.white,
    padding: 14,
    borderRadius: 8,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  error: {
    color: COLORS.error,
    marginBottom: 12,
    marginLeft: 4,
    fontSize: 13,
  },
});