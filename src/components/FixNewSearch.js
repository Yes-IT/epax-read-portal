import React, {useEffect, useContext } from "react";
import useDebounce from "../utils/hooks/useDebounce";
import SearchContext from "../store/SearchContext";

export default function Search() {
  const {searchTerm, setSearchTerm } = useContext(SearchContext);
  const debounce = useDebounce();
  function handleInput(e) {
    const text = e.target.value;
    debounce(() =>setSearchTerm(text));

  }

  return (
    <>
      <div>
        <input
          type="text"
          onChange={handleInput}
          className="w-full border rounded shadow p-0 bg-black"
          placeholder=" Search"
        />
      </div>
    </>
  );
}
