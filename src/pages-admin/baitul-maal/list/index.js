import React, { useEffect, useState} from 'react'
import { useQueryData } from 'hooks'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { IconButton, Grid, Button} from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom'

import SideNav from 'components/layout-admin/side-nav'
import HeaderAdmin from 'components/layout-admin/header'
import ImageIcon from '@mui/icons-material/Image';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { API_BAITUL_MAAL } from 'constanta'


const columns = [
  { id: 'name', label: 'Judul', minWidth: 170 },
  { id: 'code', label: 'Gambar', minWidth: 100,align: 'center', },
  {
    id: 'population',
    label: 'Tanggal',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Deskripsi',
    minWidth: 170,
    align: 'left',
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


export default function List() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 
  const { isLoading, isFetching, error, data, status} = useQueryData(`${API_BAITUL_MAAL}/list?limit=${rowsPerPage}&page=${page}`);  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HeaderAdmin />
      <SideNav />

      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="h3" sx={{mt:-3}} className='text-center text-oswald'>
            Baitul Maal
        </Typography>
        
        <Box sx={{display: 'flex', justifyContent: 'end', mt: 7}}>                
            <Link to="/pages-admin/baitul-maal/create" className='no-underline'>
                <Button variant="contained"  color="primary">                
                    Create Data
                </Button>
            </Link>
        </Box>  
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
                                        {row?.title}
                                      </p>                                    
                                    </TableCell>
                                    <TableCell align="center">
                                      <p className='text-avenir-light'>
                                        <IconButton onClick={() => window?.open(`${process.env.REACT_APP_API_BASE_URL}/${row?.image}`)}>
                                          <ImageIcon />                                      
                                        </IconButton>
                                      </p>
                                    </TableCell>
                                    <TableCell align="center">{row.date}</TableCell>
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
      </Box>
    </Box>
  );
}

