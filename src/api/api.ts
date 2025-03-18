import axios from "axios";
import { RedeemCreationProps } from "../@types/redeemForm";
import { RedeemPageProps, RedeemPagesProps } from "../@types/reedemPages";
const api = axios.create({
  baseURL: "https://server.lobby.tech/api/v1",
  headers: {
    Authorization: import.meta.env.VITE_API_KEY,
    accept: "application/json",
  },
});

export const getRedeemPages = async (): Promise<RedeemPagesProps> => {
  const response = await api.get("/redeem_pages");
  return response.data;
};

export const getRedeemPage = async (): Promise<RedeemPageProps> => {
  const response = await api.get(
    `/redeem_pages/${import.meta.env.VITE_API_PAGE_ID}`
  );
  return response.data;
};

export const createRedeem = async (data: RedeemCreationProps) => {
  const response = await api.post(
    `redeem_pages/${import.meta.env.VITE_API_PAGE_ID}/redeem`,
    data
  );
  return response?.data;
};
