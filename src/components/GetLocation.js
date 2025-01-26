import React, { useEffect, useState } from "react";
import useDebouncedValue from "../hooks/useDebouncedValue";
import Axios from "../services/axiosInstance";

const GetLocation = () => {
  const [textAddress, setTextAddress] = useState("");
  const [places, setPlaces] = useState([]);

  const handleSearch = (text) => {
    setPlaces([]);
    setTextAddress(text);
  };

  const handleGetGeolocation = (place_id) => {
    getGeolocation({ place_id: place_id });
  };

  const debouncedQuery = useDebouncedValue(textAddress, 800);

  useEffect(() => {
    getPlaces({ place: debouncedQuery });
  }, [debouncedQuery]);

  const getPlaces = async ({ place }) => {
    try {
      const { data: places } = await Axios.post("/searchLocations", {
        query: place,
      });
      setPlaces(places);
    } catch (err) {
      return err;
    }
  };

  const getGeolocation = async ({ place_id }) => {
    try {
      const { data: location_infos } = await Axios.post("/getGeolocation", {
        place_id: place_id,
      });
      localStorage.setItem("location", JSON.stringify(location_infos));
      window.location.reload();
    } catch (err) {
      return err;
    }
  };

  return (
    <div
      style={{
        position: "relative",
        background: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), 
        url('https://img.freepik.com/vetores-premium/padrao-sobre-shopping_1061-495.jpg')`,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        gap: "16px",
        touchAction: "none",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "20px",
          opacity: "10% !important",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          background: "white",
          flexDirection: "column",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          // border: "1px solid black",
          marginTop: " 8px",
          boxShadow: `rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`,
          width: "90%",
          height: "90%",
          borderRadius: "24px",
          gap: "16px",
          overflow: "hidden",
          paddingBottom: "16px",
        }}
      >
        <h2
          style={{
            fontSize: "46px",
            fontWeight: "lighter",
            margin: "0",
            padding: "0",
          }}
        >
          Insira sua
          <p
            style={{
              fontWeight: "800",
              color: "blue",
            }}
          >
            Localização 📍
          </p>
        </h2>
        <input
          type="text"
          placeholder="Digite o endereço"
          value={textAddress}
          onChange={(e) => handleSearch(e.target.value)}
          style={{
            width: "100%",
            height: "64px",
            fontSize: "32px",
            marginRight: "10px",
            borderRadius: "4px",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "auto",
            // border: '1px solid black',
            overflow: "auto",
          }}
        >
          {places.map((place, index) => (
            <div
              onClick={() => handleGetGeolocation(place.place_id)}
              key={place.id || index} // Usando o índice como chave caso não tenha um id único
              style={{
                animation: `drop 0.5s ease forwards`,
                animationDelay: `${index * 0.2}s`, // Adiciona um delay para cada item
                opacity: 0, // Começa invisível
                transform: "translateY(-20px)", // Começa um pouco acima
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#3498db",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "18px",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {place.address}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes drop {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default GetLocation;
