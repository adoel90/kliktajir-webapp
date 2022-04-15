import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { Skeleton, Grid, Button } from '@mui/material';

import SideNav from 'components/layout-admin/side-nav'
import HeaderAdmin from 'components/layout-admin/header'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useForm, useFieldArray } from "react-hook-form";
import { useMutate } from 'hooks'
import { API_BISNIS_ANGGOTA } from 'constanta'
import { useAuthentication } from 'context/authentication';
import { useQueryData } from 'hooks';
import Form from '../components/form'

const convertToBase64 = url => fetch(url)
      .then(response => response.blob())
      .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
     }))

  function converToFileObject(dataurl, filename) {

    console.log("DATA URL : ", dataurl);
    console.log("DATA filename : ", filename);

     var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
     bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
     while(n--){
     u8arr[n] = bstr.charCodeAt(n);
     }
   return new File([u8arr], filename, {type:mime});
  }

  function getBase64Image(imgUrl, callback) {

    var img = new Image();

    // onload fires when the image is fully loadded, and has width and height

    img.onload = function(){

      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png"),
          dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

      callback(dataURL); // the base64 string

    };

    // set attributes and src 
    img.setAttribute('crossOrigin', 'anonymous'); //
    img.src = imgUrl;
    

}

export default () => {

  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate();
  const { token } = useAuthentication();  

  const queryParam = useParams();  

  const { isLoading: isLoadingDetail, isFetching, error, data } = useQueryData(`${API_BISNIS_ANGGOTA}/detail/${queryParam?.id}`); 

  const { register, handleSubmit, control, formState: { errors }, setValue, reset } = useForm({

    defaultValues: {} 
  });

  const { fields, append, remove } = useFieldArray({
    control, 
    name: "image", 
  });

  useEffect(() => {
    
    if(data){            
      
      reset(data)

    };

  },[data])
  
  // const [ resultConvertFilt, setResultConvertFile ] = useState(null);
  // useEffect(() => {
    
  //   fields?.map((item, index) => {
          
  //     if(typeof item?.image === 'string'){
          
  //       if(item?.image !== ''){            
  //         convertToBase64(item?.image).then(dataUrl => {            
  //           let fileData = converToFileObject(dataUrl, "imageName.jpg");      
  //           // return fileArr
  //           setResultConvertFile(fileData)
  //         })

  //         // getBase64Image("103.31.251.235/~kliktajir/api/"+ item?.image, function(base64image){
  //         //     console.log(base64image);
  //         // });
  
  //       }                  
  //     };
  //   })

  // },[fields])

  // console.log("resultConvertFilt : ", resultConvertFilt)

  const onSubmit = params => {  

    console.log("PARAMS : ", params);
    var formData = new FormData();    

    formData.append("id", data?.id)
    formData.append("member_name", params?.member_name)
    formData.append("phone", params?.phone)
    formData.append("description", params?.description)    
    params?.image?.map((item, i) => (formData.append(`image${i !== 0 ? i : ''}`, item?.image[0])))
    // formData.append('image', resultConvertFilt)
    mutateData(formData);

  };

  const [mutateData, isLoading] = useMutate(`${API_BISNIS_ANGGOTA}/update`);
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HeaderAdmin />
      <SideNav />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h3" sx={{mt:-3}} className='text-center text-oswald'>
        Bisnis Anggota            
        </Typography>
       
        <Grid container sx={{mt:3}}>          
          <Grid item md={5}>   
            {isLoadingDetail && <Skeleton variant="text" />}
            <form onSubmit={handleSubmit(onSubmit)}>                 
              <Form register={register} isEdit={true} errors={errors} fields={fields} append={append} remove={remove}>                          
                <Box sx={{display: 'flex', justifyContent: 'end', mt: 3}}>
                  <Button variant="outlined" color="primary" onClick={() => navigate(-1)}>
                    Cancel
                  </Button>
                  &nbsp;
                  <Button
                    variant="contained"  
                    color="primary"  
                    type="submit"  
                    disabled={isLoading ? true : false}                  
                  >
                    {isLoading ? "Loading..." : "Simpan"}
                  </Button>
                </Box>  
              </Form>
            </form>
          </Grid>   
          <Grid item md={7}> </Grid>       
            
        </Grid>
      </Box>
    </Box>
  );
}
