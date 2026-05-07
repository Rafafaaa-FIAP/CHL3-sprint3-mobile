import AsyncStorage from '@react-native-async-storage/async-storage';

import { User } from '../types/user';

const USER_STORAGE_KEY = '@careplus:user';

export async function saveUser(user: User): Promise<void> {
  await AsyncStorage.setItem(
    USER_STORAGE_KEY,
    JSON.stringify(user)
  );
}

export async function getUser(): Promise<User | null> {
  const user = await AsyncStorage.getItem(
    USER_STORAGE_KEY
  );

  if (!user) {
    return null;
  }

  return JSON.parse(user) as User;
}

export async function removeUser(): Promise<void> {
  await AsyncStorage.removeItem(
    USER_STORAGE_KEY
  );
}