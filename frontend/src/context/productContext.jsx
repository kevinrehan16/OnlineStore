import React, { Children, createContext, useContext } from "react";
import axios from "axios";
import { API_URL } from "../config";

const productContext = createContext();

export const useProduct = () => useContext(productContext);

export const ProductProvider = ({ children }) => {

  const getProducts = async () => {
    try {
      const { data } = await axios.get(API_URL+"/api/products");
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  return (
    <productContext.Provider value={{ getProducts }}>
      {children}
    </productContext.Provider>
  );
}

