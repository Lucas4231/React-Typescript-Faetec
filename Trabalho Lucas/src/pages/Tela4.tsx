import { useNavigate } from 'react-router-dom';
import '../index.css'

export function Tela4(){
    const navi = useNavigate();
    return(
        <>
            <h3>Tela 4</h3>
            <button onClick={()=>{navi('/')}} >Voltar</button>
        </>
    );
}