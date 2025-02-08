import React from "react";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import CardMarkets from "../CardMarkets";
import {
  S_InnerNextRouteButton,
  S_NextRouteButton,
} from "../../styles/NextRouteButton.styles";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
const EmblaCarouselMarkets = ({ slides, options, selection, link }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: "3",
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div
        style={{
          width: "100%",
          // border: "1px solid black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <section
          className="embla"
          style={{
            // boxShadow: `inset -10px 0 10px -5px rgba(0, 0, 0, 0.5)`,

            // border: "1px solid black",
            borderRadius: "0 16px 16px 0 ",

            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="embla__viewport"
            ref={emblaRef}
            style={{
              // position: 'relative',
              // border: "1px solid black",
              width: "100%",
              // overflow: "revert-layer",
            }}
          >
            <div
              className="embla__container"
              style={{
                display: "flex",
                flexDirection: "row",
                // gap: "8px",
                width: "100%",
                //   border: "1px solid black",
                // overflow: "hidden",
              }}
            >
              {slides.map((store) => (
                <div className="embla__slide" key={store.store_id}>
                  <CardMarkets
                    store_id={store.store_id}
                    img_path={store.store_img}
                    store_name={store.store_name}
                    key={store.store_id}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "100%",
            // border: "1px solid black",
            gap: "8px",
            // position: "absolute",
            // top: "40%",
            // right: "0px",
          }}
        >
          <S_NextRouteButton
            onClick={onPrevButtonClick}
            style={{
              opacity: "80%",
            }}
          >
            <S_InnerNextRouteButton>
              <ArrowBackOutlinedIcon fontSize="inherit" />
            </S_InnerNextRouteButton>
          </S_NextRouteButton>

          <S_NextRouteButton
            onClick={onNextButtonClick}
            style={{
              opacity: "80%",
            }}
          >
            <S_InnerNextRouteButton>
              <ArrowForwardOutlinedIcon fontSize="inherit" />
            </S_InnerNextRouteButton>
          </S_NextRouteButton>
        </div>
      </div>
    </>
  );
};

export default EmblaCarouselMarkets;
