import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default () => {
    
    const drawerWidth = 240;

    return (
        <>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto', mt: 11 }}>
                    <List>               
                        <Link to="/pages-admin/baitul-maal" className='no-underline '>
                            <ListItem button>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText                         
                                primary={
                                <p className='text-avenir-light text-black text-bold'>                          
                                Baitul Maal
                                </p>
                                }
                            />
                            </ListItem>
                        </Link>
                        <Link to="/pages-admin/bisnis-anggota" className='no-underline'>
                            <ListItem button>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={
                                <p className='text-avenir-light text-black text-bold'>                          
                                    Bisnis Anggota
                                </p>                        
                                }
                            />
                            </ListItem>
                        </Link>
                    </List>
                    
                </Box>
                </Drawer>
            <Toolbar />
        </>
    )
}