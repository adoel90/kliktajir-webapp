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
import PageAdminLogin from 'pages-admin/login'
import AdminBisnisAnggota from 'pages-admin/bisnis-anggota'
import AdminBaitulMaal from 'pages-admin/baitul-maal/list'
import AdminBaitulMaalCreate from 'pages-admin/baitul-maal/create'
import AdminBaitulMaalUpdate from 'pages-admin/baitul-maal/update'

import AdminLayout from 'components/layout-admin/wrapper-admin-layout'

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
import { QueryClient, QueryClientProvider } from 'react-query'

// ADMIN PAGE
import './App.css';

const AdminApp = () => {

  const { token, user } = useAuthentication();  

  return token ? <AuthenticatedPages /> : <PageAdminLogin />;

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

const queryClient = new QueryClient()

const App = () =>  {

  return (    
      <>     
        <QueryClientProvider client={queryClient}>
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
                  </AdminLayout>
                }                                                                                                                                   
              >   
                <Route index element={<AdminBaitulMaal />} />
                <Route path="baitul-maal" element={<AdminBaitulMaal />} />
                <Route path="baitul-maal/create" element={<AdminBaitulMaalCreate />} />
                <Route path="baitul-maal/update" element={<AdminBaitulMaalUpdate />} />
                <Route path="bisnis-anggota" element={<AdminBisnisAnggota />} />
                <Route path="*" element={<NoMatch />}  />
              </Route>

          </Routes>                                 
        </QueryClientProvider>      
      </>
  );
}

export default App;
