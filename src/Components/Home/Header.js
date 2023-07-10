import * as React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate, Link,useLocation} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "../../Redux/Reducers/LoginReducer.js";
import menuItems from './MenuItems.json';

// const menuItems = [{item:'Section 1',children:[{item:'Section 1 Sub Menu 1'},{item:'Section 1 Sub Menu 2'},{item:'Section 1 Sub Menu 3'}]},
// {item:'Section 2',children:[{item:'Section 2 Sub Menu 1'},{item:'Section 2 Sub Menu 2'},{item:'Section 2 Sub Menu 3'}]},
// {item:'Section 3',children:[{item:'Section 3 Sub Menu 1'},{item:'Section 3 Sub Menu 2'},{item:'Section 3 Sub Menu 3'}]},
// {item:'Section 4',children:[{item:'Section 4 Sub Menu 1'},{item:'Section 4 Sub Menu 2'},{item:'Section 4 Sub Menu 3'}]},
// {item:'Section 5',children:[{item:'Section 5 Sub Menu 1'},{item:'Section 5 Sub Menu 2'},{item:'Section 5 Sub Menu 3'}]},
// {item:'Forms'}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const dispatch = useDispatch();
  const LOGGED_IN_USER = useSelector(state => state.LoginReducer);

  const formatCurrentPath = (path) => {
    let formattedCurrentPath = path.replace('/','');
    formattedCurrentPath = formattedCurrentPath.replace(' ','');
    return formattedCurrentPath;
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [ActiveHeader, setActiveHeader] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  let CurrentPath = location.pathname;
  
  useEffect(() => {
    let docTitle= CurrentPath.replace('/','').toUpperCase();
    setActiveHeader(formatCurrentPath(CurrentPath));
    document.title = docTitle;
  }, [location]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className='headerbar'>
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CompanyName
          </Typography>

          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              {
                menuItems.map((menuitem)=>(
                  <MenuItem>
                      <Link key={menuitem.item} to={"/"+menuitem.path} className={ActiveHeader==formatCurrentPath(menuitem.item)?'activeHeader headerItem':'headerItem normalHeader'}>
                          <Typography  textAlign="center">{menuitem.item}</Typography>
                        
                      </Link>
                  </MenuItem>
                ))
            }
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
            {
                menuItems.map((menuitem)=>(
                 
                      <Link key={menuitem.item} to={"/"+menuitem.path} className={ActiveHeader.includes(formatCurrentPath(menuitem.item))?'activeHeader headerItem':'headerItem normalHeader'}>
                          <Typography textAlign="center">{menuitem.item}</Typography>
                          { menuitem?.children && 
                          <div type="none"  className="selectedHeaderOptions1">
                          {
                             menuitem?.children?.map((submenuitem)=>
                                    <div className="subHeader">
                                        <Link key={submenuitem.item} to={"/"+menuitem.path+"/"+submenuitem.path} className="subHeaderLink">
                                          {submenuitem.item}
                                        </Link>
                                    </div> 
                             )
                          }
                          </div>
                          }
                          
                      </Link>
                ))
            }
           
          </Box>
          <Box sx={{ flexGrow: 0 }}>
             <Typography  sx={{ p: 0 , cursor:'pointer',mr:2}}>
              {
                 LOGGED_IN_USER && LOGGED_IN_USER?.username!='' && LOGGED_IN_USER?.username!=undefined ?
                 <span>Welcome &nbsp; {LOGGED_IN_USER.username}</span>
                 :
                 <span>Welcome User</span>
              }
                 
             </Typography>
             
          </Box>
          {<Box sx={{ flexGrow: 0 }}>
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
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {LOGGED_IN_USER.username ? (settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {
                    setting=='Logout' ?
                    <Typography onClick={()=>{
                      dispatch(logout({}));
                      navigate('/')
                    }} textAlign="center">{setting}</Typography>
                    :
                    <Typography textAlign="center">{setting}</Typography> 
                  }
                </MenuItem>
              ))):
              (
                <MenuItem key={'Login'} onClick={handleCloseUserMenu}>
                      <Typography onClick={()=>{
                      navigate('/')
                    }} textAlign="center">Login</Typography>
                </MenuItem>
              )
              }
            </Menu>
          </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default Header;