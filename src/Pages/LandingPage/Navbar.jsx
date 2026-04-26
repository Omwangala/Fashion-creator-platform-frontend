import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: '#fff', color: '#000', boxShadow: 1 }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 900, letterSpacing: 1 }}>
          VOGUEVAULT
        </Typography>

        <Button color="inherit" sx={{ fontWeight: 600, mx: 1 }}>
          Log In
        </Button>

        <Button
          variant="contained"
          sx={{ bgcolor: '#000', color: '#fff', borderRadius: 0, px: 3 }}
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;