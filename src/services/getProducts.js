import Axios from "./axiosInstance";

const getProducts = async ({ id_store, parent_store_type, store_type }) => {
  const configs = {
    state: {
      parent_store_type,
      store_type,
    },
    stores: [id_store],
  };

  try {
    const { data } = await Axios.post("/getAllStoreProductOffers", configs);

    // Verifica se a resposta contém os dados esperados
    if (!data || !data.products) {
      throw new Error("Resposta inválida da API.");
    }

    const { products, id_store: storeId, products_count } = data;

    // Definição das categorias de desconto
    const discountRanges = [80, 60, 40, 10, 0];

    // Criação dinâmica dos filtros de produtos
    const rangeProducts = discountRanges.reduce(
      (acc, range, index) => {
        const nextRange = discountRanges[index - 1] || Infinity;
        acc[range] = products
          .filter(
            (product) =>
              product.discount < nextRange / 100 &&
              product.discount >= range / 100 &&
              product.discount > 0
          )
          .sort((a, b) => b.discount - a.discount); // Ordena do maior para o menor desconto

        return acc;
      },
      {
        id_store: storeId,
        products_count,
        all: products
          .filter((product) => product.discount > 0)
          .sort((a, b) => b.discount - a.discount),
      }
    );

    return rangeProducts;
  } catch (error) {
    return null; // Retorna `null` em caso de erro
  }
};

export default getProducts;
