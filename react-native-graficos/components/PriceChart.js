import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const PriceChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <Text style={styles.errorText}>Nenhum dado disponível</Text>;
  }

  // Preparar os dados para o gráfico
  const labels = data.map((item, index) => `Dia ${index + 1}`);
  const prices = data.map((item) => item[1]); // Preço em USD

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preços do Bitcoin (Últimos 7 dias)</Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: prices,
            },
          ],
        }}
        width={Dimensions.get("window").width - 20}
        height={220}
        yAxisSuffix="$"
        chartConfig={{
          backgroundColor: "#1e2923",
          backgroundGradientFrom: "#1e2923",
          backgroundGradientTo: "#08130d",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#fff",
  },
  chart: {
    borderRadius: 16,
  },
  errorText: {
    textAlign: "center",
    marginTop: 20,
    color: "red",
    fontSize: 16,
  },
});

export default PriceChart;
