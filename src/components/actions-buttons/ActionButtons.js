// import NextRouteButton from "./NextRouteButton";
// import ScrollToTopButton from "./ScrollToTopButton";
// import HomeButton from "./HomeButton";
// import { useEffect, useState } from "react";
// import CloseModalButton from "./CloseModal";

// export const ActionButtons = () => {
//   const userAgent = navigator.userAgent.includes("iPhone");
//   const [windowHeight, setWindowHeight] = useState(0);

//   useEffect(() => {
//     setWindowHeight(window.innerHeight);
//     const handleResize = () => {
//       setWindowHeight(window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const glassStyle = {
//     position: "fixed",

//     display: "flex",
//     gap: "8px",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: "5000",
//     top: { userAgent } ? windowHeight - 80 : windowHeight,

//     height: "95px",
//     width: "96vw",
//     margin: "0px",

//     border: "1px solid rgba(255, 255, 255, 0.3)", // Borda suave

//     background: "rgba(229, 220, 220, 0.73)", // Fundo translúcido
//     borderRadius: "20px", // Cantos arredondados
//     backdropFilter: "blur(10px)", // Efeito de desfoque
//     WebkitBackdropFilter: "blur(10px)", // Suporte para WebKit
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra
//     display: "flex",
//     justifyContent: "center",
//     height: '72px',
//     alignItems: "center",
//     fontSize: "1.2rem",
//     textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
//   };

//   return (
//     <div style={glassStyle}>
//       <HomeButton />
//       <ScrollToTopButton />
//       <NextRouteButton />
//       {/* <CloseModalButton /> */}
//     </div>
//   );
// };
