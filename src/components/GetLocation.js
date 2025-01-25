import React, { useState } from "react";
import axios from "axios";

const GetLocation = () => {
  const [address, setAddress] = useState([]); // Estado para armazenar o endereço

  const handleSearch = async () => {
    if (!address.trim()) {
      console.error("Por favor, insira um endereço válido.");
      return;
    }

    const apiKey = "AIzaSyBYEPf74iKGQJKAGwzae_F9Rs--J6lmPsA"; // Substitua pela sua chave da API do Google
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&components=country:BR|administrative_area:SPS&key=${apiKey}`;

    try {
      const response = await axios.get(geocodeUrl);

      if (response.data.status === "OK") {
        const results = response.data.results;

        const resultss = results.map((result) => {
          return {
            address: result.formatted_address,
            lat: result.geometry.location.lat,
            lng: result.geometry.location.lng,
          };
        });

        setAddress(resultss);
      }
    } catch (error) {
      console.error("Erro na requisição à API:", error.message);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Buscar Coordenadas</h2>
      <input
        type="text"
        placeholder="Digite o endereço"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginRight: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 15px",
          backgroundColor: "#4285F4",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Pesquisar
      </button>
    </div>
  );
};

export default GetLocation;
