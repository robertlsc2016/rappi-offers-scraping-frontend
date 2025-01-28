import { IconButton } from "@mui/material";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import reloadPage from "../../utils/reloadPage";

const ChangeLocation = () => {
  
  const clearLocation = () => {
    localStorage.removeItem("location");
    // reloadPage();
  };

  return (
    <div
      onClick={clearLocation}
      style={{
        cursor: "pointer",
      }}
    >
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
          background: "orange",
          boxShadow: ` rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`,
        }}
      >
        <LocationSearchingIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default ChangeLocation;
