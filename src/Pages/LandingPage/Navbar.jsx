import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext"; 

const Navbar = () => {
    const { user, isAuthenticated, logoutUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutUser();
        navigate('/auth'); // ✅ fixed
    };

    return (
        <AppBar position="sticky" sx={{ bgcolor: '#fff', color: '#000', boxShadow: 1 }}>
            <Toolbar>

                {/* BRAND */}
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
                    
                    {/* HOME */}
                    <Button component={Link} to="/" color="inherit" sx={{ fontWeight: 600, mx: 1 }}>
                        Home
                    </Button>

                    {isAuthenticated ? (
                        <>
                            {/* 🔒 AUTH VIEW */}
                            <Button 
                                component={Link} 
                                to="/upload" 
                                color="inherit" 
                                sx={{ fontWeight: 600, mx: 1 }}
                            >
                                Upload Look
                            </Button>

                            <Typography sx={{ mx: 2, fontWeight: 500, color: '#666' }}>
                                Hi, {user?.username || 'User'}
                            </Typography>

                            <Button 
                                onClick={handleLogout} 
                                variant="outlined" 
                                sx={{ 
                                    borderColor: '#000', 
                                    color: '#000', 
                                    borderRadius: 0, 
                                    ml: 1 
                                }}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            {/* 🌐 GUEST VIEW */}
                            <Button 
                                component={Link} 
                                to="/auth" 
                                color="inherit" 
                                sx={{ fontWeight: 600, mx: 1 }}
                            >
                                Log In
                            </Button>

                            <Button
                                component={Link}
                                to="/auth"
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