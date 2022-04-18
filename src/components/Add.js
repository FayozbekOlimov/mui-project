import React, { useState } from 'react'
import { Box, Fab, FormControl, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, TextField, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

export const Add = () => {
    const [open, setOpen] = useState(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {
            xs: '100%',
            sm: 400
        },
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
    };

    return (
        <>
            <Tooltip
                title='Add'
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    right: 10
                }}
                onClick={() => setOpen(true)}
            >
                <Fab size='medium' color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal
                keepMounted
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={modalStyle} component='form' noValidate autoComplete='off'>
                    <TextField
                        id="standard-basic"
                        label="Title"
                        variant="standard"
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        placeholder='Tell the story ..'
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <FormControl>
                        <FormLabel id="demo-col-radio-buttons-group-label" color='info'>Who can comment?</FormLabel>
                        <RadioGroup
                            col
                            aria-labelledby="demo-col-radio-buttons-group-label"
                            name="col-radio-buttons-group"
                        >
                            <FormControlLabel value="Everybody" control={<Radio color='error' size='small' />} label="Everybody" />
                            <FormControlLabel value="My Friends" control={<Radio color='error' size='small' />} label="My Friends" />
                            <FormControlLabel value="Nobody" control={<Radio color='error' size='small' />} label="Nobody" />
                            <FormControlLabel
                                value="Custom"
                                disabled
                                control={<Radio color='error' size='small' />}
                                label="Custom (Premium)"
                            />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Modal>
        </>
    )
}
