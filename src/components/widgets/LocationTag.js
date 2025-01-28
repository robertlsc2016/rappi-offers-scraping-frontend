import { useEffect, useState } from "react";
import getLocalStorage from "../../services/LocalStorage/getLocalStorage";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Tooltip } from "@mui/material";
import {
  S_LocationTag,
  S_LocationTagInner,
} from "../../styles/LocationTag.styles";

const LocationTag = () => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const location = await getLocalStorage({ name: "location" });
    setLocation(location);
  };

  const clearLocation = () => {
    localStorage.removeItem("location");
    window.location.reload();
  };

  return (
    <>
      {location && location.address && (
        <Tooltip title="Mudar Localização">
          <S_LocationTag onClick={clearLocation}>
            <S_LocationTagInner>
              <LocationOnIcon />
              <p
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "100%",
                }}
              >
                {location.address}
              </p>
            </S_LocationTagInner>
          </S_LocationTag>
        </Tooltip>
      )}
    </>
  );
};

export default LocationTag;
