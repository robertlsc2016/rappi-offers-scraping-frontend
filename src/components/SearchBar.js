import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef, useState } from "react";
import { initial, search } from "../redux/statusViewSlice";
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

const SearchBar = ({ inputValue, stores_group }) => {
  const [text] = useTypewriter({
    words: [
      "busque seu item aqui...",
      "capacete para cortar cabelo em casa...",
      "Chapéu de Banho para Gatos...",
      "Guarda-chuva invertido...",
      "Bacon em lata...",
      "não busque lojas aqui 😡",
    ],
    loop: 0,
    pauseFor: 800,
    deleteSpeed: 20,
  });

  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [searchInput, setSearchInput] = useState("");
  const statusView = useSelector((state) => state.statusView.status_view);

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

  return (
    <S_ContainerSearchBar className="search-bar">
      {/* <S_Header> */}
      {statusView == "IN_MARKET" && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
          }}
        >
          <ScrollToTopButton />
          <HomeButton />
          <NextRouteButton />
        </div>
      )}
      <S_SearchbarContainer>
        {/* <SearchBar inputValue={handleInputChange} widthSearchArea="100%" /> */}
        {/* {statusView == "INITIAL_VIEW" && chipsStoreGroups.length > 0 && ( */}
        <S_SearchBarBox>
          <input
            value={searchInput}
            onChange={(e) => handleInput(e.target.value)}
            type="text"
            id="searchBar"
            placeholder={text.toLocaleLowerCase()}
            ref={inputRef}
          />
          <SearchIcon />
        </S_SearchBarBox>
        {statusView == "INITIAL_VIEW" && stores_group && (
          <S_ContainerChips>
            {stores_group.map((group) => {
              return (
                <Chip
                  key={group}
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
      {/* </S_Header> */}
    </S_ContainerSearchBar>
  );
};

export default SearchBar;

{
  /* <S_SearchBarBox>
  <input
    value={searchInput}
    onChange={(e) => handleInput(e.target.value)}
    type="text"
    id="searchBar"
    placeholder={text.toLocaleLowerCase()}
    ref={inputRef}
  />
  <SearchIcon />
</S_SearchBarBox>; */
}
