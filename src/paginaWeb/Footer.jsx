import React from 'react'
import './footer.module.css'
/* Iconos MaterialUI */
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaTwitter } from "react-icons/fa";

function Footer({ RRSS }) {
  return (
    <footer>
      <a href="https://www.instagram.com/explore/locations/115645025115521/ies-cura-valera/"><InstagramIcon /> Instagram</a>
      <a href="https://www.facebook.com/p/IesCura-Valera-100064751317201/"><FacebookIcon />Facebook</a>
      <a href="https://x.com/iescuravalera?lang=es"><FaTwitter />Twitter </a>
      {/*Enlace del instituto */}
      <a href="https://iescuravalera.es" > <img src="../../imagenes/logo.jpg" width="50" />  IES Cura Valera </a>
    </footer>
  )
}

export default Footer
/*
{
            RRSS.map((red,index) => {
            if (red==="Facebook"){
                return <a key= {index} href={red.url} >  <FacebookIcon sx={{ fontSize: 20, color:"red" }}/>  {red.nombre}</a>
            }
            else if(red==="Instagram"){
                return <a key= {index} href={red.url} >  <InstagramIcon sx={{ fontSize: 20, color: "green" }}/>  {red.nombre}</a>
            }
            else{
                return <a key= {index} href={red.url} >  <LanguageIcon sx={{ fontSize: 20, color:"brown" }}/>  {red.nombre}</a>
            }
          })
        }
*/