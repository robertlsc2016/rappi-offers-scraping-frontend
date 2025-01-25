import { useState, useEffect } from "react";
import getProducts from "../services/getProducts";
import getNewProductsStore from "../services/getNewProducts";
import getInfosStore from "../services/getInfosStore";

const useFetchStoreData = (storeId) => {
  const [data, setData] = useState({
    storeInfos: {},
    products: { all: [] },
    newItems: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storeInfos = await getInfosStore({ store_id: storeId });

        const products = await getProducts({
          store_id: storeId,
          store_type: storeInfos.store_type_id,
          parent_store_type: storeInfos.store_type.parent_id,
        });

        const newItems = await getNewProductsStore({
          store_id: storeId,
          store_type: storeInfos.store_type_id,
          parent_store_type: storeInfos.store_type.parent_id,
        });

        setData({
          storeInfos,
          products,
          newItems,
          loading: false,
          error: null,
        });
      } catch (error) {
        setData((prev) => ({ ...prev, loading: false, error }));
      }
    };

    fetchData();
  }, [storeId]);

  return data;
};

export default useFetchStoreData;
