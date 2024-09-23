import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@material-ui/core";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Figma</MenuItem>
        <MenuItem onClick={handleClose}>Certifications</MenuItem>
        <MenuItem onClick={handleClose}>Live Projects</MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;