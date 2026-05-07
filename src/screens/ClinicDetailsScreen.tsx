import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import {
  RouteProp,
  useRoute,
} from '@react-navigation/native';

import { RootStackParamList } from '../types/navigation';

import { clinicsMock } from '../services/api';

import { COLORS } from '../constants/colors';

type DetailsRouteProp = RouteProp<
  RootStackParamList,
  'ClinicDetails'
>;

export default function ClinicDetailsScreen() {
  const route =
    useRoute<DetailsRouteProp>();

  const { clinicId } = route.params;

  const clinic = clinicsMock.find(
    (item) => item.id === clinicId
  );

  if (!clinic) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: clinic.image,
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.name}>
          {clinic.name}
        </Text>

        <Text style={styles.specialty}>
          {clinic.specialty}
        </Text>

        <Text style={styles.label}>
          Endereço
        </Text>

        <Text style={styles.text}>
          {clinic.address}
        </Text>

        <Text style={styles.label}>
          Telefone
        </Text>

        <Text style={styles.text}>
          {clinic.phone}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  image: {
    width: '100%',
    height: 240,
  },

  content: {
    padding: 24,
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
  },

  specialty: {
    marginTop: 8,
    fontSize: 18,
    color: COLORS.primary,
    fontWeight: '600',
  },

  label: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: 'bold',
  },

  text: {
    marginTop: 6,
    color: COLORS.textLight,
    fontSize: 16,
  },
});