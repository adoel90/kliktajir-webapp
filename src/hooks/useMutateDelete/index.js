import { useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Axios from 'utilities/axios-config'
import { useSnackbar } from 'notistack'
/*
  `````````````
  useMutateDelete

  `````````````
*/

const handleMutate = async (endpointName, params) => {
  const { data } = await Axios.post(endpointName, params);
  return data;
};

const useMutateDelete = (endpointName = '', endpointNameRefetch = undefined) => {
  const history = useNavigate();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar()

  const { mutate: mutateData, isLoading, isSuccess, data, status, isError, isIdle } = useMutation(
    params => handleMutate(endpointName, params),
    {
      onError: err => {

        console.log("ERROR mutation: ", err);

        if(err !== undefined){
          if (err.response !== null && err.response !== undefined) {
            if (err.response.data !== null && err.response.data !== undefined) {
              if (err.response.data.msg !== null && err.response.data.msg !== undefined) {
                  enqueueSnackbar(err.response.data && err.response.data.msg, { variant: 'error'});
  
                if (err.response.status === 401) {
                  localStorage.removeItem('token');
                  setTimeout(() => {
                    window.location.reload();
                  }, 1500);
                }
              }
            }
          } 
        } 
      },
    },
  );

  useEffect(() => {    
    if(data?.status === true){
        if (isSuccess === true) {
            enqueueSnackbar("Success !", { variant: 'success'});                  
    
            queryClient.refetchQueries(endpointNameRefetch);            
            window.location.reload();
        }
    };

    if(data?.status === false){
        enqueueSnackbar(data?.message, { variant: 'error'});      

    }

    console.log("isError : ", isError)
    if(isError){
      enqueueSnackbar("Whoops, something went wrong !", { variant: 'error'});      

    }

  }, [isSuccess, data, status, endpointNameRefetch, history, queryClient, isError]);

  return [mutateData, isLoading, isSuccess, isError, isIdle];
};

export default useMutateDelete;
