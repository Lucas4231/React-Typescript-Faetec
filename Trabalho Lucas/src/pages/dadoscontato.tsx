import { useContext } from 'react';
import { valueContext } from '../Routes';
import { useNavigate } from 'react-router-dom';

export function Dadoscontato(){
    const { value } = useContext(valueContext);
    const navi = useNavigate();
    return(
        <>
            <h1>Teste Context</h1>
            <p>{value.nome}</p>
            <p>{value.email}</p>
            <p>{value.assunto}</p>
            <p>{value.msg}</p>
            <button onClick={()=>{navi('/Contato')}}>Voltar</button>
        </>
    );
}