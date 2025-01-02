import { Box, Chip } from "@mui/material";
import IconOffer from "./IconOffer";
import ModalProduct from "./ModalProduct";
import { useRef } from "react";

const CardProduct = ({
  name = "Não definido",
  price = 0,
  discount = 0,
  image = "",
  real_price = 0,
  quantity = 0,
  unit_type = 0,
}) => {
  const modalRef = useRef();

  const chamarFuncaoDoFilho = () => {
    if (modalRef.current) {
      modalRef.current.handleOpenMdal(); // Chama a função do filho
    }
  };

  return (
    <div
      onClick={() => chamarFuncaoDoFilho()}
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
        height: "220px",
        gap: "16px",
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
          // border: "1px solid black",
        }}
      >
        <img
          src={`${image}`}
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
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "8px",
          width: "100%",
          height: "50%",
          //   border: "1px solid black",
        }}
      >
        <div
          style={{
            // border: "1px solid black",
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Chip
            label={`R$ ${price}`}
            color="success"
            // size="small"
            sx={{ height: "16px" }}
          />
          <p
            style={{
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              fontSize: "12px",
              gap: "1px",
              margin: "0",
              padding: "0",
            }}
          >
            {discount}
            <IconOffer />
          </p>
        </div>

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            // border: "1px solid",
          }}
        >
          <Chip
            style={{
              textDecoration: "line-through",
            }}
            sx={{ height: "16px" }}
            label={`R$ ${real_price}`}
            color="warning"
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
            <p>
              {quantity}
              {unit_type}
            </p>
          </p>
        </Box>
      </div>
      <ModalProduct
        name={name}
        banner_url={image}
        real_price={real_price}
        discount={discount}
        price={price}
        ref={modalRef}
      />
    </div>
  );
};

export default CardProduct;
