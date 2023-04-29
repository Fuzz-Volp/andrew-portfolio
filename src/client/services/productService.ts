import axios, { AxiosInstance, AxiosResponse } from "axios";
import Product from "../@types/products";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const ProductService = {
  getAll: async (): Promise<Product[]> => await requests.get("products"),
  getOne: async (id: number): Promise<Product[]> =>
    await requests.get(`products/${id}`),
};

// class ProductService {
//   private instance: AxiosInstance;
//   constructor() {
//     this.instance = axios.create({
//       baseURL: "http://localhost:3000",
//     });
//     this.instance.interceptors.response.use(this.responseInterceptor);
//   }
//   private responseInterceptor({ data }: AxiosResponse<any, any>) {
//     return data;
//   }

//   async getAll() {
//     return await this.instance.get("/products/");
//   }
//   async getOne(id: string) {
//     return await this.instance.get(`/products/${id}`);
//   }
// }

// export const productService = new ProductService();
