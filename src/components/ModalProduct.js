import { Box, CircularProgress, Divider, Grid2, Modal } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import IconOffer from "./IconOffer";
import similarOnAmazon from "../utils/similarOnAmazon";

import {
  S_GridDescriptionBox,
  S_GridDescriptionContainer,
  S_GridDescriptionrBox,
  S_GridImage,
  S_ModalContainer,
  S_ModalInner,
  S_ModalInnerBox1,
  S_SimilarProductsAmazonContainer,
  S_TitleProduct,
} from "../styles/ModalProducts.styles";
import EmblaCarousel from "./carousel/EmblaCarousel";

const ModalProduct = forwardRef(
  ({ name, banner_url, price, real_price, discount }, ref) => {
    const [statusModal, setStatusModal] = useState(false);
    const [similarProductsAmazon, setSimilarProductsAmazon] = useState([]);
    const [loadingProductsAmazon, setLoadingProductsAmazon] = useState(false);

    const [alreadyCalled, setAlreadyCalled] = useState(false);

    const getProductsSimilarAmazon = async () => {
      setAlreadyCalled(true);
      const getSimilarAmazon = await similarOnAmazon({
        product_name: name,
      }).finally(() => setLoadingProductsAmazon(true));
      setSimilarProductsAmazon(getSimilarAmazon);
    };

    const handleOpenMdal = async () => {
      if (!alreadyCalled) {
        getProductsSimilarAmazon();
      }

      setStatusModal(true);
    };

    const handleClose = () => {
      setStatusModal(false);
    };

    useImperativeHandle(ref, () => ({
      handleOpenMdal,
    }));

    return (
      <S_ModalContainer
        open={statusModal}
        onClose={(e) => {
          e.stopPropagation(); // Impede que cliques externos acionem eventos adicionais
          handleClose();
        }}
      >
        <S_ModalInner>
          <S_ModalInnerBox1 spacing={{ xs: 1, sm: 2 }} container>
            <S_GridImage size={{ xs: 12, sm: 6 }}>
              <img
                src={`${banner_url}`}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
              />
            </S_GridImage>

            <S_GridDescriptionContainer size={{ xs: 12, sm: 6 }}>
              <S_GridDescriptionBox>
                <S_TitleProduct>{name}</S_TitleProduct>
                <S_GridDescriptionrBox>
                  <p>R$ {price}</p>
                  <Box
                    style={{
                      gap: "8px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      // border: "2px solid black",
                    }}
                  >
                    <p
                      style={{
                        textDecoration: "line-through",
                        // border: "2px solid black",
                        margin: 0,
                        fontSize: "1rem",
                        padding: 0,
                      }}
                    >
                      R$ {real_price}
                    </p>

                    <IconOffer />
                    <p
                      style={{
                        margin: "0",
                        padding: "0",
                        fontWeight: "bold",
                      }}
                    >
                      {(discount * 100).toFixed(2)}%
                    </p>
                  </Box>
                </S_GridDescriptionrBox>
                <Divider sx={{ opacity: 1, background: "black" }} />
                <S_SimilarProductsAmazonContainer>
                  <h2>Similares na Amazon:</h2>

                  {loadingProductsAmazon ? (
                    <>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "row",
                          // flexWrap: "wrap",
                          width: "100%",
                          height: "100%",
                          // border: "1px solid black",
                        }}
                      >
                        <EmblaCarousel
                          slides={similarProductsAmazon}
                          selection="amazon"
                        />
                      </Box>
                    </>
                  ) : (
                    <>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          gap: "32px",
                          // border: "1px solid black",
                          width: "100%",
                          height: "100px",
                        }}
                      >
                        <p>Buscando...</p>
                        <CircularProgress size="30px" />
                      </div>
                    </>
                  )}
                </S_SimilarProductsAmazonContainer>
              </S_GridDescriptionBox>
            </S_GridDescriptionContainer>
          </S_ModalInnerBox1>
        </S_ModalInner>
      </S_ModalContainer>
    );
  }
);

export default ModalProduct;
