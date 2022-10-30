import { useState } from "react";
import { createTheme } from '@mui/material';

const useCustomTheme = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: darkMode ? '#121212' : '#eaeaea',
      },
    }
  });

  return {
    darkMode,
    setDarkMode,
    theme,
  };
};

export default useCustomTheme;