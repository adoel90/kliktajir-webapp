import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import SideNav from 'components/layout-admin/side-nav'
import HeaderAdmin from 'components/layout-admin/header'

export default function AdminBisnisAnggota() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HeaderAdmin />
      <SideNav />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h3" className='text-center text-oswald'>
            Bisnis Anggota
        </Typography>
       <p>
           <i>Form inprogress...</i>
       </p>
      </Box>
    </Box>
  );
}
