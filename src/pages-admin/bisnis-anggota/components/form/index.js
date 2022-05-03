import { TextField, Grid, Tooltip, Stack, Fab, IconButton, Box, ImageList, ImageListItem, Card, CardMedia, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';


export default ({register, children, isEdit = false, errors, fields, append, remove}) => {

    return (
        <>
            <Box sx={{mt:1}}>
                <TextField                            
                    label="Nama Toko/Brand*"       
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
              
              {/* {
                isEdit && (

                  fields?.map((item, index) => (

                    <Box mt={3}>
                      {
                        item?.image !== '' &&  item?.image?.length !== 0 ? 
                          <Card sx={{ maxWidth: '100%' }}>
                            <CardMedia
                              component="img"
                              height="140"
                              image={process.env.REACT_APP_API_BASE_URL + item.image}
                              alt={item?.image}
                            />
                          </Card>  : item?.image?.length > 0 ?
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              component="img"
                              height="140"
                              image={process.env.REACT_APP_API_BASE_URL + item.image}
                              alt={item?.image}
                            />
                          </Card> : ''
                      }
                    </Box>
                  ))
                )
              } */}
          
              {
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
                      
                      {isEdit && (
                        <>
                          {
                            item?.image !== '' &&  item?.image?.length !== 0? 
                              <Tooltip 
                                // title="Lihat Gambar existing saat ini, klik Icon ini ! (*Akan otomatis terhapus apabila tidak di upload ulang !)" 
                                title={
                                  <Typography variant='caption' className='text-avenir-light'>
                                    Lihat Gambar existing saat ini, klik Icon ini ! <i className='text-sm'>(*Akan otomatis terhapus apabila tidak di upload ulang.)</i>
                                  </Typography>
                                }
                                placement='right-start' 
                              >
                                  <IconButton  onClick={() => window?.open(`${process.env.REACT_APP_API_BASE_URL}/${item?.image}`)}>                           
                                      <ImageIcon />                                      
                                  </IconButton>
                              </Tooltip> 
                              
                                                            
                              : item?.image?.length > 0 ?
                                <Tooltip 
                                  title={
                                    <Typography variant='caption' className='text-avenir-light'>
                                    Lihat Gambar existing saat ini, klik Icon ini ! <i className='text-sm'>(*Akan otomatis terhapus apabila tidak di upload ulang.)</i>
                                  </Typography>
                                  }
                                  placement='right-start' 
                                >
                                    <IconButton  onClick={() => window?.open(`${process.env.REACT_APP_API_BASE_URL}/${item?.image}`)}>                           
                                        <ImageIcon />                                      
                                    </IconButton>
                                </Tooltip> 
                              : ''
                           }
                        </>
                        )}
                    </Stack>
                  </Box> 
                ))
              }
              

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