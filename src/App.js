import {
  Routes,
  Route  
} from "react-router-dom";
import Home from 'pages/home/index'
import InformasiTerkini from 'pages/informasi-terkini/index'
import TentangKami from 'pages/tentang-kami/index'
import BaitulMaal from 'pages/baitul-maal/index'
import BisnisAnggota from 'pages/bisnis-anggota/index'
import DaftarAnggota from 'pages/daftar-anggota/index'
import ProdukKami from 'pages/produk-kami/index'
import StrukturOrganisasi from 'pages/struktur-organisasi/index'


// *Admin
import PageAdminLogin from 'pages-admin/login/index'
import AdminLayout from 'components/layout-admin/wrapper-admin-layout/index'




import { 
  PAGE_TENTANG_KAMI, 
  PAGE_INFORMASI_TERKINI, 
  PAGE_BAITUL_MAAL, 
  PAGE_BISNIS_ANGGOTA, 
  PAGE_DAFTAR_ANGGOTA,
  PAGE_PRODUK_KAMI,
  PAGE_STRUKTUR_ORGANISASI,

  PAGE_ADMIN_LOGIN
} from './constanta/index'

import Header from './components/layout/header/index'
import Footer from './components/layout/footer/index'

// ADMIN PAGE


import './App.css';

function App() {

  return (    
      <>                     
        <Routes>

            <Route  path="/" element={
                <>
                  <Header />    
                    <Home />
                  <Footer />
                </>
              }
              >
            </Route>

            <Route path={`${PAGE_TENTANG_KAMI}`} element={
                <>
                  <Header /> 
                  <TentangKami />
                  <Footer />
                </>
              }
            />
            <Route path={`${PAGE_INFORMASI_TERKINI}`} element={
                <>
                  <Header /> 
                    <InformasiTerkini />
                  <Footer />
                </>
              
            } />    

            <Route path={`${PAGE_BISNIS_ANGGOTA}`} element={
                <>
                  <Header /> 
                    <BisnisAnggota />
                  <Footer />
                </>
            } /> 

            <Route path={`${PAGE_BAITUL_MAAL}`} element={
                <>
                  <Header /> 
                    <BaitulMaal />
                  <Footer />
                </>
            } /> 
            <Route path={`${PAGE_DAFTAR_ANGGOTA}`} element={
                <>
                  <Header /> 
                    <DaftarAnggota />
                  <Footer/>
                </>                    
            } />   
            <Route path={`${PAGE_PRODUK_KAMI}`} element={
                <>
                  <Header /> 
                    <ProdukKami />
                  <Footer />
                </>
            } />   

            <Route path={`${PAGE_STRUKTUR_ORGANISASI}`} element={
              <>
                <Header /> 
                  <StrukturOrganisasi />
                <Footer />
              </>
            } />              

            {/* ADMIN LAYOUT */}
            <Route path={`${PAGE_ADMIN_LOGIN}`} element={
                <AdminLayout>
                  <PageAdminLogin />
                </AdminLayout>
              }                                                                                                                                   
            />   

        </Routes>                                 
      </>
  );
}

export default App;
