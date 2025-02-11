import React, { useState,useContext } from 'react'
import { Modal,Box } from '@mui/material';
// import Box from '@mui/material';
const CustomModal = ({ open, onClose, children }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 8,
    borderRadius: 4,
    p: 3,
  };
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        // slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={style}>
        {/* <Fade in={open}> */}
          {children}
          </Box>
        {/* </Fade> */}
      </Modal>
    );
}

export default CustomModal