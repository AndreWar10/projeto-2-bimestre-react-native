import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ActivityIndicator } from "react-native";
import PriceChart from "./components/PriceChart";
import { fetchBitcoinPrices } from "./utils/api";

export default function App() {
  const [prices, setPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadPrices = async () => {
    setIsLoading(true); // Ativa o estado de carregamento
    const data = await fetchBitcoinPrices();
    if (data) {
      setPrices(data);
    }
    setIsLoading(false); // Desativa o estado de carregamento
  };

  useEffect(() => {
    loadPrices();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bitcoin Tracker</Text>

      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <PriceChart data={prices} />
      )}

      <Button title="Atualizar Preços" onPress={loadPrices} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
});
