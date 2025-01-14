import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { IconButton } from "@mui/material";
import { useRef } from "react";
import ModalProduct from "../ModalProduct";

const CloseModalButton = () => {
  const modalRef = useRef();

  const chamarFuncaoDoFilho = () => {
    if (modalRef.current) {
      modalRef.current.handleClose(); // Chama a função do filho
    }
  };

  return (
    <div onClick={() => chamarFuncaoDoFilho()}>
      <IconButton
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "12px",
          fontSize: "32px",
          width: "64px",
          height: "64px",
          color: "white",
          background: "red",
          boxShadow: ` rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`,
        }}
      >
        <CloseOutlinedIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default CloseModalButton;
