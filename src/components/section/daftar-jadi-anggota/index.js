
const DaftarJadiAnggota = ({linkToDaftarAnggota = '/daftar-anggota'}) => {

    return (

        <h1 className='text-40px text-oswald text-primary-main tracking-tight text-center'>
            DAFTAR&nbsp;                            
                <a className='text-secondary-main' href={linkToDaftarAnggota}>
                    JADI ANGGOTA
                </a>                            
            &nbsp;KAMI
        </h1>
    )
};

export default DaftarJadiAnggota;