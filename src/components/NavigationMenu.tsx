import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import MainDialog from "./MainDialog";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { chengeUrl } from "../functions/fun";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    
  
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function NavigationMenu() {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };

      const handleClickOpen = () => {
        setOpen(true);
        <MainDialog open={open} setOpen={setOpen}/>
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <>
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
            justifyContent: "space-between",
            background: "pink",
          }}>
            <span >
              <Tab onClick={() => chengeUrl("Website")} label="Website" {...a11yProps(0)} />
              <Tab onClick={() => chengeUrl("Mobile App")} label="Mobile App" {...a11yProps(1)} />
              <Tab onClick={() => chengeUrl("Conference")} label="Conference" {...a11yProps(2)} />
            </span>
            <IconButton sx={{
              '&:active': {
                backgroundColor: '#1976d2',
              },
            }} onClick={handleClickOpen}> 
            <AddCircleOutlineIcon/>
            </IconButton>
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
      
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>

        </CustomTabPanel>
      </Box>
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

export default NavigationMenu