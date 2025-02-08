import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import {
  SInitialApresentation,
  SSubTitle,
  STitle,
} from "../../styles/InitialApresentation.styles";

const InitialApresentation = () => {
  const [visible, setVisible] = useState(true);
  const [written, setWritten] = useState(false);

  const [text] = useTypewriter({
    words: ["um filtro de ofertas do Rappi"],
    loop: 1,
    cursor: false,
    onLoopDone: () => {
      setWritten(true);

      setTimeout(() => {
        setVisible(false);
        document.body.style.overflowY = "auto";
      }, 800);
    },
    typeSpeed: 10,
  });

  useEffect(() => {
    document.body.style.overflowY = "hidden";
  }, []);

  return (
    visible && (
      // (!window.performance || performance.navigation.type === 1) && (
      // process.env.NODE_ENV === "production" && (
      <SInitialApresentation>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "auto",
            width: "100%",
            // border: "1px solid black",
            // fontSize: '164px'
          }}
        >
          <div>
            <STitle>
              <span
                style={{
                  color: "#FF441F",
                }}
              >
                Rapp
              </span>
              <span style={{ color: "#0288D1" }}>eek</span>
            </STitle>
            <SSubTitle>{text}</SSubTitle>
          </div>
        </div>
      </SInitialApresentation>
    )
  );
  // );
};

export default InitialApresentation;
