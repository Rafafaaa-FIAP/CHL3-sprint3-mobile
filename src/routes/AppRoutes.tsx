import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {
  useEffect,
  useState,
} from 'react';

import {
  ActivityIndicator,
  View,
} from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ClinicDetailsScreen from '../screens/ClinicDetailsScreen';

import { RootStackParamList } from '../types/navigation';

import { getUser } from '../storage/authStorage';

import { COLORS } from '../constants/colors';

const Stack =
  createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  const [loading, setLoading] =
    useState<boolean>(true);

  const [isAuthenticated, setIsAuthenticated] =
    useState<boolean>(false);

  useEffect(() => {
    async function loadUser() {
      try {
        const user = await getUser();

        setIsAuthenticated(!!user);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          isAuthenticated ? 'Home' : 'Login'
        }
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Care Plus',
          }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Rede Credenciada',
          }}
        />

        <Stack.Screen
          name="ClinicDetails"
          component={ClinicDetailsScreen}
          options={{
            title: 'Detalhes',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}