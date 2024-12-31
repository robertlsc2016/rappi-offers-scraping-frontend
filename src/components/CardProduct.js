import { Chip } from "@mui/material";

const CardProduct = ({
  name = "Não definido",
  price = 0,
  discount = 0,
  image = "",
  real_price = 0,
}) => {
  return (
    <div
      style={{
        cursor: "pointer",
        boxSizing: "border-box",
        padding: "5px 5px 5px 5px",
        backgroundColor: "rgb(239, 240, 240)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "150px",
        height: "200px",
        gap: "10px",
        // border: "1px solid black",
        borderRadius: "16px",
        boxShadow: `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "45%",
          //   border: "1px solid black",
        }}
      >
        <img
          src={image}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div
        className="footer"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "5px",
          width: "100%",
          height: "50%",
          //   border: "1px solid black",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Chip label={`R$ ${price}`} color="success" size="small" />
          <Chip label={discount} color="primary" size="small" />
        </div>
        <Chip
          label={`R$ ${real_price}`}
          color="warning"
          size="small"
          style={{
            textDecoration: "line-through",
          }}
        />
        <p
          style={{
            width: "100%",
            fontSize: "12px",

            margin: "0",
            padding: "0",
            overflowWrap: "break-word",
            wordWrap: "break-word" /* Suporte legado */,
          }}
        >
          <b
            style={{
              margin: "0",
              overflowWrap: "break-word",
              wordWrap: "break-word",
              padding: "0",
            }}
          >
            {name}
          </b>
        </p>
      </div>
    </div>
  );
};

export default CardProduct;
