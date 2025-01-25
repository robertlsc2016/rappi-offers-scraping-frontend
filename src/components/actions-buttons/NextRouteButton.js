import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import getStores from "../../services/getStores";
import returnTop from "../../utils/returnTop";

const NextRouteButton = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getRoutes();
    returnTop();
  }, []);

  const currentRoute = location.pathname.replace("/store/", "");

  const nextRoute = () => {
    const currentIndex = routes.findIndex(
      (route) => route.store_id == Number(currentRoute)
    );

    const nextIndex = (currentIndex + 1) % routes.length;
    navigate(`/store/${routes[nextIndex].store_id}`);
  };

  const getRoutes = async () => {
    try {
      const _stores = [];

      await getStores().then((res) => {
        Object.entries(res).map(([group, stores]) => {
          _stores.push(...stores);
        });
      });

      setRoutes(_stores);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {!loading && (
        <div
          onClick={nextRoute}
          style={{
            cursor: "pointer",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              fontSize: "24px",
              width: "48px",
              height: "48px",
              color: "white",
              background: "green",
              boxShadow: `rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`,
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
