import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext"; 

const Navbar = () => {
    const { user, logoutUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutUser();
            navigate('/login');
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <AppBar position="sticky" sx={{ bgcolor: '#fff', color: '#000', boxShadow: 1 }}>
            <Toolbar>
                {/* BRAND LOGO */}
                <Typography 
                    variant="h5" 
                    component={Link} 
                    to="/" 
                    sx={{ 
                        flexGrow: 1, 
                        fontWeight: 900, 
                        letterSpacing: 1, 
                        textDecoration: 'none', 
                        color: 'inherit' 
                    }}
                >
                    VOGUEVAULT
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* HOME LINK */}
                    <Button component={Link} to="/" color="inherit" sx={{ fontWeight: 600, mx: 1 }}>
                        Home
                    </Button>

                    {user ? (
                        /* 👗 AUTHENTICATED VIEW - Shown when logged in */
                        <>
                            <Button component={Link} to="/upload" color="inherit" sx={{ fontWeight: 600, mx: 1 }}>
                                Upload Look
                            </Button>
                            <Typography sx={{ mx: 2, fontWeight: 500, color: '#666' }}>
                                Hi, {user.username}
                            </Typography>
                            <Button 
                                onClick={handleLogout} 
                                variant="outlined" 
                                sx={{ borderColor: '#000', color: '#000', borderRadius: 0, ml: 1 }}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        /* 🔒 GUEST VIEW - Shown when logged out */
                        <>
                            <Button 
                                component={Link} 
                                to="/login" 
                                color="inherit" 
                                sx={{ fontWeight: 600, mx: 1 }}
                            >
                                Log In
                            </Button>
                            <Button
                                component={Link}
                                to="/signup"
                                variant="contained"
                                sx={{ 
                                    bgcolor: '#000', 
                                    color: '#fff', 
                                    borderRadius: 0, 
                                    px: 3, 
                                    ml: 1, 
                                    '&:hover': { bgcolor: '#333' } 
                                }}
                            >
                                Join Now
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;