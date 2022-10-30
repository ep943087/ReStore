import { AppBar, Toolbar, Typography, Switch } from "@mui/material";

interface HeaderProps {
  setDarkMode: (val: boolean) => void,
  darkMode: boolean,
}

const Header = (props: HeaderProps) => {

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setDarkMode(e.target.checked);
  };

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography>Re-Store</Typography>
        <Switch checked={props.darkMode} onChange={handleThemeChange} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;