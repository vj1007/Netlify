import * as React from 'react';
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
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});




const pages = ['FAQ', 'How to integrate', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  const [pdfFiles, setPdfFiles] = useState([]);
  const [showMessagge, setShowMessage] = useState(false)

  const handleFolderUpload = (event) => {
    const files = event.target.files;
    const pdfArray = [];

    // Iterate over files and store only PDFs
    for (let i = 0; i < files.length; i++) {
      if (files[i].type === 'application/pdf') {
        pdfArray.push(files[i]);
      }
    }

    setPdfFiles(pdfArray);
  };

  const handleClick = () =>{
    setShowMessage(true)

  }


  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <AppBar position="static"  >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            ezto hash
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color:'black' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none', color:'black' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center', color: 'black', }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            ezto hash
          </Typography>
          <Box sx={{  flexGrow: 0, display: { xs: 'none', md: 'flex', sm: 'block' }  }}  >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/*<Box sx={{ flexGrow: 0 }}>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>*/}
        </Toolbar>
      </Container>
    </AppBar>
    {/* Main Body */}
    <Container component="main" style={{ flex: 1, textAlign:'center' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        {/* Main Content Area */}
        <div style={{ flex: 1}}>
      <h1>Join hands to battle tampering of documents</h1>
  
      <Button
      font
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      
      
    >
  
    
    Upload file for Verification
      <VisuallyHiddenInput
        type="file"
        mozdirectory="true"
        directory="true"
        multiple
        onChange={handleFolderUpload}
      />

    
      
    </Button>
    <p>Max File Size 25MB</p>
  
  {pdfFiles.length > 0 && (
    <div>
      <h2>Uploaded PDF File:</h2>
      <ul>
        {pdfFiles.map((file, index) => (
          file.name
        ))}
      </ul>
      <Button variant="contained" onClick={handleClick}>Click to verify</Button>
      {showMessagge &&(
        <p>
          Verification Successful
        </p>
      )
      }
    </div>
  )}
        </div>
      </div>
    </Container>
    

  {/* Footer */}
  <Box component="footer" style={{ backgroundColor: '#fafafa', padding: '16px', textAlign: 'center' }}>
    <Typography variant="body2" color="textSecondary">
      © 2024 ezto hash
    </Typography>
  </Box>
  </div>
    
  );
}
export default ResponsiveAppBar;
