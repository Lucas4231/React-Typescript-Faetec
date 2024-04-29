import { useNavigate } from 'react-router-dom';
import '../index.css'

export function Tela5(){
    const navi = useNavigate();
    return(
        <>
            <h3>Tela 5</h3>
            <button onClick={()=>{navi('/')}} >Voltar</button>
        </>
    );
}