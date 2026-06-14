import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {
  useState,
  useEffect,
} from 'react';

import {
  useNavigation,
} from '@react-navigation/native';

import {
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/navigation';

import ClinicCard from '../components/ClinicCard';

import Button from '../components/Button';

import { Clinic } from '../types/clinic';

import { COLORS } from '../constants/colors';

import { clinicsMock } from '../services/api';

import {
  removeUser,
} from '../storage/authStorage';

import {
  getFavorites,
  saveFavorites,
} from '../storage/favoriteStorage';

type NavigationProps =
  NativeStackNavigationProp<
    RootStackParamList,
    'Home'
  >;

export default function HomeScreen() {
  const navigation =
    useNavigation<NavigationProps>();

  const [search, setSearch] =
    useState<string>('');

  const [loading, setLoading] =
    useState<boolean>(true);

  const [clinics, setClinics] =
    useState<Clinic[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    try {
      const favorites =
        await getFavorites();

      const updatedClinics =
        clinicsMock.map((clinic) => ({
          ...clinic,
          favorite: favorites.includes(
            clinic.id
          ),
        }));

      setClinics(updatedClinics);
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível carregar favoritos'
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await removeUser();

      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível sair'
      );
    }
  }

  async function handleFavorite(
    id: number
  ) {
    try {
      const updatedClinics =
        clinics.map((clinic) => {
          if (clinic.id === id) {
            return {
              ...clinic,
              favorite: !clinic.favorite,
            };
          }

          return clinic;
        });

      setClinics(updatedClinics);

      const favoriteIds =
        updatedClinics
          .filter((clinic) => clinic.favorite)
          .map((clinic) => clinic.id);

      await saveFavorites(favoriteIds);
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível salvar favorito'
      );
    }
  }

  const filteredClinics =
    clinics.filter(
      (clinic) =>
        clinic.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        clinic.specialty
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          title="Monitoramento IoT"
          onPress={() =>
            navigation.navigate('Monitoring')
          }
        />

        <View style={styles.buttonSpacing} />

        <Button
          title="Sair"
          onPress={handleLogout}
        />
      </View>

      <TextInput
        placeholder="Buscar clínica ou especialidade"
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredClinics}
        keyExtractor={(item) =>
          item.id.toString()
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ClinicCard
            clinic={item}
            onPress={() =>
              navigation.navigate(
                'ClinicDetails',
                {
                  clinicId: item.id,
                }
              )
            }
            onFavorite={() =>
              handleFavorite(item.id)
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.background,
  },

  header: {
    marginBottom: 16,
  },

  input: {
    backgroundColor: COLORS.white,
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  buttonSpacing: {
    height: 10,
  },
});