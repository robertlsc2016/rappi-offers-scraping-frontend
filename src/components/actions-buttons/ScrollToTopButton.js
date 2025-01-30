import { IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { S_ScrollToTopButton } from "../../styles/ScrollToTopButton.styles";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <S_ScrollToTopButton onClick={scrollToTop}>
          <ArrowUpwardOutlinedIcon fontSize="inherit" />
        </S_ScrollToTopButton>
      )}
    </>
  );
};

export default ScrollToTopButton;
