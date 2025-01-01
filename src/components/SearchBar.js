import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useRef, useState } from "react";

const SearchBar = ({ inputValue }) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInput = (e) => {
    setSearchInput(e);
    inputValue(e);
  };

  const inputRef = useRef(null);
  return (
    <div
      className="search-bar"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "16px",
        backgroundColor: "#e9e9e9",
        height: "72px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          width: "40%",
          height: "70%",
          borderRadius: "5000px",
          padding: "0  16px",
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
