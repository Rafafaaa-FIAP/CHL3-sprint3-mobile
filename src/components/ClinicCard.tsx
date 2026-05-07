import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { Clinic } from '../types/clinic';

import { COLORS } from '../constants/colors';

interface ClinicCardProps {
  clinic: Clinic;
  onPress: () => void;
  onFavorite: () => void;
}

export default function ClinicCard({
  clinic,
  onPress,
  onFavorite,
}: ClinicCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Image
        source={{
          uri: clinic.image,
        }}
        style={styles.image}
      />

      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={onFavorite}
      >
        <Ionicons
          name={
            clinic.favorite
              ? 'heart'
              : 'heart-outline'
          }
          size={24}
          color="red"
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.name}>
          {clinic.name}
        </Text>

        <Text style={styles.specialty}>
          {clinic.specialty}
        </Text>

        <Text style={styles.address}>
          {clinic.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginBottom: 18,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 170,
  },

  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
  },

  content: {
    padding: 16,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },

  specialty: {
    marginTop: 6,
    color: COLORS.primary,
    fontWeight: '600',
  },

  address: {
    marginTop: 6,
    color: COLORS.textLight,
  },
});