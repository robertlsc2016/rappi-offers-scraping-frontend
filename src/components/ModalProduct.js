import { Box, CircularProgress, Divider, Grid2, Modal } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import IconOffer from "./IconOffer";
import similarOnAmazon from "../utils/similarOnAmazon";
import CardProductAmazon from "./CardProductAmazon";
import AliceCarousel from "react-alice-carousel";

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

    const responsive = {
      0: { items: 4 },
      568: { items: 4 },
      1024: { items: 4 },
    };

    return (
      <Modal
        open={statusModal}
        onClose={(e) => {
          e.stopPropagation(); // Impede que cliques externos acionem eventos adicionais
          handleClose();
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // width: 400,
            bgcolor: "#EFF0F0",
            // border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Grid2
            spacing={2}
            container
            style={{
              // display: "flex",
              // flexDirection: "row",
              width: "70vw",
              height: "80vh",
              background: "white",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <Grid2
              size={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                border: "2px solid #e9e9e9",
                borderRadius: "16px",
                height: "100%",
                // width: "100%",
                padding: "32px",
              }}
            >
              <img
                src={`${banner_url}`}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid2>

            <Grid2 size={6}>
              <Box
                style={{
                  gap: "12px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h1
                  style={{
                    // border: "2px solid black",
                    fontSize: "2.5rem",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {name}
                </h1>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    // border: "2px solid black",
                    gap: "16px",
                  }}
                >
                  <p
                    style={{
                      // border: "2px solid black",
                      margin: 0,
                      fontSize: "1.6rem",
                      padding: 0,
                    }}
                  >
                    R$ {price}
                  </p>
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
                      {discount}
                    </p>
                  </Box>
                </Box>
                <Divider sx={{ opacity: 1, background: "black" }} />
                <Box
                  style={{
                    overflow: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    height: "100%",
                  }}
                >
                  <h2
                    style={{
                      margin: "0",
                      padding: "0",
                    }}
                  >
                    Similares na Amazon:
                  </h2>

                  {loadingProductsAmazon ? (
                    <>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          width: "100%",
                          height: "100%",
                          gap: "12px",
                          // border: "1px solid black",

                          // overflow: "auto",
                        }}
                      >
                        <AliceCarousel
                          responsive={responsive}
                          items={similarProductsAmazon.map(
                            ({ name, link, image, price }, index) => (
                              <>
                                <CardProductAmazon
                                  link={link}
                                  price={price}
                                  data-value={index + 1}
                                  className="item"
                                  name={name}
                                  responsive={responsive}
                                  image_url={image}
                                />
                              </>
                            )
                          )}
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
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Modal>
    );
  }
);

// ({ name, banner_url, price, open, setOpen }) => {

// };

export default ModalProduct;

// <div
//   style={{
//     display: "flex",
//     flexDirection: "row",
//     width: "70vw",
//     height: "80vh",
//     background: "white",
//     borderRadius: "16px",
//     padding: "24px",
//   }}
// >
//   <h2
//     style={{
//       margin: 0,
//       padding: 0,
//     }}
//   >
//     <Box
//       style={{
//         width: "50%",
//         height: "100%",
//       }}
//     >
//       <img
//         src={banner_url}
//         style={{
//           objectFit: "contain",
//           border: "1px solid",
//           width: "100%",
//           height: "100%",
//         }}
//       />
//     </Box>
//   </h2>
// </div>;
