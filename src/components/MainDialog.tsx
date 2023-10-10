import React, {useState} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function MainDialog({open, setOpen}) {
  const [value, setValue] = React.useState(0);

  const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };

  return (
   <>
     <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
           
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project's Name"
            type="text"
            fullWidth
            variant="standard"
            autoComplete='off'
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{
              '&:Hover': {
                backgroundColor: 'yellowgreen',
              },
          }} onClick={handleClose}>Create</Button>
          <Button sx={{
             '&:Hover': {
              backgroundColor: 'yellowgreen',
            },
          }} onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
   </>
  )
}

export default MainDialog