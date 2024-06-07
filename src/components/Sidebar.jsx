import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

function Sidebar({ sidebarToggle }) {
  return (
    <StyledDrawer variant="persistent" anchor="left" open={!sidebarToggle}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Menu
        </Typography>
      </Toolbar>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/services">
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/albums">
          <ListItemText primary="Albums" />
        </ListItem>
        <ListItem button component={Link} to="/todos">
          <ListItemText primary="Todos" />
        </ListItem>
      </List>
    </StyledDrawer>
  );
}

export default Sidebar;
