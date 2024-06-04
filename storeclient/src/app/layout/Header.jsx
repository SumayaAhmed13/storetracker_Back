import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = ({darkMode,themeChange}) => {
  return (
    <AppBar position='static' sx={{mb:4}}>
         <Toolbar>
            <Typography variant='h6'>Re-Store</Typography>
            <Switch checked={darkMode} onChange={themeChange}/>
         </Toolbar>
         
    </AppBar>
  )
}

export default Header