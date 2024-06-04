import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { CssBaseline,Container,createTheme,ThemeProvider } from "@mui/material";
import { useState } from 'react';
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
      <CssBaseline />
      <Header darkMode={darkMode} themeChange={handleThemeChange}/>
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
