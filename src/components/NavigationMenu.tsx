import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import MainDialog from "./MainDialog";
import { chengeUrl } from "../functions/fun";
import Project from './Project';
import Foo from './Foo';
import uniqid from 'uniqid';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectMessage } from "../app/messageSlice";




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
          {children}
        </Box>
        // <>
        //   <Project str={"moshe"}/>
        // </>
      )}
    </div>
  );
}

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

function NavigationMenu() {
  const message = useAppSelector((state) => state.message.value);
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.project.value);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (project: string) => {
    navigate(`/NavigationMenu/${project}`)
    dispatch(selectMessage(`${project}`))

  }

  const handleClickOpen = () => {
    setOpen(true);
    <MainDialog open={open} setOpen={setOpen} />


  };


  return (
    <>
      <span style={{ display: "flex", backgroundColor: "white" }}>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} centered sx={{
            justifyContent: "space-between",
            '& .MuiTabs-flexContainer': {
              justifyContent: 'flex-start'
            }
          }}>
            {projects.map((project) => {
              return (
                <Tab key={uniqid()} onClick={() => handleClick(project)} label={project} />
                )
            })}
          </Tabs>
          {/* <CustomTabPanel value={value} index={1}>
            <Project str="tab 2 content" />
          </CustomTabPanel> */}
        </Box>
        <IconButton sx={{
          '&:active': {
            backgroundColor: '#1976d2',
          },
        }} onClick={handleClickOpen}>
          <AddCircleOutlineIcon />
        </IconButton>
      </span>
      {/* <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
          justifyContent: "space-between",
          background: "pink",
        }}> */}
      <MainDialog open={open} setOpen={setOpen} />
      <h1 style={{ display: 'flex', justifyContent: 'space-evenly'}}>{message}</h1>
      <Outlet />
    </>
  )
}

export default NavigationMenu