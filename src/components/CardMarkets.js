import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardMarkets = ({ route, img_path, name }) => {
  return (
    <Link to={`/${route}`}>
      <Card sx={{ width: "400px", height: "250px" }}>
        <CardActionArea>
          <CardMedia height="180" component="img" image={img_path} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardMarkets;
