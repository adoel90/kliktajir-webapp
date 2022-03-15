import React, { useEffect, useState} from 'react'
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
import AxiosConfig from 'utilities/axios-config'
import { useQuery } from 'react-query'
import ImageIcon from '@mui/icons-material/Image';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
  
  const getList = async () => {

    AxiosConfig.get('v1/baitul-maal/list?limit=10&page=1').then((response) => {
      
      return response?.data;

    }).catch(e => { 

      console.log("ERROR : ", e)

      return e
      
    })
  }     
  
  // 
  const [ listData, setListData ] = useState();

  useEffect(() => {
    AxiosConfig.get('v1/baitul-maal/list?limit=10&page=1').then((response) => {

      // console.log("Original Response : ", response);
      setListData(response?.data?.data || [])
          
    }).catch((e) => {
  
      console.log("Error : ", e)
      return e;
    })
  },[])

  //*
  // const {data} = useQuery('todos', async () => {
  //   AxiosConfig.get('v1/baitul-maal/list?limit=10&page=1').then((response) => {

  //     return response
  //   })
    
  // });
  // console.log("DATA ORIGINAL : ", data);
 
  // let listData = data?.data?.data || [];

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
                        // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        listData?.map((row, i) => {
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
                                      <IconButton onClick={() => window?.open(`http://averoa.com:8800/${row?.image}`)}>
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
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
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

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];
