import React, { useState } from 'react'
import { Box, Button, Fab, FormControl, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, Stack, TextField, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

export const Add = () => {
    const [open, setOpen] = useState(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {
            xs: '90%',
            sm: 400
        },
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
    };

    return (
        <>
            <Tooltip
                title='Create Post'
                arrow
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: 20
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
                sx={{ color: 'text.primary' }}
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
                    <FormControl sx={{ width: '100%' }}>
                        <FormLabel id="demo-col-radio-buttons-group-label" color='info'>Who can comment?</FormLabel>
                        <RadioGroup
                            col='true'
                            aria-labelledby="demo-col-radio-buttons-group-label"
                            name="col-radio-buttons-group"
                        >
                            <FormControlLabel value="Everybody" control={<Radio color='secondary' size='small' />} label="Everybody" />
                            <FormControlLabel value="My Friends" control={<Radio color='secondary' size='small' />} label="My Friends" />
                            <FormControlLabel value="Nobody" control={<Radio color='secondary' size='small' />} label="Nobody" />
                            <FormControlLabel
                                value="Custom"
                                disabled
                                control={<Radio color='secondary' size='small' />}
                                label="Custom (Premium)"
                            />
                        </RadioGroup>
                        <Stack mt={2} spacing={2} direction='row' justifyContent='flex-end'>
                            <Button variant='outlined' color='primary'>Create</Button>
                            <Button variant='contained' color='error' onClick={() => setOpen(false)}>Cancel</Button>
                        </Stack>
                    </FormControl>
                </Box>
            </Modal>
        </>
    )
}
