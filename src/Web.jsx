import React from 'react'
import { Cabecera, Cabecera1, Cabecera2, Cabecera3 } from './Cabecera'
import { ListarItems, ListarItems2, ListarItems3, ListarTabla, ListarTablas } from './ListarItems'
import ControlledCarousel from './Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import RedesSociales from './RedesSociales';
import Checkboxes from './Checkbox';
import BasicSelect from './Select';
/*Importar iconos */
import { DiAndroid } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import AccessibleIcon from '@mui/icons-material/Accessible';

function Web() {
  return (
    <div>
      
     
      <Checkboxes />
      <BasicSelect />

      <DiAndroid size={30} /> <FaReact size={40} color={"red"} />
      <AccessibleIcon sx={{ fontSize: 40, color: "orange" }} />

      <RedesSociales RRSS={[{ nombre: "Facebook", url: "hola" }, { nombre: "Instagram", url: "adios" }, { nombre: "Linkedin", url: "otra" }, { nombre: "Google", url: "google" }]} />


    </div>
  )
}

export default Web