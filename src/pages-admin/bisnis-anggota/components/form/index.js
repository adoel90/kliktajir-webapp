import { TextField, Box } from '@mui/material';

export default ({register, children, isEdit = false, errors={errors}}) => {

    return (
        <>
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Nama Anggota*"       
                    fullWidth    
                    {...register('member_name',{ required: true})}      
                    InputLabelProps = {
                        isEdit ? { shrink: true } : {}
                    }  
                    helperText={errors?.member_name?.type === "required" && "Wajib di isi !"} 
                    error={errors?.member_name?.type === "required" ? true : false}                                                                                                                        
                />
              </Box> 
              <Box sx={{mt:3}}>
                <TextField label="No WhatsApp*" fullWidth {...register('phone',{ required: true})}      
                      InputLabelProps = {
                        isEdit ? { shrink: true } : {}
                    }    
                    helperText={errors?.phone?.type === "required" && "Wajib di isi !"} 
                    error={errors?.phone?.type === "required" ? true : false}  
                />
              </Box> 

              <Box sx={{mt:3}}>
                  <TextField label="Upload Gambar*" type="file" fullWidth {...register('image',{ required: true})}      
                      InputLabelProps={{
                          shrink: true,
                      }}
                      helperText={errors?.image?.type === "required" && "Wajib di isi !"} 
                      error={errors?.image?.type === "required" ? true : false}  
                  />
              </Box> 
              {/* {
                fields?.map((item, index) => (
                  
                  <Box sx={{mt:3}} key={index}>
                    <Stack direction="row">
                      <TextField 
                        label="Produk Anggota" 
                        fullWidth 
                        type="file"
                        InputLabelProps={{
                          shrink: true,
                      }}
                        // {...register('image')} 
                        {...register(`image.${index}.image`)}                         
                      />

                      <IconButton 
                        color={index !== 0 ? 'error' : 'primary'}                                  
                        onClick={
                            index !== 0
                              ? () => remove(index)
                              : () => append({image: ''})
                          }
    
                      >
                        {index !== 0 ? <DeleteIcon /> : <AddIcon />}
                      </IconButton>
                    </Stack>
                  </Box> 
                ))
              }
               */}

              <Box sx={{mt:3}}>
                <TextField 
                  label="Deskripsi Umum untuk All Produk*" 
                  fullWidth                 
                  multiline
                  rows={4}                  
                  {...register('description',{ required: true})}
                  InputLabelProps = {
                    isEdit ? { shrink: true } : {}
                  }    
                  helperText={errors?.description?.type === "required" && "Wajib di isi !"} 
                  error={errors?.description?.type === "required" ? true : false}  
                />
              </Box>                
            {children}
        </>
    )
}