import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import {
  Folder,
  InsertDriveFile,
  Star,
  DeleteOutline,
  Backup,
  CreateNewFolder,
  Add,
  MoreVert,
} from "@mui/icons-material";

const ContentArea = ({ sidebarOpen }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  const folderItems = [
    { name: "Design", icon: <Folder /> },
    { name: "Documents", icon: <Folder /> },
    { name: "Favorites", icon: <Folder /> },
    { name: "Trash", icon: <Folder /> },
    { name: "Marketing", icon: <Folder /> },
    { name: "Presentations", icon: <Folder /> },
    { name: "Photos", icon: <Folder /> },
    { name: "Videos", icon: <Folder /> },
    { name: "Audio", icon: <Folder /> },
    { name: "Archives", icon: <Folder /> },
  ];

  return (
    <Box
      sx={{
        p: 3,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        marginLeft: sidebarOpen ? "240px" : "0",
        transition: "margin-left 0.3s ease",
        overflow: "auto",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Typography variant="h5" gutterBottom>
            Welcome back, User.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Welcome back! Let's continue your activity on the dashboard.
          </Typography>
        </Box>
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Button
            sx={{ color: "black", borderColor: "#ddd" }}
            variant="outlined"
            startIcon={<Add />}
            size="small"
          >
            Create
          </Button>
          <Button
            sx={{ color: "black", borderColor: "#ddd" }}
            variant="outlined"
            startIcon={<Backup />}
            size="small"
          >
            Upload or drop
          </Button>
          <Button
            sx={{ color: "black", borderColor: "#ddd" }}
            variant="outlined"
            startIcon={<CreateNewFolder />}
            size="small"
          >
            Create folder
          </Button>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={2}>
        {folderItems.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card elevation={0}
              sx={{
                border:"1px solid #ddd",
                backgroundColor:
                  selectedIndex === index
                    ? "rgba(0, 0, 0, 0.08)"
                    : "background.paper",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
                borderRadius: "4px"
              }}
              onClick={() => handleItemClick(index)}
            >
              <CardContent sx={{ p: 1, "&:last-child": { p: 1 } }}>
                {" "}
                {/* Reduce padding */}
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    {" "}
                    {/* Reduce spacing */}
                    {item.icon}
                    <Typography
                      variant="subtitle2" // Use smaller typography variant
                      sx={{
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                  <IconButton size="small">
                    {" "}
                    {/* Smaller IconButton */}
                    <MoreVert fontSize="small" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContentArea;
