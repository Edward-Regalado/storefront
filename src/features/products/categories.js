import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productSlice } from './productSlice';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { categoryTabs } from './data';

const styles = {
  box: {
    borderColor: 'divider', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: '20px', 
    marginBottom: '20px',
    // border: '2px solid red'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // border: '2px solid green',
  },
}

function Categories() {

    const dispatch = useDispatch();
    const [ activeTab, setActiveTab] = useState('all');

    const handleSelection = (event, value) => {
      dispatch(productSlice.actions.selectCategory(value));
      setActiveTab(value);
        console.log('value: ', value);
        console.log('activeTab: ', activeTab);
    }
    return (
    <Box sx={styles.box}>
      <Box sx={styles.wrapper}>
        <Typography variant='h6'>Browse our Categories</Typography>
         <Tabs 
          textColor='inherit' 
          TabIndicatorProps={{style: {backgroundColor: '#76e461'}}} 
          sx={{
            // '& button' : {color: 'red'} 
            // '& button:active': {color: 'red'}, 
            // '& button:hover' : {color: 'red'}
            // '& button:focus' : {color: 'red'}
          }} 
          value={activeTab} 
          onChange={handleSelection}
          >
           {categoryTabs.map((info, index) => (        
             <Tab key={index} label={info.title} value={info.value}/>
             ))} 
        </Tabs>
      </Box>
    </Box>
  )
}

export default Categories;