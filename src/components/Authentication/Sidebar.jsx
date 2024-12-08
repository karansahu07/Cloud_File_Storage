import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Window,
  Settings,
  Folder,
  CloudUpload,
  DeleteOutline,
  AccountCircle,
  ArrowForwardIos,
  Photo,
  Star,
  FileOpen,
  Delete,
} from "@mui/icons-material";

const NavItem = ({ title, icon, index, selected, handleListItemClick }) => {
    return (
      <ListItem>
        <ListItemButton
          selected={selected}
          onClick={() => handleListItemClick(index)}
          sx={{
            borderRadius: "8px",
            "&.Mui-selected": {
              backgroundColor: "rgba(23, 10, 10, 0.86)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(23, 10, 10, 0.86)", // Prevent hover effect from changing color
              },
            },
            "&:hover": {
              backgroundColor: selected
                ? "rgba(23, 10, 10, 0.86)" // Match the selected state to avoid clash
                : "rgba(0, 0, 0, 0.08)", // Default hover for unselected items
            },
          }}
        >
          <ListItemIcon
            sx={{ color: selected ? "white" : "inherit" }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText
            primary={title}
            sx={{ color: selected ? "white" : "inherit" }}
          />
        </ListItemButton>
      </ListItem>
    );
};

const FolderItem = ({name, selected, handleListItemClick, index})=>{
    return (
        <ListItem>
        <ListItemButton
          selected={selected}
          onClick={() => handleListItemClick(index)}
          sx={{
            borderRadius: "8px",
            "&.Mui-selected": {
              backgroundColor: "rgba(23, 10, 10, 0.86)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(23, 10, 10, 0.86)", // Prevent hover effect from changing color
              },
            },
            "&:hover": {
              backgroundColor: selected
                ? "rgba(23, 10, 10, 0.86)" // Match the selected state to avoid clash
                : "rgba(0, 0, 0, 0.08)", // Default hover for unselected items
            },
          }}
        >
          <ListItemIcon
            sx={{ color:"#ffb300"}}
          >
            <Folder />
          </ListItemIcon>
          <ListItemText
            primary={name}
            sx={{ color: selected ? "white" : "inherit" }}
          />
        </ListItemButton>
      </ListItem>
    )
}
  
  const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    const handleListItemClick = (index) => {
      setSelectedIndex(index);
    };
  
    const navArr = [
      { title: "All Files", icon: <Window /> },
      { title: "Photos", icon: <Photo /> },
      { title: "Favorite", icon: <Star /> },
      { title: "Shared Files", icon: <FileOpen /> },
      { title: "Delete File", icon: <Delete /> },
      { title: "Settings", icon: <Settings /> },
    ];

    const folderArr = ["Landing Page","Mobile","Dashboard","Footer"]
  
    return (
      <Drawer variant="permanent" anchor="left">
        <Box sx={{ width: 240, bgcolor: "background.paper" }}>
          {/* Brand */}
          <Box
            sx={{
              marginInline: 2,
              p: 1,
              display: "flex",
              alignItems: "center",
              gap: 4,
              mb: 1,
            }}
          >
            <Box sx={{ height: "30px", width: "30px", bgcolor: "red" }} />
            <Typography variant="h6">Brand</Typography>
          </Box>
  
          {/* Profile */}
          <Box
            sx={{
              marginInline: 2,
              p: 1,
              borderTop: "1px solid #ddd",
              borderBottom: "1px solid #ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box display={"flex"} gap={2}>
              <AccountCircle fontSize="large" />
              <Box ml={2}>
                <Typography variant="body2">John Doe</Typography>
                <Typography variant="body2" color="text.secondary">
                  john@exa...
                </Typography>
              </Box>
            </Box>
            <ArrowForwardIos />
          </Box>
  
          <List dense>
            {navArr.map(({ title, icon }, index) => (
              <NavItem
                key={index}
                selected={index === selectedIndex}
                title={title}
                icon={icon}
                index={index}
                handleListItemClick={handleListItemClick}
              />
            ))}
          </List>

          <Box sx={{
            mb:2,
            p:1,
            borderTop:"1px solid #ddd"
          }}>
            <Typography variant="subtitle" sx={{ml:4}}>Folders</Typography>
            <List dense>
                {folderArr.map((name,index)=><FolderItem handleListItemClick={()=>{}} name={name} index={index} selected={false} />)}
            </List>
          </Box>
        </Box>
      </Drawer>
    );
  };
  
  export default Sidebar;
  
