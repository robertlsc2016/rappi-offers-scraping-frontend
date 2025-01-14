import { IconButton } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate(`/`);
  };

  return (
    <div onClick={returnHome}>
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
          background: "orange",
          boxShadow: ` rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`,
        }}
      >
        <HomeOutlinedIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default HomeButton;
