import React from 'react'
import { Link } from "react-router-dom";
import { PAGE_TENTANG_KAMI, PAGE_INFORMASI_TERKINI, PAGE_BAITUL_MAAL, PAGE_BISNIS_ANGGOTA } from '../../../constanta/index'

const Header = () => {

    return (
        <>
            <header>
                <nav style={{display: 'flex'}}>
                    <p>
                    Logo
                    </p>
                    <Link to="/">
                        <p>
                            Home
                        </p>
                    </Link>
                    <Link to={`${PAGE_TENTANG_KAMI}`}>
                        <p>
                            Tentang Kami
                        </p>
                    </Link>
                    <Link to={`${PAGE_INFORMASI_TERKINI}`}>
                        <p>
                            Informasi Terkini
                        </p>
                    </Link>
                    <Link to={`${PAGE_BISNIS_ANGGOTA}`}>
                        <p>
                            Bisnis Anggota
                        </p>
                    </Link>
                    <Link to={`${PAGE_BAITUL_MAAL}`}>
                        <p>
                            Baitul Maal
                        </p>
                    </Link>
                
                    <button type="button">
                        Cek Saldo
                    </button>
                    <button type="button">
                        Daftar
                    </button>    

                </nav>
            </header>

     
                
        </>
        
    )
}

export default Header