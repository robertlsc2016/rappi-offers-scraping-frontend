import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Filtro de Ofertas do Rappi</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <Link to="/turbo">
          <Card sx={{ width: "400px", height: "250px" }}>
            <CardActionArea>
              <CardMedia
                height="180"
                component="img"
                image="https://startse-uploader.s3.us-east-2.amazonaws.com/large_rappi_passo_atras_avancos_varejo_d3472fbd04.jpeg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Turbo
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        <Link to="/carrefour">
          <Card sx={{ width: "400px", height: "250px" }}>
            <CardActionArea>
              <CardMedia
                height="180"
                component="img"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_2ABhb8jXr8Ad2CF0Qr6jkxWWZ6s9P6VVSw&s"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Carrefour
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        <Link to="/pao-de-acucar">
          <Card sx={{ width: "400px", height: "250px" }}>
            <CardActionArea>
              <CardMedia
                height="180"
                component="img"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTl6OrE1EUtntSDrM_xGQ_i79qJdq5dBq9g&s"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pão de Açúcar
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        <Link to="/mambo">
          <Card sx={{ width: "400px", height: "250px" }}>
            <CardActionArea>
              <CardMedia
                height="180"
                component="img"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qgnY485Unq1_y7JpeIhcWfXiLhcOosAeeQ&s"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mambo
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default Home;
