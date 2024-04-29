import { useNavigate } from 'react-router-dom';
import '../index.css'

export function Tela7(){
    const navi = useNavigate();
    return(
        <>
            <h3>Tela 7</h3>
            <button onClick={()=>{navi('/')}} >Voltar</button>
        </>
    );
}