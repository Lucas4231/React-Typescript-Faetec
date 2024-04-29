import { useNavigate } from 'react-router-dom';
import '../index.css'

export function Tela6(){
    const navi = useNavigate();
    return(
        <>
            <h3>Tela 6</h3>
            <button onClick={()=>{navi('/')}} >Voltar</button>
        </>
    );
}