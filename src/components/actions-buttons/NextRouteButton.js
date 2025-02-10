import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import getStores from "../../services/getStores";
import returnTop from "../../utils/returnTop";
import {
  S_InnerNextRouteButton,
  S_NextRouteButton,
} from "../../styles/NextRouteButton.styles";

const NextRouteButton = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const location = useLocation();
  const currentRoute = location.pathname.replace("/store/", "");

  useEffect(() => {
    returnTop();
    getRoutes();
  }, []);

  const nextRoute = () => {
    const currentIndex = routes.findIndex(
      (route) => route.store_id == Number(currentRoute)
    );

    const nextIndex = (currentIndex + 1) % routes.length;

    navigate(`/store/${routes[nextIndex].store_id}`);
  };

  const getRoutes = async () => {
    try {
      const localStorageLocation = localStorage.getItem("location");

      if (!localStorageLocation) {
        return;
      }

      const _stores = [];

      const routes = await getStores();

      Object.entries(routes).map(([group, stores]) => {
        _stores.push(...stores);
      });

      setRoutes(_stores);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {!loading && routes.length > 1 && (
        <S_NextRouteButton onClick={nextRoute}>
          <S_InnerNextRouteButton>
            <ArrowForwardOutlinedIcon fontSize="inherit" />
          </S_InnerNextRouteButton>
        </S_NextRouteButton>
      )}
    </>
  );
};

export default NextRouteButton;
