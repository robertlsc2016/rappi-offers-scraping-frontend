import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { inMarket } from "../redux/statusViewSlice";
import { useDispatch } from "react-redux";

const CardMarkets = ({ store_id, store_name, img_path }) => {
  const dispatch = useDispatch();
  const baseUrlImage = `https://images.rappi.com.br/marketplace/${encodeURI(
    img_path
  )}?d=300x300&e=png&q=50`;

  return (
    <Link
      to={`/store/${store_id}`}
      state={{ store_id: store_id, store_name: store_name }}
      onClick={() => dispatch(inMarket())}
    >
      <Card sx={{ width: "230px", height: "220px" }}>
        <CardActionArea>
          <CardMedia height="160" component="img" image={baseUrlImage} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {store_name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardMarkets;
