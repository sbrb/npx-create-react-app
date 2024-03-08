import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  const dashboard = {
    textAlign: "center",
    marginBottom: "2rem",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#626262",
    textTransform: "uppercase",
    textDecoration:"underline"
  };
  return (
    <div className="MainDash">
      <span style={dashboard}>Dashboard</span>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
