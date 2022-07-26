import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { getContactById } from "../actions/index";

const Search = ({ getContactById }) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async (e) => {
    await getContactById(searchInput);
    e.preventDefault();
    navigate(`/contacts/${searchInput}`);
    setSearchInput("");
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
          placeholder={"Search by ID..."}
        />
      </label>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    contact: state.contact,
  };
};

export default connect(mapStateToProps, { getContactById })(Search);
