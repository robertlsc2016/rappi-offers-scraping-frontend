import { IconButton } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";
import { theme } from "../../styles/theme";

const HomeButton = () => {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate(`/`);
  };

  return (
    <div onClick={returnHome} style={{
      cursor: 'pointer'
    }}>
      <IconButton
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "12px",
          fontSize: "24px",
          width: "48px",
          height: "48px",
          color: "white",
          background: theme.colors.default_orange,
          boxShadow: ` rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`,
        }}
      >
        <HomeOutlinedIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default HomeButton;
