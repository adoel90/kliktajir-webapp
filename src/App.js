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
import AdminBisnisAnggotaCreate from 'pages-admin/bisnis-anggota/create'
import AdminBisnisAnggotaUpdate from 'pages-admin/bisnis-anggota/update'

import AdminBaitulMaal from 'pages-admin/baitul-maal/list'
import AdminBaitulMaalCreate from 'pages-admin/baitul-maal/create'
import AdminBaitulMaalUpdate from 'pages-admin/baitul-maal/update'

import AdminInformasiTerkini from 'pages-admin/informasi-terkini/list'
import AdminInformasiTerkiniCreate from 'pages-admin/informasi-terkini/create'
import AdminInformasiTerkiniUpdate from 'pages-admin/informasi-terkini/update'

import AdminPengaturanUser from 'pages-admin/pengaturan-user/list'
import AdminPengaturanUserCreate from 'pages-admin/pengaturan-user/create'
import AdminPengaturanUserUpdate from 'pages-admin/pengaturan-user/update'

import AdminSaldoAnggota from 'pages-admin/saldo-anggota/list'
import AdminSaldoAnggotaCreate from 'pages-admin/saldo-anggota/create'
import AdminSaldoAnggotaUpdate from 'pages-admin/saldo-anggota/update'

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

const AdminApp = () => {

  const { token, user } = useAuthentication();  

  return token ? <AuthenticatedPages /> : <PageAdminLogin />;

}

const AuthenticatedPages = () => {

  return (

    <>
      <h1>
          Authenticated Pages
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
});

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
                <Route path="baitul-maal/update/:id" element={<AdminBaitulMaalUpdate />} />

                <Route path="bisnis-anggota" element={<AdminBisnisAnggota />} />
                <Route path="bisnis-anggota/create" element={<AdminBisnisAnggotaCreate />} />
                <Route path="bisnis-anggota/update/:id" element={<AdminBisnisAnggotaUpdate />} />

                <Route path="informasi-terkini" element={<AdminInformasiTerkini />} />
                <Route path="informasi-terkini/create" element={<AdminInformasiTerkiniCreate />} />
                <Route path="informasi-terkini/update/:id" element={<AdminInformasiTerkiniUpdate />} />

                <Route path="pengaturan-user" element={<AdminPengaturanUser />} />
                <Route path="pengaturan-user/create" element={<AdminPengaturanUserCreate />} />
                <Route path="pengaturan-user/update/:id" element={<AdminPengaturanUserUpdate />} />

                <Route path="saldo-anggota/page=:pageCount/limit=:limitCount" element={<AdminSaldoAnggota />} />
                <Route path="saldo-anggota/create" element={<AdminSaldoAnggotaCreate />} />
                <Route path="saldo-anggota/update/:id" element={<AdminSaldoAnggotaUpdate />} />
                
                <Route path="*" element={<NoMatch />}  />
              </Route>

          </Routes>                                 
        </QueryClientProvider>      
      </>
  );
}

export default App;
