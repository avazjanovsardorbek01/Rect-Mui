import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import DataTable from "./components/DataTable";
import UsersTable from "./components/UsersTable";
import AlbumsTable from "./components/AlbumsTable";
import TodosList from "./components/TodosList";
import { Box, CssBaseline, Toolbar } from "@mui/material";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar
          setSidebarToggle={setSidebarToggle}
          sidebarToggle={sidebarToggle}
          onSearch={handleSearch}
        />
        <Sidebar sidebarToggle={sidebarToggle} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            transition: "margin 0.3s",
            marginLeft: sidebarToggle ? 0 : "240px",
            padding: 3,
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/services"
              element={<DataTable searchTerm={searchTerm} />}
            />
            <Route
              path="/users"
              element={<UsersTable searchTerm={searchTerm} />}
            />
            <Route
              path="/albums"
              element={<AlbumsTable searchTerm={searchTerm} />}
            />
            <Route path="/todos" element={<TodosList />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
