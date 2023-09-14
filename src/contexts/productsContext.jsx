import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  categoriesMap: {},
});

export const ProductsProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    (async function() {
      const categoriesMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoriesMap)
    })()
  }, [])
  
  const value = { categoriesMap };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
