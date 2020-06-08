import axios from "axios";
import { AsyncStorage } from "react-native";
import { RAIDERS_API_URL } from "react-native-dotenv";

const instance = axios.create({
  baseURL: "https://tide-cleaners-maverick.herokuapp.com/api/v1.0/",
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
