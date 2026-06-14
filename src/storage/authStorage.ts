import * as SecureStore from 'expo-secure-store';

const USER_KEY = 'careplus_user';

export type StoredUser = {
  email: string;
  token: string;
};

export async function saveUser(
  user: StoredUser
) {
  await SecureStore.setItemAsync(
    USER_KEY,
    JSON.stringify(user)
  );
}

export async function getUser() {
  const user =
    await SecureStore.getItemAsync(USER_KEY);

  if (!user) {
    return null;
  }

  return JSON.parse(user) as StoredUser;
}

export async function removeUser() {
  await SecureStore.deleteItemAsync(USER_KEY);
}