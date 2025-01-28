import { Badge, Button, Chip } from "@mui/material";
import IconOffer from "./IconOffer";
import ModalProduct from "./ModalProduct";
import { useRef } from "react";
import {
  S_BoxImage,
  S_ChipUnit,
  S_ContainerProducts,
} from "../styles/CardProduct.styles";
import DeleteIcon from "@mui/icons-material/Delete";

const CardProduct = ({
  id = "",
  name = "Não definido",
  price = 0,
  discount = 0,
  image_url = "",
  real_price = 0,
  quantity = 0,
  unit_type = 0,
  removeProduct,
}) => {
  const modalRef = useRef();

  const chamarFuncaoDoFilho = () => {
    if (modalRef.current) {
      modalRef.current.handleOpenMdal();
    }
  };

  const handleRemove = () => {
    removeProduct(id); // Passando o ID do produto
  };

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: "8px",
          width: "100%",
          opacity: "80%",
          zIndex: "1"
        }}
      >
        <Button
          style={{
            border: "1px solid",
            // padding: "6px",
            margin: "0px",
            fontSize: "16px",
            width: "80%",
          }}
          color="error"
          size="small"
          onClick={handleRemove}
        >
          <DeleteIcon fontSize="inherit" />
        </Button>
      </div>

      <S_ContainerProducts key={id} onClick={() => chamarFuncaoDoFilho()}>
        <S_BoxImage>
          <img src={`${image_url}`} />
        </S_BoxImage>

        <div
          className="footer"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            // gap: "8px",
            gap: "8px",
            width: "100%",
            height: "50%",
            // border: "1px solid black",
          }}
        >
          <div
            className="box-tags"
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
              gap: "2px",
              width: "100%",
            }}
          >
            <p
              style={{
                fontWeight: "600",
              }}
            >{`R$ ${price.toFixed(2)}`}</p>
            {discount > 0 && (
              <>
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
                  {(discount * 100).toFixed(1)}%
                  <IconOffer />
                </p>
                <Chip
                  style={{
                    textDecoration: "line-through",
                  }}
                  sx={{ height: "16px", fontSize: "12px" }}
                  label={`R$ ${real_price.toFixed(2)}`}
                  color="warning"
                />
              </>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",

              width: "100%",

              fontSize: "12px",
              lineHeight: "12px",
              height: "37px",

              overflow: "hidden",

              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {name}
            <S_ChipUnit color="warning" label={`${quantity} ${unit_type}`} />
          </div>
        </div>
        <ModalProduct
          name={name}
          banner_url={image_url}
          real_price={real_price}
          discount={discount}
          price={price}
          ref={modalRef}
        />
      </S_ContainerProducts>
    </div>
  );
};

export default CardProduct;
