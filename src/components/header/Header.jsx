import  {useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,

    Toolbar,
    Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotFound from "../notFound/NotFound.jsx";



import {Link} from 'react-router-dom';

const Header = () => {


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const navItems = [
    { name: 'Our Story', url: '/' },
    { name: 'Strains', url: '/' },
    { name: 'Areas Served', url: '/' },
    { name: 'Reviews', url: '/buy' },
    { name: 'Buy', url: '/buy' },
  ];




  return (
    <Box>
      <AppBar position="sticky" sx={{ backgroundColor: '#1e272e', boxShadow: 'none', fontFamily: 'Montserrat, sans-serif' }}>


        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h4"
            component={Link}
            to="/"
            sx={{
                // eslint-disable-next-line no-mixed-spaces-and-tabs
			  fontFamily: "'Great Vibes', cursive",
              fontSize: '2rem',
              color: 'white',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Northern Neck Clones
          </Typography>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setMobileMenuOpen(true)}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={item.url}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                    // eslint-disable-next-line no-mixed-spaces-and-tabs
				  fontFamily: 'Montserrat, sans-serif',
                  marginX: 2,
                  '&:hover, &:focus': { backgroundColor: '#2c3e50' },
                  transition: 'background-color 0.3s ease',
                  borderRadius: '4px',
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>



        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <Box sx={{ width: 250, backgroundColor:'black' }} onClick={() => setMobileMenuOpen(false)}>
          <List>
            {navItems.map((item, index) => (
              <ListItem
                key={index}
                component={Link}
                to={item.url}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                  '&:hover, &:focus': { backgroundColor: '#2c3e50' },
                  transition: 'background-color 0.3s ease',
                  borderRadius: '4px',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <ListItemText primary={item.name} sx={{ color: 'white' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

    </Box>
  );
};

export default Header;

