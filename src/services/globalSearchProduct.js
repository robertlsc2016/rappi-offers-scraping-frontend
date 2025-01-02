import Axios from "./axiosInstance";

const globalSearchProduct = async ({ query }) => {
  try {
    const priorityOrder = [900604367, 900542505, 900156624, 900536162, 900020818, 900631973];

    const base_url = `https://services.rappi.com.br/api/pns-global-search-api/v1/unified-search?is_prime=true&unlimited_shipping=true`;

    const getGlobalProducts = await Axios.post(base_url, {
      params: { is_prime: true, unlimited_shipping: true },
      tiered_stores: [],
      lat: -23.5717729,
      lng: -46.730492,
      query: query,
      options: {},
    });

    getGlobalProducts.data.stores.sort((a, b) => {
      const priorityA = priorityOrder.indexOf(a.store_id);
      const priorityB = priorityOrder.indexOf(b.store_id);

      // Se o ID estiver no array de prioridades, usa sua posição
      // Caso contrário, coloca no final
      return (
        (priorityA === -1 ? Infinity : priorityA) -
        (priorityB === -1 ? Infinity : priorityB)
      );
    });

    console.log(getGlobalProducts.data);
    // console.log(getGlobalProducts.data.stores);
    return getGlobalProducts.data.stores;
  } catch (err) {
    throw new Error(err);
  }
};

export default globalSearchProduct;
