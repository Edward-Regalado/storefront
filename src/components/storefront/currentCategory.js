import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';
// import { currentCategory } from '../../features/cart/cartSlice';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { Devices } from '@mui/icons-material';
import CheckroomIcon from '@mui/icons-material/Checkroom';

function CurrentCategory() {

  const currentCategory = useSelector(state => state.products.currentCategory);
  return (
    <div>
      <Box sx={{ display: 'flex'}}>
        <Typography variant='h6' sx={{paddingRight: '20px'}}>
          Category: 
        </Typography>
          {currentCategory === 'all' || undefined ? <DensitySmallIcon /> : ''}
          {currentCategory === 'electronics' ? <Devices />  : ''}
          {currentCategory === 'food' ? <FastfoodIcon />  : ''}
          {currentCategory === 'clothing' ? <CheckroomIcon />  : ''}
      </Box>
    </div>
  )
}

export default CurrentCategory;