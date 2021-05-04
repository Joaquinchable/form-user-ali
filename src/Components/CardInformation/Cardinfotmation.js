import React from 'react';
import { ContainerMessage} from "../../Styled/styled";


const Cardinfotmation = () => {


    return (

        <ContainerMessage >
        {" "}
        <p> Revisa que tus datos sean correctos</p>{" "}
         <ul>
           <li>Nombre completo:  </li>
           <li>Fecha de naciemiento:     </li>
           <li>Correo:                   </li>
           <li>Celular:                  </li>
         </ul>

      </ContainerMessage >
                 
         

    )
}


export default Cardinfotmation

