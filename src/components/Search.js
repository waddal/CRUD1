import React, { useState } from "react";
import { connect } from "react-redux";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { getContacts, getContactById } from "../actions/index";

const Search = ({ getContacts, getContactById }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchInput) {
      getContacts();
      console.log("getContact");
      return;
    }
    // getContactById(searchInput);
    console.log("getContactById");
  };

  return (
    <form onSubmit={handleSearch}>
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <label>
        <input
          type={"text"}
          onChange={handleChange}
          value={searchInput}
          placeholder={"Contact ID"}
        />
      </label>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getContacts, getContactById })(
  Search
);
