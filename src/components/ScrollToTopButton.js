import { IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Verifica a posição do scroll
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Rola a página para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Adiciona o evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpa o evento ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          style={{
            zIndex: "5000",
            position: "fixed",
            top: "78vh",
            right: "5vw",
          }}
        >
          <IconButton
            onClick={scrollToTop}
            style={{
              width: "64px",
              height: "64px",
              // border: '1px solid black',
              color: "white",
              background: "#0288D1",
              boxShadow: ` rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`,
            }}
          >
            <ArrowUpwardIcon fontSize="inherit" />
          </IconButton>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
