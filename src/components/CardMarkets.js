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

const CardMarkets = ({ route, img_path, name }) => {
  const dispatch = useDispatch();

  return (
    <Link to={`/${route}`} onClick={() => dispatch(inMarket())}>
      <Card sx={{ width: "230px", height: "220px" }}>
        <CardActionArea>
          <CardMedia height="160" component="img" image={img_path} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardMarkets;
