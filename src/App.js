import {
  Routes,
  Route ,
  Outlet
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

import Header from 'components/layout/header/index'
import Footer from 'components/layout/footer/index'
import { AuthProvider, useAuthentication } from 'context/authentication';

// ADMIN PAGE
import './App.css';

const AdminApp = () => {

  const { token, user } = useAuthentication();  

  return true ? <AuthenticatedPages /> : <PageAdminLogin />;

}

const AuthenticatedPages = () => {

  return (

    <>
      <h1>
          AuthenticatedPages
      </h1>
      <Outlet />
    </>
  )
}

const NoMatch = () => {

  return (
    <h1>
      Not Found
    </h1>
  )
}

const AdminBaitulMaal = () => {

  return (

    <h1>AdminBaitulMaal</h1>
  )
}

const AdminBisnisAnggota = () => {

  return (

      <h1>
        AdminBisnisAnggota
      </h1>
  )
}

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
                  <AuthProvider>
                    <AdminApp />
                  </AuthProvider>
                  {/* <PageAdminLogin /> */}
                </AdminLayout>
              }                                                                                                                                   
            >   

              <Route index element={<AdminBaitulMaal />} />
              <Route path="baitul-maal" element={<AdminBaitulMaal />} />
              <Route path="bisnis-anggota" element={<AdminBisnisAnggota />} />
              <Route path="*" element={<NoMatch />}  />

            </Route>

        </Routes>                                 
      </>
  );
}

export default App;
