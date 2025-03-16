import axios from "axios";
import { RedeemPageProps, RedeemPagesProps } from "../@types/reedemPages";
const api = axios.create({
  baseURL: "https://server.lobby.tech/api/v1",
  headers: {
    Authorization:
      "Basic YV9nNUFxWGJoUXlTUjUwd2tYTVF5Y21uVWItcFE3ODNkTFMxRjd5TjZnWTo=",
    accept: "application/json",
  },
});

export const getRedeemPages = async (): Promise<RedeemPagesProps> => {
  const response = await api.get("/redeem_pages");
  return response.data;
};

export const getRedeemPage = async (): Promise<RedeemPageProps> => {
  const response = await api.get(
    "/redeem_pages/32ccf6f1-4f6e-417f-9fab-565db052dc15"
  );
  return response.data;
};

export const createRedeem = async (data: RedeemPageProps) => {
  const response = await api.post("/redeems", data);
  return response?.data;
};
