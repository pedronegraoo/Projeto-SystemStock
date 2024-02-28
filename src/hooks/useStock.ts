import { useContext } from "react";
import { StockContext } from "../context/Provider";

function useStock() {
  return useContext(StockContext);
}

export default useStock;
