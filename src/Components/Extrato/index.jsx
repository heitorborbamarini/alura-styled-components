import React from 'react';
import {Box, Botao} from '../../Components/UI';
import {extratoLista} from '../../info';

const Extrato = () => {

    return (
        <Box>
            {extratoLista.updates.map(({Id, type, from, value, date}) => {
return(
     <div   key={Id}>
        <div> {type}</div>  
        <div>{from}</div> 
    </div>
    );
 })} 

<Botao>Ver Mais</Botao>
        </Box>
    );
};
export default Extrato;