import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { socket } from "../services/socket";
import { Alert } from 'react-native';
import { getCurrentLocation } from '../services/locationService';
import Button from '../components/Button';

type SensorData = {
  temperature: number;
  humidity: number;
  occupancy: number;
  status: string;
  updatedAt: string;
};

export function MonitoringScreen() {
  const [connected, setConnected] = useState(false);
  const [sensorData, setSensorData] = useState<SensorData | null>(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] =
    useState<string>('');

  const [locationLoading, setLocationLoading] =
    useState<boolean>(false);

  const [location, setLocation] =
    useState<{
      latitude: number;
      longitude: number;
    } | null>(null);

  useEffect(() => {
    if (socket.connected) {
      setConnected(true);
    }

    function handleConnect() {
      setConnected(true);
      setError('');
    }

    function handleDisconnect() {
      setConnected(false);
    }

    function handleConnectError() {
      setError('Não foi possível conectar ao servidor IoT.');
      setConnected(false);
    }

    function handleSensorUpdate(data: SensorData) {
      setSensorData(data);
      setConnected(true);
      setError('');
      setSuccessMessage(
        'Dados recebidos em tempo real com sucesso.'
      );
    }

    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);
    socket.on('connect_error', handleConnectError);
    socket.on('sensor:update', handleSensorUpdate);

    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
      socket.off('connect_error', handleConnectError);
      socket.off('sensor:update', handleSensorUpdate);
    };
  }, []);

  async function handleGetLocation() {
    try {
      setLocationLoading(true);

      const currentLocation =
        await getCurrentLocation();

      setLocation(currentLocation);

      Alert.alert(
        'Sucesso',
        'Localização obtida com sucesso.'
      );
    } catch (error) {
      Alert.alert(
        'Permissão necessária',
        'Não foi possível acessar sua localização.'
      );
    } finally {
      setLocationLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitoramento IoT</Text>

      <View style={styles.statusBox}>
        <Text style={styles.statusText}>
          Status: {connected ? "Conectado" : "Desconectado"}
        </Text>
      </View>
      {successMessage ? (
        <Text style={styles.success}>
          {successMessage}
        </Text>
      ) : null}

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {!sensorData && !error ? (
        <View style={styles.emptyState}>
          <ActivityIndicator
            size="large"
            color="#2563EB"
          />

          <Text style={styles.emptyText}>
            Aguardando dados do sensor IoT...
          </Text>
        </View>
      ) : null}

      {sensorData ? (
        <View style={styles.card}>
          <Text style={styles.item}>Temperatura: {sensorData.temperature}°C</Text>
          <Text style={styles.item}>Umidade: {sensorData.humidity}%</Text>
          <Text style={styles.item}>Ocupação: {sensorData.occupancy}%</Text>
          <Text style={styles.item}>Sensor: {sensorData.status}</Text>
          <Text style={styles.updated}>
            Atualizado às {sensorData.updatedAt}
          </Text>
        </View>
      ) : null}

      <View style={styles.locationCard}>
        <Text style={styles.locationTitle}>
          Localização do dispositivo
        </Text>

        <Button
          title={
            locationLoading
              ? 'Buscando localização...'
              : 'Buscar minha localização'
          }
          onPress={handleGetLocation}
        />

        {location ? (
          <View style={styles.locationInfo}>
            <Text style={styles.item}>
              Latitude: {location.latitude}
            </Text>

            <Text style={styles.item}>
              Longitude: {location.longitude}
            </Text>
          </View>
        ) : (
          <Text style={styles.emptyText}>
            Nenhuma localização carregada.
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F5F7FA",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  statusBox: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
  },
  statusText: {
    fontSize: 16,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    gap: 12,
  },
  item: {
    fontSize: 18,
  },
  updated: {
    marginTop: 12,
    color: "#666",
  },
  error: {
    color: "red",
    marginBottom: 16,
  },

  locationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginTop: 16,
    gap: 12,
  },

  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  locationInfo: {
    marginTop: 8,
    gap: 8,
  },

  emptyText: {
    color: '#666',
    marginTop: 8,
  },

  success: {
    color: 'green',
    marginBottom: 16,
    fontWeight: '600',
  },

  emptyState: {
    alignItems: 'center',
    marginTop: 24,
    gap: 12,
  },
});