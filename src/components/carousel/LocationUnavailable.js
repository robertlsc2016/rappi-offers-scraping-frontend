import ChangeLocation from "../actions-buttons/ChangeLocation";

const LocationUnavailable = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        // overflow: 'hidden',
        height: "100%",
        width: "100%",
        // background: "red",
        // border: '1px solid black',

        gap: "8px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          fontSize: "32px",
        }}
      >
        Não existem lojas disponíveis na sua localidade :(
      </p>
      <p
        style={{
          fontSize: "12px",
          color: "rgb(141, 137, 137)",
        }}
      >
        moras em Xique-Xique Bahia?
      </p>
      <iframe
        width="auto"
        height="auto"
        src="https://www.youtube.com/embed/0QswgI6RBqA?autoplay=1&mute=0?si=qJgHOqdu49oR-r4f"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        // allowFullScreen
      ></iframe>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Mudar Localização</p>
        <ChangeLocation />
      </div>
    </div>
  );
};

export default LocationUnavailable;
