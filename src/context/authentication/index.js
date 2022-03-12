import React, { useContext, useState, useEffect } from 'react';
// import { InisiateLoader } from '../../components/loader';
// const Page500 = React.lazy(() => import('../../views/pages/page500/Page500'));

const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user'));

const sleep = time => new Promise(resolve => setTimeout(resolve, time));
const getToken = () => sleep(500).then(() => token);
// const getToken = () => sleep(500).then(() => null)

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [state, setState] = useState({
    status: 'pending',
    error: null,
    token: null,
    user: {
      nama: '',
      subsidiary_token: '',
      company_name: '',
      company_code: '',
    },
  });

  useEffect(() => {
    getToken().then(
      token => setState({ status: 'success', error: null, token, user }),
      error => setState({ status: 'error', error, token: null }),
    );
  }, []);

  return (
    <AuthContext.Provider value={state}>
      {state.status === 'pending' ? (
        // <InisiateLoader />        
        <i>
            Loading...
        </i>        
      ) : state.status === 'error' ? (
        <>
          {/* <Page500 state={state} /> */}
          <h1>
              <i>
                  Page 500
              </i>
          </h1>
        </>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export function useAuthentication() {
  const state = useContext(AuthContext);
  const isPending = state.status === 'pending';
  const isError = state.status === 'error';
  const isSuccess = state.status === 'success';
  const isAuthenticated = state.token && isSuccess;  


  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  };
}
