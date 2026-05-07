import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_STORAGE_KEY =
  '@careplus:favorites';

export async function saveFavorites(
  favorites: number[]
): Promise<void> {
  await AsyncStorage.setItem(
    FAVORITES_STORAGE_KEY,
    JSON.stringify(favorites)
  );
}

export async function getFavorites(): Promise<number[]> {
  const favorites =
    await AsyncStorage.getItem(
      FAVORITES_STORAGE_KEY
    );

  if (!favorites) {
    return [];
  }

  return JSON.parse(favorites) as number[];
}