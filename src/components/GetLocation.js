import React, { useEffect, useRef, useState } from "react";
import useDebouncedValue from "../hooks/useDebouncedValue";
import Axios from "../services/axiosInstance";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  S_BoxAddress,
  S_ContainerGetLocation,
  S_GetLocation,
} from "../styles/GetLocations.styles";
import reloadPage from "../utils/reloadPage";
import { CircularProgress } from "@mui/material";

const GetLocation = () => {
  const inputRef = useRef(null);

  const [textAddress, setTextAddress] = useState("");
  const [places, setPlaces] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const handleSearch = (text) => {
    setPlaces([]);
    setTextAddress(text);
  };

  useEffect(() => {
    setIsLoading(true);
  }, [textAddress]);

  const handleGetGeolocation = (place_id) => {
    getGeolocation({ place_id: place_id });
  };

  const debouncedQuery = useDebouncedValue(textAddress, 400);

  useEffect(() => {
    getPlaces({ place: debouncedQuery });
  }, [debouncedQuery]);

  const getPlaces = async ({ place }) => {
    try {
      const { data: places } = await Axios.post("/searchLocations", {
        query: place,
      }).finally(() => {
        setIsLoading(false);
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
      reloadPage();
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 1000);
  }, []);

  return (
    <S_GetLocation>
      <S_ContainerGetLocation>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "lighter",
            margin: "0",
            padding: "0",
          }}
        >
          Onde você quer ver as lojas do{" "}
          <span
            style={{
              fontWeight: "bold",
              fontSize: "48px",
              color: "rgb(255, 68, 31)",
            }}
          >
            Rappi
          </span>
          ?
        </h2>
        <input
          ref={inputRef}
          type="text"
          placeholder="Digite o endereço"
          value={textAddress}
          onChange={(e) => handleSearch(e.target.value)}
          style={{
            // all: "unset",
            width: "100%",
            height: "64px",
            fontSize: "32px",
            marginRight: "10px",
            borderRadius: "4px",
            borderBottom: "1px solid gray",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "8px",
            // border: "1px solid",
            width: "100%",
            zIndex: "12",

            height: "auto",
            // overflow: "hidden",
          }}
        >
          {!loading ? (
            <>
              {places.map((place, index) => (
                <S_BoxAddress
                  onClick={() => handleGetGeolocation(place.place_id)}
                  key={place.id || index}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "4px",
                      width: "90%",
                    }}
                  >
                    <LocationOnIcon />
                    <p
                      style={{
                        display: "flex",
                        // justifyContent: "center",
                        // alignItems: "center",
                        flexDirection: "row",
                        fontSize: "16px",
                        cursor: "pointer",
                        height: "100%",
                        textAlign: "start",
                      }}
                    >
                      {place.address}
                    </p>
                  </div>
                </S_BoxAddress>
              ))}
            </>
          ) : (
            textAddress.length > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <CircularProgress />
              </div>
            )
          )}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-5px",
            zIndex: "1",
          }}
        >
          <img
            style={{
              // border: '1px solid',
              // height: '50px',
              width: "100%",
              opacity: "50%",
            }}
            src="https://img.freepik.com/free-vector/silhouette-skyline-illustration_53876-78792.jpg?t=st=1738090555~exp=1738094155~hmac=830a1a5463bf357e4cc23b0856a4f976518ebc68581bc7c36e4b8bb3508342dc&w=826"
            alt="cidade"
          ></img>
        </div>
      </S_ContainerGetLocation>
    </S_GetLocation>
  );
};

export default GetLocation;
