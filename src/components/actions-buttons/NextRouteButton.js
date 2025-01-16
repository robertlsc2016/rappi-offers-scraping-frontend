import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../services/axiosInstance";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import getStores from "../../services/getStores";

const NextRouteButton = () => {
  const [routes, setRoutes] = useState([]);
  const [currentRoute, setCurrentRoute] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentRoute(window.location.pathname.replace("/", ""));
    getRoutes();
  }, []);

  const nextRoute = () => {
    const currentIndex = routes.indexOf(currentRoute);
    const nextIndex = (currentIndex + 1) % routes.length;
    navigate(`/${routes[nextIndex]}`);
  };

  const getRoutes = async () => {
    try {
      const stores = await getStores();
      setRoutes(stores);
      setLoading(false);
    } catch (err) {
      return err;
    }
  };

  return (
    <>
      {!loading && (
        <div onClick={nextRoute}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              fontSize: "32px",
              width: "64px",
              height: "64px",
              color: "white",
              background: "green",
              boxShadow: ` rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`,
            }}
          >
            <ArrowForwardOutlinedIcon fontSize="inherit" />
          </div>
        </div>
      )}
    </>
  );
};

export default NextRouteButton;
