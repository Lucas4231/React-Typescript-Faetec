import { useNavigate } from 'react-router-dom';
import '../index.css'

export function Tela3(){
    const navi = useNavigate();
    return(
        <>
            <h3>Tela 3</h3>
            <button onClick={()=>{navi('/')}} >Voltar</button>
        </>
    );
}