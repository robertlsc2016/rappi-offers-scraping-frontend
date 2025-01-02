import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef, useState } from "react";
import { initial, search } from "../redux/statusViewSlice";
import { useDispatch, useSelector } from "react-redux";

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
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          width: widthSearchArea,
          height: "70%",
          borderRadius: "5000px",
          padding: "0  32px",
        }}
      >
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
      </div>
    </div>
  );
};

export default SearchBar;
