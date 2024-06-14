import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { CssBaseline,Container,createTheme,ThemeProvider } from "@mui/material";
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'
function App() {
  const [darkMode,setDarkMode]=useState(false);
  const paletteType=darkMode?"dark":"light"
  const theme=createTheme({
    palette: {
      mode:paletteType,
      background:{
        default:paletteType==='light'?'#eaeaea':'#121212'
       }
    }
  });
  const handleThemeChange=()=>{
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
      <CssBaseline />
      <Navbar darkMode={darkMode} themeChange={handleThemeChange}/>
      <Container sx={{mt:4}}>
          <Outlet/>
      </Container>
     
    </ThemeProvider>
  );
}

export default App;
