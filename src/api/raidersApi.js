import axios from "axios";
import { AsyncStorage } from "react-native";
import { MAVERICK_API_URL } from "react-native-dotenv";

const instance = axios.create({
  baseURL: MAVERICK_API_URL,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("AUTH_TOKEN_KEY");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
