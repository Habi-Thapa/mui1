import { Delete, DeleteOutline } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";
import Autocompletea from "./components/Autocompletea";
const BlueBotton = styled(Button)({
  backgroundColor: "black",
  color: "white",
  margin: 5,
  "&:hover": {
    backgroundColor: "gray",
  },
});

const App = () => {
  const [filterData, setFilterData] = useState({
    soldTo: "",
    soldToName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  const handleChangeSoldTo = (value) => {
    setFilterData({
      ...filterData,
      soldTo: value !== null ? value.id : "",
      soldToName: value !== null ? value.name : "",
    });
  };

  console.log(filterData);

  return (
    <>
      <Autocompletea
        // name="soldToName"
        onChangeTop={handleChangeSoldTo}
        // onchange={handleChange}
      />
    </>
  );
};

export default App;
