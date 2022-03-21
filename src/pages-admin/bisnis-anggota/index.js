import * as React from 'react';
import { Box, Button, Paper, TableContainer, Table, TableHead, TableRow, TableCell, IconButton, TablePagination, TableBody, Skeleton } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

import SideNav from 'components/layout-admin/side-nav'
import HeaderAdmin from 'components/layout-admin/header'

import { useQueryData } from 'hooks';
import { API_BISNIS_ANGGOTA } from 'constanta';
import ImageIcon from '@mui/icons-material/Image';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { id: 'name', label: 'Nama Anggota', minWidth: 170 },
  {
    id: 'no_wa',
    label: 'No WhatsApp',
    minWidth: 170,
    align: 'left'    
  },
  
  { id: 'code', label: 'Gambar', minWidth: 100,align: 'center', },
  {
    id: 'population',
    label: 'Deskripsi Produk',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Action',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];


export default function AdminBisnisAnggota() {

  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 
  const { isLoading: isLoaderList, isFetching, error, data, status} = useQueryData(`${API_BISNIS_ANGGOTA}/list?limit=${rowsPerPage}&page=${page}`);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HeaderAdmin />
      <SideNav />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h3" className='text-center text-oswald'>
            Bisnis Anggota
        </Typography>

        <Box sx={{display: 'flex', justifyContent: 'end', mt: 7}}>                
            <Link to="/pages-admin/bisnis-anggota/create" className='no-underline'>
                <Button variant="contained"  color="primary">                
                    Create Data
                </Button>
            </Link>
        </Box>
        {
          isLoaderList ? <Skeleton sx={{ height: 290,  mt:3 }} animation="wave" variant="rectangular" /> : 
            <Paper elevation={2} sx={{ width: '100%', overflow: 'hidden', mt:3 }}>
                <TableContainer sx={{ maxHeight: 700 }}>

                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                              {columns.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                  {column.label}
                                  </TableCell>
                              ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {                        
                              data?.map((row, i) => {
                                  return (
                                    <>
                                      <TableRow key={i}>
                                        <TableCell component="th" scope="row">
                                          <p className='text-avenir-light'>
                                            {row?.member_name}
                                          </p>                                    
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                          <p className='text-avenir-light'>
                                            {row?.phone}
                                          </p>                                    
                                        </TableCell>
                                        <TableCell align="center">
                                          <p className='text-avenir-light'>
                                            <IconButton onClick={() => window?.open(`${process.env.REACT_APP_API_BASE_URL}/${row?.image}`)}>
                                              <ImageIcon />                                      
                                            </IconButton>
                                          </p>
                                        </TableCell>
                                        <TableCell align="left">{row.description}</TableCell>
                                        <TableCell align="left">
                                          <IconButton>
                                            <EditIcon />
                                          </IconButton>
                                          <IconButton>
                                            <DeleteIcon />
                                          </IconButton>
                                        </TableCell>
                                      </TableRow>                                                                                                  
                                    </>
                                  );
                              })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                </Paper> 
        }



      </Box>
    </Box>
  );
}
