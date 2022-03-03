import { Container } from '@mui/material'
import {
  Routes,
  Route  
} from "react-router-dom";
import Home from 'pages/home/index'
import InformasiTerkini from 'pages/informasi-terkini/index'
import TentangKami from 'pages/tentang-kami/index'
import BaitulMaal from 'pages/baitul-maal/index'
import BisnisAnggota from 'pages/bisnis-anggota/index'

import { PAGE_TENTANG_KAMI, PAGE_INFORMASI_TERKINI, PAGE_BAITUL_MAAL, PAGE_BISNIS_ANGGOTA } from './constanta/index'



import Header from './components/layout/header/index'
import Footer from './components/layout/footer/index'


import './App.css';

function App() {

  return (    
      <>
        {/* <Container> */}
          <Header />         
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path={`${PAGE_TENTANG_KAMI}`} element={<TentangKami />} />
            <Route path={`${PAGE_INFORMASI_TERKINI}`} element={<InformasiTerkini />} />    
            <Route path={`${PAGE_BISNIS_ANGGOTA}`} element={<BisnisAnggota />} /> 
            <Route path={`${PAGE_BAITUL_MAAL}`} element={<BaitulMaal />} />                                                                  
          </Routes>  

        {/* </Container> */}
        <Footer />      
      </>
  );
}

export default App;
