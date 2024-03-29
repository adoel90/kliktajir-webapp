import { useQuery } from 'react-query'
import AxiosConfig from 'utilities/axios-config';


const useQueryData = (endPointName = '', params = {}, options = {}) => {
    const getList = async () => {    
      const { data } = await AxiosConfig.get(endPointName)  

      // TODO: here redirect to login page if get 401!
    
      return data || [];
      
    };
    
    return useQuery({
      queryKey: [endPointName, params],
      queryFn: getList,
      refetchOnWindowFocus: false,
      cacheTime: 0,
      retry: 0,
      ...options,
    }); 
  };

export default useQueryData;