import { CardActionArea, CardContent, CardMedia } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { inMarket } from "../redux/statusViewSlice";
import { useDispatch } from "react-redux";
import { S_Card, S_Typography } from "../styles/CardMarkets.styles";

const CardMarkets = ({ store_id, store_name, img_path }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const baseUrlImage = img_path
    ? `https://images.rappi.com.br/marketplace/${encodeURI(
        img_path
      )}?d=300x300&e=png&q=50`
    : "https://via.placeholder.com/300";

  const goToMarket = () => {
    dispatch(inMarket());
    navigate(`/store/${store_id}`, {
      state: { store_id: store_id, store_name: store_name, fromHome: true },
    });
  };

  return (
    <S_Card
      // style={{
      //   all: "unset",
      // }}
      onClick={goToMarket}
    >
      <CardActionArea>
        <CardMedia height="160" component="img" image={baseUrlImage} />
        <CardContent
          style={{
            overflow: "hidden",
          }}
        >
          <S_Typography>{store_name.toLowerCase()}</S_Typography>
        </CardContent>
      </CardActionArea>
    </S_Card>
  );
};

export default CardMarkets;
