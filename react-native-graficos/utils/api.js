import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchBitcoinPrices = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/coins/bitcoin/market_chart`,
      {
        params: {
          vs_currency: "usd",
          days: 7,
        },
      }
    );
    return response.data.prices;
  } catch (error) {
    console.error("Erro ao buscar dados da API CoinGecko:", error);
    return null;
  }
};
