import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import getStores from "../../services/getStores";

const NextRouteButton = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // Hook para obter a localização atual

  // Atualiza as rotas disponíveis ao montar o componente
  useEffect(() => {
    getRoutes();
  }, []);

  // Atualiza o `currentRoute` sempre que a URL mudar
  const currentRoute = location.pathname.replace("/store/", "");

  const nextRoute = () => {
    console.log("Rota atual: ", currentRoute);

    const currentIndex = routes.indexOf(Number(currentRoute));
    console.log("Posição da rota atual: ", currentIndex);

    const nextIndex = (currentIndex + 1) % routes.length;
    console.log("Próxima rota: ", routes[nextIndex]);

    navigate(`/store/${routes[nextIndex]}`);
  };

  const getRoutes = async () => {
    try {
      const stores = await getStores().then((res) =>
        res.map((store) => store.store_id)
      );

      setRoutes(stores);
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
