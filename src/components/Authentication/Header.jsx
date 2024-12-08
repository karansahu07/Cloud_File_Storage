import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, InputBase, Box, Button } from "@mui/material";
import { Search, NotificationsNone, MoreVert, Add } from "@mui/icons-material";

const Header = ({ sidebarOpen }) => {
  return (
    <AppBar
      position="static"
      color="none"
      elevation={0}
      sx={{ pl: sidebarOpen ? 30 : 2, pr: 2 }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Box component="form" sx={{ ml: 1, flex: 1 }}>
            <InputBase
              placeholder="Search..."
              startAdornment={<Search />}
              sx={{
                backgroundColor: "background.paper",
                border: "1px solid #ddd",
                borderRadius: 2,
                px: 3,
                py: "3px",
                flex: 1,
                width:"450px"
              }}
            />
          </Box>
        </Box>
        <IconButton
          color="inherit"
          sx={{
            width: 40,
            height: 40,
            borderRadius: 1,
            border:"1px solid #ddd"
          }}
        >
          <NotificationsNone />
        </IconButton>
          <Button 
          startIcon={<Add/>}
          sx={{bgcolor:"black", textTransform:'none', color:"white", ml:2}}
          >Invite Member</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
