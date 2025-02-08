// import React, { useEffect, useState } from "react";
// import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
// import useEmblaCarousel from "embla-carousel-react";
// import CardMarkets from "../CardMarkets";
// import {
//   S_InnerNextRouteButton,
//   S_NextRouteButton,
// } from "../../styles/NextRouteButton.styles";
// import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
// import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
// import CardProduct from "../CardProduct";
// import handleRemoveProduct from "../../utils/handleProductsNotInteressed";
// import handleDeleteProduct from "../../utils/handleExcludedProducts";

// const EmblaCarouselProductsInMarket = ({
//   store_id,
//   products: initialProducts = [],
//   initial_rannge,
//   final_range,
//   slides,
//   options,
//   selection,
//   link,
// }) => {
//   const [filteredProducts, setFilteredProducts] = useState(initialProducts);

//   useEffect(() => {
//     setFilteredProducts(initialProducts);
//   }, [initialProducts]);

//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     align: "start",
//     slidesToScroll: "3",
//   });

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi);

//   return (
//     <>
//       <div
//         style={{
//           width: "100%",
//           // border: "1px solid black",

//           display: "flex",
//           justifyContent: "flex-start",
//           alignItems: "flex-start",
//           flexDirection: "column",

//           gap: "16px",
//         }}
//       >
//         <div sty>ofertas de {initial_rannge}%</div>

//         <section
//           className="embla"
//           style={{
//             width: "100%",

//             display: "flex",
//             justifyContent: "flex-start",
//             alignItems: "flex-start",
//             // boxShadow: `inset -10px 0 10px -5px rgba(0, 0, 0, 0.5)`,
//             // gap: '4px',
//             // border: "1px solid black",
//             // borderRadius: "0 16px 16px 0 ",

//             // position: "relative",
//             // overflow: "hidden",
//           }}
//         >
//           <div
//             className="embla__viewport"
//             ref={emblaRef}
//             style={{
//               width: "100%",

//               // position: 'relative',
//               // border: "1px solid black",
//               // overflow: "revert-layer",
//             }}
//           >
//             <div
//               className="embla__container"
//               style={{
//                 width: "100%",
//                 border: "1px solid black",
//               }}
//             >
//               {filteredProducts.length > 0 &&
//                 filteredProducts.map(
//                   ({
//                     id,
//                     product_id,
//                     name,
//                     price,
//                     discount,
//                     real_price,
//                     image_url,
//                     quantity,
//                     unit_type,
//                     stock,
//                     pum,
//                     navigation,
//                   }) => (
//                     <CardProduct
//                       key={id}
//                       product_id={product_id}
//                       id={id}
//                       unit_type={unit_type}
//                       quantity={quantity}
//                       name={name}
//                       price={price}
//                       discount={discount}
//                       image_url={image_url}
//                       real_price={real_price}
//                       removeProduct={(product_id) =>
//                         handleRemoveProduct(
//                           filteredProducts,
//                           setFilteredProducts,
//                           product_id
//                         )
//                       }
//                       deleteProduct={(product_id) =>
//                         handleDeleteProduct(
//                           filteredProducts,
//                           setFilteredProducts,
//                           product_id
//                         )
//                       }
//                       stock={stock}
//                       pum={pum}
//                       navigation={navigation}
//                     />
//                   )
//                 )}
//             </div>
//           </div>
//         </section>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "flex-end",
//             width: "100%",
//             // border: "1px solid black",
//             gap: "8px",
//             // position: "absolute",
//             // top: "40%",
//             // right: "0px",
//           }}
//         >
//           <S_NextRouteButton
//             onClick={onPrevButtonClick}
//             style={{
//               opacity: "80%",
//             }}
//           >
//             <S_InnerNextRouteButton>
//               <ArrowBackOutlinedIcon fontSize="inherit" />
//             </S_InnerNextRouteButton>
//           </S_NextRouteButton>

//           <S_NextRouteButton
//             onClick={onNextButtonClick}
//             style={{
//               opacity: "80%",
//             }}
//           >
//             <S_InnerNextRouteButton>
//               <ArrowForwardOutlinedIcon fontSize="inherit" />
//             </S_InnerNextRouteButton>
//           </S_NextRouteButton>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmblaCarouselProductsInMarket;
