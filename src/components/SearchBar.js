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
import { Chip } from "@mui/material";
import NextRouteButton from "./actions-buttons/NextRouteButton";
import HomeButton from "./actions-buttons/HomeButton";
import ScrollToTopButton from "./actions-buttons/ScrollToTopButton";
import {  useParams } from "react-router-dom";

const SearchBar = ({ inputValue, stores_group, from, empty = false }) => {
  const [isHidden, setIsHidden] = useState("false");
  const [searchInput, setSearchInput] = useState("");
  const lastScrollY = useRef(0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const { store_id } = useParams();

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
    if (e !== "" && statusView == "INITIAL_VIEW") {
      dispatch(search());
    }

    if (e == "" && statusView == "SEARCHING_VIEW") {
      dispatch(initial());
    }

    if (e !== "" && statusView == "IN_MARKET") {
      dispatch(inMarket());
    }

    if (e == "" && statusView == "IN_MARKET") {
      dispatch(inMarket());
    }

    setSearchInput(e);
    inputValue(e);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 200) {
        setIsHidden("true");
      } else {
        setIsHidden("false");
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFocus = () => {
    setIsKeyboardOpen(true);
  };

  const handleBlur = () => {
    setIsKeyboardOpen(false);
  };

  useEffect(() => {
    if (statusView == "INITIAL_VIEW") {
      setSearchInput("");
    }
  }, [statusView]);

  useEffect(() => {
    setSearchInput("");
  }, [store_id]);

  return (
    <S_ContainerSearchBar
      $keyboardIsOpen={isKeyboardOpen}
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
      {(statusView == "IN_MARKET" ||
        statusView == "INITIAL_VIEW" ||
        statusView == "SEARCHING_VIEW") &&
        !empty && (
          <S_SearchbarContainer $ishidden={isHidden}>
            <S_SearchBarBox>
              <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={searchInput}
                onChange={(e) => handleInput(e.target.value)}
                type="text"
                id="searchBar"
                placeholder={"busque seu item aqui..."}
                // placeholder={text.toLowerCase()}
                ref={inputRef}
              />
              <SearchIcon
                style={{
                  color: "#0288D1",
                }}
              />
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
        )}
    </S_ContainerSearchBar>
  );
};

export default SearchBar;
