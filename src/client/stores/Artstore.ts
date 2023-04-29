import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";
import Product from "../@types/products";
import logging from "../config/logging";

const baseURL = "http://localhost:3001/api/products";

interface ArtStore {
  products: Product[];
  getAllProducts: () => Promise<void>;
  getOneProduct: (id: number) => Promise<void>;
  loading: boolean;
}

export const useProductStore = create<ArtStore>((set) => ({
  products: [],
  loading: false,
  hasErrors: false,
  getAllProducts: async () => {
    set(() => ({ loading: true }));
    try {
      const response = await axios.get(`${baseURL}`);
      //@ts-ignore
      set({ products: response.data });
    } catch (error) {
      logging.error(error);
      set(() => ({ hasErrors: true, loading: false }));
    }
  },
  getOneProduct: async (id) => {
    try {
      const response = await axios.get(`${baseURL}/${id}`);
      set({ products: response.data });
    } catch (error) {
      logging.error(error);
      set(() => ({ hasErrors: true, loading: false }));
    }
  },
}));
