import React, { useRef, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAppDispatch } from "../app/hooks";
import { selectProject } from "../app/projectSlice";


type Props = {
  open:boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


function MainDialog(props:Props) {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>()
  const { open, setOpen } = props
  // const [value, setValue] = React.useState(0);

  // const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  const handleCrateClose = () => {
    inputRef.current ? dispatch(selectProject(inputRef.current.value)) : null
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //     setValue(newValue);
  //   };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            inputRef={inputRef}
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
          }} onClick={handleCrateClose}>Create</Button>
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