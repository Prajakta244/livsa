import React, { useState,useContext } from 'react'
import { Modal,Box,Backdrop } from '@mui/material';
// import Box from '@mui/material';
const CustomModal = ({ open, onClose, children }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
        // BackdropComponent={Backdrop}
        //     BackdropProps={{
        //         style: { backgroundColor: "white" }, // White backdrop
        //     }}
        // slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            // style: { backgroundColor: "white" }
          },
        }}
      >
        <Box sx={style} className='w-[400px] md:w-[600px]'>
        {/* <Fade in={open}> */}
          {children}
          </Box>
        {/* </Fade> */}
      </Modal>
    );
}

export default CustomModal