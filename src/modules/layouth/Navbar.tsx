import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { Menu as MenuIcon } from '@mui/icons-material'
//import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
//import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
/* import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab'; */
import { useState } from 'react';
import { Link } from "react-router-dom";
/* import { styled } from '@mui/material/styles'; */
import logo from '../../assets/bsc_logo.png';

const styles = {
    link: {
        color: 'gray',
        textDecoration: 'none',
        zIndex: -100,
    }
}

const pages = [
    { id: 1, title: 'Eventos', path: '/eventos' },
    { id: 2, title: 'Propietarios', path: '/propietarios' },
    { id: 3, title: 'Socios', path: '/socios' },
    { id: 4, title: 'Hinchas', path: '/hinchas' },
    { id: 5, title: 'Contacto', path: '/contacto' },
];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {

    //const [value, setValue] = useState(2);
    const [active, setActive] = useState(1);

    /* const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }; */

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    /* const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null); */

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    /*  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
         setAnchorElUser(event.currentTarget);
     }; */

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    /* const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }; */
    return (
        <AppBar position="static" color="transparent" sx={{ pt: 2 }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>

                    <img src={logo} alt="bsc" style={{ maxWidth: 70, marginRight: '3rem' }} />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{color: 'white'}} />
                            
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((item) => (
                                <MenuItem key={item.id} onClick={handleCloseNavMenu}>
                                    <Link to={item.path}><Typography textAlign="center">{item.title}</Typography></Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography> */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        {pages.map((item) => (

                            <Button
                                key={item.id}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', mr: 2 }}
                            >
                                <Link style={styles.link} onClick={()=>setActive(item.id)} className={active === item.id ? 'yellow' : ''} to={item.path}><Typography textAlign="center">{item.title}</Typography></Link>

                            </Button>
                        ))}



                    </Box>
                    {/* <Button
                                key={item.id}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link style={styles.link} to={item.path}><Typography textAlign="center">{item.title}</Typography></Link>

                            </Button> */}

                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',npm
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;