import { useEffect, useState } from "react";
import getLocalStorage from "../../services/LocalStorage/getLocalStorage";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Tooltip } from "@mui/material";
import {
  S_LocationTag,
  S_LocationTagInner,
} from "../../styles/LocationTag.styles";
import reloadPage from "../../utils/reloadPage";
import { useNavigate } from "react-router-dom";

const LocationTag = () => {
  const [location, setLocation] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const location = await getLocalStorage({ name: "location" });
    setLocation(location);
  };

  const clearLocation = () => {
    localStorage.removeItem("location");
    navigate("/", { replace: true });
    reloadPage()
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
