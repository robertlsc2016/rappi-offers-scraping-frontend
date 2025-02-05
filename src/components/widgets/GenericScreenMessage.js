import HomeButton from "../actions-buttons/HomeButton";
import NextRouteButton from "../actions-buttons/NextRouteButton";

export const GenericScreenMessage = ({ message }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "8px",
          position: "fixed",
          bottom: "8px",
          //   paddingBottom: `${env(safe - area - inset - bottom)}`,
        }}
      >
        <HomeButton />
        <NextRouteButton />
      </div>
      {message}
    </div>
  );
};

export default GenericScreenMessage;
