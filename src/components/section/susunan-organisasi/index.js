
import { Paper} from '@mui/material'

const SusunanOrganisasi = () => {

    return (

        <Paper elevation={1} sx={{p: 3, mt:7, backgroundColor: "common.softGrey"}}>      
            <h1 className='text-oswald text-primary-main text-500 tracking-normal'>
                <b>SUSUNAN ORGANISASI</b>
            </h1>

            <h2 className="text-oswald text-primary-main text-500">
                Penasehat :
            </h2>
            <p>
                Moch. Untung Prayitno
            </p>

            <h2 className="text-oswald text-primary-main text-500">
            
                Dewan Pengawas Syariah :
            </h2>
            <p>                    
                Ketua       : Dr. Ir. H. Kahar Mulyani, MM.
            </p>

            <h2 className="text-oswald text-primary-main text-500">
                Dewan Pengawas :
            </h2>               
            <ul className='list-none text-avenir-light text-bold'>
                <li><p>Ketua   : Eka Aulia </p></li>
                <li><p>Anggota : Darman Usman, SE., Ak., CA., CPA.</p></li>
                <li><p>Prof. Dr. Enjang Akmad Juanda, M.Pd., MT.</p></li>
            </ul>

            <h2 className="text-oswald text-primary-main text-500">                    
                Dewan Pengurus :
            </h2>
            <ul className='list-none text-avenir-light text-bold'>
                <li><p>Ketua            :  Ratus Sewu, SE.</p></li>
                <li><p>Sekretaris     :  Heri Heryadi, SE.</p></li>
                <li><p>Bendahara   :  Budi Sulistyo, SE.</p></li>
            </ul>
        </Paper>
    )
};

export default SusunanOrganisasi;