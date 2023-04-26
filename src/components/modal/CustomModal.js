import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from 'prop-types';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "#FFF",
  p: 3,
};

const CustomModal = ({ isOpen, onClick, title, children }) => {
  return (
    <Modal open={isOpen}>
      <Box sx={style}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography
            variant="h5"
            component="h5"
            sx={{
              fontWeight: "bold",
              color: "var(--primary-color)",
            }}
          >
            {title}
          </Typography>
          <IconButton sx={{ color: "var(--primary-color)" }} onClick={onClick}>
            <CloseIcon />
          </IconButton>
        </Stack>
        {children}
      </Box>
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default CustomModal;
