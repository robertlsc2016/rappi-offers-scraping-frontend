import { CardActionArea, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { inMarket } from "../redux/statusViewSlice";
import { useDispatch } from "react-redux";
import { S_Card, S_Typography } from "../styles/CardMarkets.styles";

const CardMarkets = ({ store_id, store_name, img_path }) => {
  const dispatch = useDispatch();
  const baseUrlImage = `https://images.rappi.com.br/marketplace/${encodeURI(
    img_path
  )}?d=300x300&e=png&q=50`;

  return (
    <Link
      style={{
        all: "unset",
      }}
      to={`/store/${store_id}`}
      state={{ store_id: store_id, store_name: store_name, fromHome: true }}
      onClick={() => dispatch(inMarket())}
    >
      <S_Card>
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
    </Link>
  );
};

export default CardMarkets;
