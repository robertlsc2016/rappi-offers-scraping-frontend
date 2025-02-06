import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef, useState } from "react";
import { initial, inMarket, search } from "../redux/statusViewSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  S_ContainerChips,
  S_ContainerSearchBar,
  S_SearchBarBox,
  S_SearchbarContainer,
} from "../styles/SearchBar.styles";
import { useTypewriter } from "react-simple-typewriter";
import { Chip } from "@mui/material";
import NextRouteButton from "./actions-buttons/NextRouteButton";
import HomeButton from "./actions-buttons/HomeButton";
import ScrollToTopButton from "./actions-buttons/ScrollToTopButton";
import { useLocation } from "react-router-dom";
import searchLocalStorage from "../services/LocalStorage/searchLocalStorage";

const SearchBar = ({ inputValue, stores_group, from }) => {
  // const stores = searchLocalStorage("stores");

  const [isHidden, setIsHidden] = useState("false");
  const [searchInput, setSearchInput] = useState("");
  const lastScrollY = useRef(0);

  const location = useLocation();

  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const statusView = useSelector((state) => state.statusView.status_view);

  // const [text] = useTypewriter({
  //   words: [
  //     "busque seu item aqui...",
  //     "capacete para cortar cabelo em casa...",
  //     "Chapéu de Banho para Gatos...",
  //     "Guarda-chuva invertido...",
  //     "Bacon em lata...",
  //     "não busque lojas aqui 😡",
  //   ],
  //   loop: 0,
  //   pauseFor: 800,
  //   deleteSpeed: 20,
  // });

  const handleInput = (e) => {
    if (e == "") {
      dispatch(initial());
    }

    if (e !== "" && statusView !== "IN_MARKET") {
      dispatch(search());
    }
    setSearchInput(e);
    inputValue(e);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsHidden("true");
      } else {
        setIsHidden("false");
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    inputValue("");
    setSearchInput("");
  }, [location.pathname]);

  return (
    <>
      <S_ContainerSearchBar
        $ishidden={isHidden}
        $from={from}
        className="search-bar"
      >
        {(statusView == "IN_MARKET" || statusView == "SEARCHING_VIEW") && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
            }}
          >
            <ScrollToTopButton />
            <HomeButton />
            {!(statusView == "SEARCHING_VIEW") && <NextRouteButton />}
          </div>
        )}
        <S_SearchbarContainer $ishidden={isHidden}>
          <S_SearchBarBox>
            <input
              value={searchInput}
              onChange={(e) => handleInput(e.target.value)}
              type="text"
              id="searchBar"
              placeholder={"busque seu item aqui..."}
              // placeholder={text.toLowerCase()}
              ref={inputRef}
            />
            <SearchIcon />
          </S_SearchBarBox>
          {statusView == "INITIAL_VIEW" && stores_group?.length > 0 && (
            <S_ContainerChips>
              {stores_group.map((group, index) => {
                return (
                  <Chip
                    key={`${group}-${index}`}
                    style={{
                      textTransform: "capitalize",
                      padding: "16px 8px",
                    }}
                    size="small"
                    color="info"
                    label={`${group}`}
                    href={`#${group}`}
                    component="a"
                  />
                );
              })}
            </S_ContainerChips>
          )}
        </S_SearchbarContainer>
      </S_ContainerSearchBar>
    </>
  );
};

export default SearchBar;
