import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CustomLink from 'components/common/custom-link/index'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';

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
                        <CustomLink to="/pages-admin/baitul-maal" isWhite={false} >
                            <ListItem button>
                            <ListItemIcon>
                                <BusinessCenterIcon />
                            </ListItemIcon>
                            <ListItemText                         
                                primary={
                                <p className='text-avenir-light text-bold'>                          
                                    Baitul Maal
                                </p>
                                }
                            />
                            </ListItem>
                        </CustomLink>
                        <CustomLink to="/pages-admin/bisnis-anggota" isWhite={false} >
                            <ListItem button>
                            <ListItemIcon>
                                <AddBusinessIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={
                                <p className='text-avenir-light  text-bold' isWhite={false}>                          
                                    Bisnis Anggota
                                </p>                        
                                }
                            />
                            </ListItem>
                        </CustomLink>
                        <CustomLink to="/pages-admin/informasi-terkini" isWhite={false} >
                            <ListItem button>
                            <ListItemIcon>
                                <NewspaperIcon />
                            </ListItemIcon>
                            <ListItemText 
                                primary={
                                <p className='text-avenir-light text-bold'>                          
                                    Informasi Terkini
                                </p>                        
                                }
                            />
                            </ListItem>
                        </CustomLink>
                        <CustomLink to="/pages-admin/pengaturan-user" isWhite={false} >
                            <ListItem button>
                                <ListItemIcon>
                                    <AdminPanelSettingsIcon />
                                </ListItemIcon>
                            <ListItemText 
                                primary={
                                <p className='text-avenir-light text-bold'>                          
                                    Pengaturan User
                                </p>                        
                                }
                            />
                            </ListItem>
                        </CustomLink>
                        <CustomLink to="/pages-admin/saldo-anggota" isWhite={false} >
                            <ListItem button>
                                <ListItemIcon>
                                    <BatteryCharging90Icon />
                                </ListItemIcon>
                            <ListItemText 
                                primary={
                                <p className='text-avenir-light text-bold'>                          
                                    Saldo Anggota
                                </p>                        
                                }
                            />
                            </ListItem>
                        </CustomLink>
                    </List>
                    
                </Box>
                </Drawer>
            <Toolbar />
        </>
    )
}