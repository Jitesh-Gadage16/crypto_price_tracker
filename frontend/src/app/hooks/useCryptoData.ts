import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

interface CryptoPrices {
  [key: string]: {
    usd: number;
  };
}

const API_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,cardano,solana&vs_currencies=usd";

const fetchCryptoPrices = async (): Promise<CryptoPrices> => {
  const response = await axios.get(API_URL);
  return response.data;
};


export const useCryptoData = (): UseQueryResult<CryptoPrices, Error> => {
  return useQuery<CryptoPrices, Error>({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoPrices,
    refetchInterval: 60000, 
    staleTime: 30000, 
    cacheTime: 300000,
    retry: 2, 
  });
};
