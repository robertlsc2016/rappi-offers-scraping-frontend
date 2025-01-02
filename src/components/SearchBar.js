import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef, useState } from "react";
import { initial, search } from "../redux/statusViewSlice";
import { useDispatch, useSelector } from "react-redux";
import { S_SearchBarBox } from "../styles/SearchBar.styles";

const SearchBar = ({ inputValue, widthSearchArea }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [searchInput, setSearchInput] = useState("");
  const statusView = useSelector((state) => state.statusView.status_view);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
    <div
      className="search-bar"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "16px",
        // backgroundColor: "#e9e9e9",
        height: "72px",
      }}
    >
      <S_SearchBarBox>
        <input
          style={{
            fontSize: "24px",
            width: "100%",
            height: "100%",
          }}
          value={searchInput}
          // onChange={(e) => setSearchInput(e.target.value)}
          onChange={(e) => handleInput(e.target.value)}
          type="text"
          id="searchBar"
          placeholder="busque um item..."
          ref={inputRef}
        />
        <SearchIcon />
      </S_SearchBarBox>
    </div>
  );
};

export default SearchBar;
