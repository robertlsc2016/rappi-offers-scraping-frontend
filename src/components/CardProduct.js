import { Badge, Button, Chip, Slide, Snackbar } from "@mui/material";
import IconOffer from "./IconOffer";
import ModalProduct from "./ModalProduct";
import { useRef, useState } from "react";
import {
  S_BoxImage,
  S_Button,
  S_Buttons,
  S_ChipUnit,
  S_ContainerChips,
  S_ContainerProducts,
  S_Notify,
} from "../styles/CardProduct.styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Bounce, toast } from "react-toastify";
import { theme } from "../styles/theme";

const CardProduct = ({
  id,
  name = "Não definido",
  price = 0,

  discount = 0,
  real_price = 0,
  image_url = "",

  quantity = 0,
  unit_type = 0,
  product_id,
  pum,
  stock,

  removeProduct,
  navigation,
}) => {
  const modalRef = useRef();

  const chamarFuncaoDoFilho = () => {
    if (modalRef.current) {
      modalRef.current.handleOpenMdal();
    }
  };

  const handleLowePrice = async () => {
    await notifyLowerPrice();
    await removeProduct(product_id);
  };

  const goToApp = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const regex = /\(([^)]+)\)/;
    const matches = userAgent.match(regex);

    if (matches && matches[1]) {
      const SO = matches[1]
        .split(";")
        .map((param) => param.trim())[0]
        .toLowerCase();

      if (SO.length > 0) {
        if (/android/i.test(SO)) {
          window.location.href = navigation.deeplink;
        }
        if (/iphone|ipad|ipod/i.test(SO)) {
          window.location.href = navigation.fallback;
        }

        if (/linux|windows/i.test(SO)) {
          window.open(`https://www.rappi.com.br/produto/${id}`, "_blank");
        }
      }
    }
  };

  const notifyLowerPrice = async () =>
    toast.error(
      <S_Notify>
        <h3>Esperar Redução do Item</h3>
        <p>o item retornará caso o preço reduza</p>
      </S_Notify>,
      {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: true,

        theme: "dark",
        transition: Bounce,
      }
    );

  const notifyDeleteProduct = () =>
    toast.info(
      <S_Notify
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "flex-start",
          // background: "green",
          padding: "0",
        }}
      >
        <h3
          style={{
            margin: "0",
            padding: "0",
            color: "white",
          }}
        >
          Item Excluído
        </h3>
        <p>Você não verá mais esse item</p>
      </S_Notify>,
      {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: true,
        // closeOnClick: false,
        // pauseOnHover: true,
        // draggable: true,
        theme: "dark",
        transition: Bounce,
      }
    );

  return (
    <div
      key={id}
      style={{
        position: "relative",
      }}
    >
      <S_Buttons>
        <S_Button color="green" size="small" onClick={() => goToApp()}>
          <AddShoppingCartIcon fontSize="inherit" />
        </S_Button>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: "4px",
          }}
        >
          <S_Button
            color="orange"
            size="small"
            onClick={() => handleLowePrice()}
          >
            <TrendingDownIcon fontSize="inherit" />
          </S_Button>

          {/* <S_Button
            disabled
            color="disabled"
            size="small"
            onClick={() => notifyDeleteProduct()}
          >
            <DeleteOutlineIcon fontSize="inherit" />
          </S_Button> */}
        </div>
      </S_Buttons>

      <S_ContainerProducts key={id} onClick={() => chamarFuncaoDoFilho()}>
        <S_BoxImage>
          <img
            src={image_url || `https://placehold.co/300x300?text=Sem+Image`}
          />
        </S_BoxImage>

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
                    background: theme.colors.default_orange,
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
            <span>{name}</span>
            <S_ContainerChips>
              <S_ChipUnit color="warning" label={`${quantity} ${unit_type}`} />
              {stock > 0 && (
                <S_ChipUnit color="info" label={`stock: ${stock}`} />
              )}
              {pum && <S_ChipUnit color="info" label={`${pum}`} />}
            </S_ContainerChips>
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
