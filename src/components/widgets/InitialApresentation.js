import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";

const InitialApresentation = () => {
  const [visible, setVisible] = useState(true);
  const [written, setWritten] = useState(false);

  const [text] = useTypewriter({
    words: ["Filtro de ofertas do"],
    loop: 1,
    cursor: true,
    onLoopDone: () => {
      setWritten(true);

      setTimeout(() => {
        setVisible(false);
        document.body.style.overflowY = "auto";
      }, 800);
    },
    typeSpeed: 30,
  });

  useEffect(() => {
    document.body.style.overflowY = "hidden";
  }, []);

  return (
    visible &&
    (!window.performance || performance.navigation.type === 1) && (
      // process.env.NODE_ENV === "production" && (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          // border: "1px solid",
          background: "white",
          color: "rgb(0, 0, 0)",
          position: "fixed",

          zIndex: "1000",
          overflow: "hidden",

          flexDirection: "column",

          width: "100vw",
          height: "100%",
          padding: "32px",
          // border: "1px solid",
          touchAction: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            height: "auto",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontWeight: "lighter",
              height: "auto",
              textAlign: "start",
              fontSize: "84px",
              padding: "0px",
            }}
          >
            {text}{" "}
            <span
              style={{
                fontWeight: "bold",
                fontSize: "100px",
                color: "rgb(255, 68, 31)",
              }}
            >
              Rappi
            </span>
          </h1>
          <div
            style={{
              marginTop: "16px",
            }}
          >
            {written && <LinearProgress />}
          </div>
        </div>
      </div>
    )
  );
};

export default InitialApresentation;
