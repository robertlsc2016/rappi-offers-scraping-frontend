import { Box } from "@mui/material";

const CardProductAmazon = ({ name, price, image_url, link }) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",

        background: "#e9e9e9",
        borderRadius: "16px",
        width: "120px",
        height: "220px",
        padding: "8px",
        // gap: "16px",

        // border: '1px solid'
      }}
    >
      <Box
        style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   gap: "6px",
          width: "100%",
          height: "50%",
        }}
      >
        <img
          src={`${image_url}`}
          style={{ width: "100%", height: "60px", objectFit: "contain" }}
        />
        <p
          style={{
            fontWeight: "bold",
            margin: "0",
            padding: "0",
            fontSize: "12px",
            // height: "100px",
            // border: "1px solid",
          }}
        >
          R$ {price}
        </p>
        <p
          style={{
            margin: "0",
            padding: "0",
            fontSize: "12px",
            height: "100px",
            // border: "1px solid",
          }}
        >
          {name}
        </p>

        <a href={link} target="_blank">
          <p
            style={{
              cursor: "pointer",
              margin: "0",
              padding: "0",
              fontSize: "12px",
              // height: "100px",
              fontWeight: "800",
              textDecoration: "underline",
              // border: "1px solid",
            }}
          >
            Ver Produto
          </p>
        </a>
      </Box>
    </Box>
  );
};

export default CardProductAmazon;
