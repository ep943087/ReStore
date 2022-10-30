import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import useCustomTheme from "./useCustomTheme";
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const App = () => {
  const { darkMode, setDarkMode, theme } = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Container>
        <Catalog />        
      </Container>
    </ThemeProvider>
  );
}

export default App;
