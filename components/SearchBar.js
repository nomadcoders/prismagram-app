import React from "react";
import { TextInput } from "react-native";
import PropTypes from "prop-types";

const SearchBar = ({ onChange, value, onSubmit }) => (
  <TextInput value={value} placeholder={"Search"} />
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};
export default SearchBar;
